export const ESC = '\x1b';
export const BEL = '\x07';

export const ansi = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  underline: '\x1b[4m',
  
  // Basic colors
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  
  // 256-color foreground helper
  fg256: (n: number) => `\x1b[38;5;${n}m`,
  bg256: (n: number) => `\x1b[48;5;${n}m`,

  // Design Tokens (256-color presets for premium aesthetics)
  primary: '\x1b[38;5;45m',     // Bright Electric Cyan
  secondary: '\x1b[38;5;99m',   // Cyber Indigo / Violet
  highlight: '\x1b[38;5;214m',   // Warm Gold Amber
  success: '\x1b[38;5;48m',     // Matrix Emerald Green
  danger: '\x1b[38;5;196m',     // Vibrant Coral Red
  white: '\x1b[38;5;255m',      // Crisp High-Contrast White
  gray: '\x1b[38;5;244m',       // Professional Steel Gray
  darkGray: '\x1b[38;5;238m',   // Dim Muted Slate Gray
};

// OSC 8 hyperlink helper
export function link(text: string, url: string) {
  return `${ESC}]8;;${url}${BEL}${text}${ESC}]8;;${BEL}`;
}

// Visual layout box-drawing card builder
export function drawBox(title: string, lines: string[], width: number = 72, color = ansi.gray) {
  const { reset, bold, white } = ansi;
  
  // Top border with custom title
  const topText = `─ ${bold}${white}${title}${reset} ${color}`;
  const topBar = `${color}┌${topText}${'─'.repeat(Math.max(0, width - title.length - 3))}┐${reset}`;
  
  // Inner lines padded to fit exact width
  const body = lines.map(line => {
    // Strip ANSI color codes and hyperlinks to get exact visual text width
    const cleanLine = line
      .replace(/\x1b\[[0-9;]*m/g, '')
      .replace(/\x1b\]8;;.*?\x07/g, '');
    const pad = Math.max(0, width - cleanLine.length - 2);
    return `${color}│${reset} ${line}${' '.repeat(pad)} ${color}│${reset}`;
  });
  
  // Bottom border
  const bottomBar = `${color}└${'─'.repeat(width)}┘${reset}`;
  
  return [topBar, ...body, bottomBar].join('\n');
}

export function terminalLinesResponse(lines: string[]): Response {
  return new Response(lines.join('\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}


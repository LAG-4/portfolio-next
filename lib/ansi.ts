export const ESC = '\x1b';
export const BEL = '\x07';

export const ansi = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  underline: '\x1b[4m',
  // 16-color examples
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  magenta: '\x1b[35m',
  // 256-color helper
  fg256: (n: number) => `\x1b[38;5;${n}m`,
};

// OSC 8 hyperlink helper
export function link(text: string, url: string) {
  return `${ESC}]8;;${url}${BEL}${text}${ESC}]8;;${BEL}`;
}

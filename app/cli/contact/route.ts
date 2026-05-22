import { ansi, link, drawBox, streamLinesResponse } from '@/lib/ansi';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const { bold, reset, dim, white, gray } = ansi;

  const contactLines = [
    `${bold}${white}- Email   :${reset} ${link('aryangupta4feb@gmail.com', 'mailto:aryangupta4feb@gmail.com')}`,
    `${bold}${white}- Website :${reset} ${link('https://www.lagaryan.click', 'https://www.lagaryan.click')}`,
    `${bold}${white}- GitHub  :${reset} ${link('github.com/LAG-4', 'https://github.com/LAG-4')}`,
    `${bold}${white}- LinkedIn:${reset} ${link('linkedin.com/in/aryan-gupta4203', 'https://www.linkedin.com/in/aryan-gupta4203/')}`,
    `${bold}${white}- X/Twitter:${reset} ${link('x.com/lag_aryan', 'https://x.com/lag_aryan')}`,
    ``,
    `${bold}${white}- Location:${reset} Hyderabad, TS, India`,
    `${bold}${white}- Mobile  :${reset} +91 9267913652`
  ];

  const content = [
    drawBox('CONTACT ARCHIVES & SOCIAL DIRECTORY', contactLines, 75, gray),
    '',
    `${dim}Hyperlinks are fully clickable directly in modern terminal shells (OSC 8).${reset}`
  ].join('\n').split('\n');

  return streamLinesResponse(content, request);
}

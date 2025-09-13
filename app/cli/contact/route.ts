import { ansi, link } from '@/lib/ansi';

export const runtime = 'nodejs';

export async function GET() {
  const { bold, reset } = ansi;
  const lines = [
    `${bold}Contact${reset}`,
    '',
    `Email: ${link('aryangupta4feb@gmail.com', 'mailto:aryangupta4feb@gmail.com')}`,
    `GitHub: ${link('@LAG-4', 'https://github.com/LAG-4')}`,
    `X/Twitter: ${link('@lag_aryan', 'https://x.com/lag_aryan')}`,
    `LinkedIn: ${link('Aryan Gupta', 'https://www.linkedin.com/in/aryan-gupta4203/')}`,
  ];
  return new Response(lines.join('\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

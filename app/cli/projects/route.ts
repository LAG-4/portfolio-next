import { ansi, link } from '@/lib/ansi';

export const runtime = 'nodejs';

export async function GET() {
  const { bold, reset, cyan, dim } = ansi;
  const items = [
    { name: "LearnAI (Play Store App)", url: 'https://play.google.com/store/apps/details?id=com.lagaryan.learnai' },
    { name: "Mental Health & Welfare App", url: 'https://www.lagaryan.click#projects' },
    { name: "Gaia's Touch (NGO platform)", url: 'https://www.lagaryan.click#projects' },
    { name: 'SheSafe (Campus safety)', url: 'https://www.lagaryan.click#projects' },
    { name: 'Company Insights AI Agent', url: 'https://www.lagaryan.click#projects' },
    { name: 'Voice-Controlled Car (Raspberry Pi)', url: 'https://www.lagaryan.click#projects' },
  ];

  const lines = [
    `${bold}${cyan}Projects${reset}`,
    '',
    ...items.map(p => `-  ${link(p.name, p.url)}`),
    '',
  `${dim}Tip: visit the website for descriptions, metrics, and demos.${reset}`,
  ];

  return new Response(lines.join('\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

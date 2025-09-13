import { ansi, link } from '@/lib/ansi';

export const runtime = 'nodejs';

export async function GET() {
  const { bold, reset, cyan, dim } = ansi;
  const lines = [
    `${bold}${cyan}Competitions & Awards${reset}`,
    '',
    `• ${bold}Winner, Smart India Hackathon (2023)${reset} — National winner under Govt. of India (women’s safety app).`,
    `• ${bold}Multiple Hackathon Finalist${reset} — Top-tier finishes (Top 5 / Top 10) across 4–5 events.`,
    `• ${bold}Startup Pitch Experience${reset} — Presented at a government incubator meetup.`,
    `• ${bold}Special Mentions, Google Hackathon${reset}.`,
    '',
    `${dim}See more on the website projects page for context and demos.${reset}`,
  ];
  return new Response(lines.join('\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

import { ansi, drawBox, streamLinesResponse } from '@/lib/ansi';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const { bold, reset, highlight, dim, white } = ansi;

  const awardLines = [
    `${bold}${white}- Winner, Smart India Hackathon (SIH 2023)${reset}`,
    `  ${dim}Scope: National (Govt. of India) | Project: SheSafe${reset}`,
    `  - Championed first place out of thousands in campus safety IoT.`,
    `  - Integrated Arduino micro-wearables with secure Firebase DBs.`,
    ``,
    `${bold}${white}- Multiple Hackathon Finalist${reset}`,
    `  - Consistently ranked Top 5 / Top 10 across 4+ high-profile events.`,
    `  - Amdocs Talent Tank Semi-Finalist (Top 10% bracket globally).`,
    ``,
    `${bold}${white}- Special Mentions, Google Hackathon${reset}`,
    `  - Recognized for designing innovative green carbon footprints.`,
    ``,
    `${bold}${white}- Incubator Startup Pitch Experience${reset}`,
    `  - Successfully pitched campus safety IoT to regional state panels.`
  ];

  const content = [
    drawBox('ACADEMIC AWARDS & COMPETITIVE ACHIEVEMENTS', awardLines, 75, highlight),
    '',
    `${dim}Detailed hackathon portfolios, photos, and diplomas are available on requests.${reset}`
  ].join('\n').split('\n');

  return streamLinesResponse(content, request);
}

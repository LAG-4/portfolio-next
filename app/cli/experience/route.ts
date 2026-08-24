import { ansi, drawBox, terminalLinesResponse } from '@/lib/ansi';

export const dynamic = 'force-static';

export async function GET() {
  const { bold, reset, secondary, dim, white, primary, success } = ansi;

  const expLines = [
    `${bold}${white}- Systems Engineer, IKEA Account @ Infosys${reset}`,
    `  ${dim}Duration: Feb 2026 - Present | Location: India${reset}`,
    `  - Monitor Grafana and Splunk dashboards for IKEA systems.`,
    `  - Cover web, app, and in-store service dashboards.`,
    `  - Raise tickets for detected issues or service downtime.`,
    `  - Report incidents to the responsible teams.`,
    ``,
    `${bold}${white}- Marketing Head -> COO @ DailywellnessAI${reset}`,
    `  ${dim}Duration: Dec 2024 - Feb 2025 | Location: Hybrid${reset}`,
    `  - Managed Agile Scrum sprints coordinating design & code pipelines.`,
    `  - Scaled mobile-web product adoption to over ${bold}${primary}15,000+ active users${reset}.`,
    `  - Authored strategic investor pitch decks and digital campaigns.`,
    ``,
    `${bold}${white}- Flutter Development Intern @ Persist Ventures${reset}`,
    `  ${dim}Duration: May 2024 - July 2024 | Location: Remote${reset}`,
    `  - Programmed highly responsive cross-platform workflows in Dart.`,
    `  - Integrated Django APIs, reducing latency by ${bold}${success}30%${reset} via state caches.`,
    `  - Designed Figma UX flows and built them to pixel-perfection.`
  ];

  const content = [
    drawBox('PROFESSIONAL INDUSTRIAL EXPERIENCE', expLines, 75, secondary),
    '',
    `${dim}Backups, certificates, and academic transcripts available upon request.${reset}`
  ].join('\n').split('\n');

  return terminalLinesResponse(content);
}

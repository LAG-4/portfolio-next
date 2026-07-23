import { ansi, drawBox, streamLinesResponse } from '@/lib/ansi';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { bold, reset, secondary, dim, white, primary, success } = ansi;

  const expLines = [
    `${bold}${white}- Systems Engineer (Mainframe Developer) @ Infosys${reset}`,
    `  ${dim}Duration: Feb 2026 - Present | Location: India${reset}`,
    `  - Specializing in mainframe database design & JCL operations.`,
    `  - Developing and debugging COBOL scripts on IBM z/OS mainframes.`,
    `  - Maintaining enterprise transaction database integrity in DB2.`,
    `  - Completed enterprise training in Java, SQL & OOP architectures.`,
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

  return streamLinesResponse(content, request);
}

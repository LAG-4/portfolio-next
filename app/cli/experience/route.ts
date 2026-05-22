import { ansi } from '@/lib/ansi';

export const runtime = 'nodejs';

export async function GET() {
  const { bold, reset, cyan, dim } = ansi;
  const lines = [
    `${bold}${cyan}Experience${reset}`,
    '',
    `${bold}Systems Engineer (Mainframe Developer) — Infosys (Feb 2026–Present)${reset}`,
    `• Specializing in mainframe applications: writing COBOL, JCL, and executing queries on DB2 inside IBM z/OS.`,
    `• Completed enterprise-grade training in Java, SQL, and database systems.`,
    '',
    `${bold}Marketing Head → COO — DailywellnessAI (Dec 2024–Feb 2025)${reset}`,
    `• Led Agile workflows (Scrum), managed engineering/design/marketing; scaled app to 15K+ users; created pitch decks and content.`,
    '',
    `${bold}Flutter Developer Intern — Persist Ventures Pvt. Ltd (May–Jul 2024)${reset}`,
    `• Built a Flutter app end-to-end with smooth UX; integrated Django APIs; collaborated across teams.`,
    '',
    `${dim}More details and references available on request.${reset}`,
  ];
  return new Response(lines.join('\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

import { ansi, drawBox, terminalLinesResponse } from '@/lib/ansi';

export const dynamic = 'force-static';

export async function GET() {
  const { bold, reset, highlight, dim, white } = ansi;

  const skillLines = [
    `${bold}${white}- Observability :${reset} Grafana dashboards, Splunk logs, service monitoring`,
    `${bold}${white}- Incident Ops  :${reset} Issue detection, ticketing, reporting, escalation`,
    `${bold}${white}- Languages     :${reset} Java, Dart, Python, JavaScript, TypeScript, SQL`,
    `${bold}${white}- Web & Mobile  :${reset} Flutter & Dart, Next.js, React, Node.js, Express`,
    `${bold}${white}- IoT & Systems :${reset} Arduino, ESP32, Wearables, SIH 2023 Campus Safety`,
    `${bold}${white}- Infrastructure:${reset} Linux Homelabs, Docker, n8n, Cloudflare, VPNs`,
    `${bold}${white}- Design Suite  :${reset} Figma, Photoshop, Adobe After Effects, Blender (basic)`,
    ``,
    `${bold}${white}- Certifications:${reset}`,
    `  - AWS Certified Cloud Practitioner (AWS CCP)`,
    `  - Google UX Design Foundations Certificate`,
    `  - Full-Stack Developer Certificate (Ethnus MERN)`,
  ];

  const content = [
    drawBox('TECHNICAL KNOWLEDGE & CERTIFICATIONS', skillLines, 75, highlight),
    '',
    `${dim}Run "curl -L lagaryan.click/cli" to see the rating matrix progress indicators.${reset}`
  ].join('\n').split('\n');

  return terminalLinesResponse(content);
}

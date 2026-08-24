import { ansi, link, drawBox, terminalLinesResponse } from '@/lib/ansi';

export const dynamic = 'force-static';

function banner() {
  const { bold, primary, secondary, reset, white, dim } = ansi;
  const line = `${secondary}${'═'.repeat(77)}${reset}`;
  const titleLine = `${' '.repeat(33)}${bold}${primary}ARYAN GUPTA${reset}${' '.repeat(33)}`;
  const subtitleLine = `${' '.repeat(14)}${bold}${white}Systems Engineer & Mainframe Developer @ Infosys${reset}${' '.repeat(15)}`;
  const sessionLine = `${' '.repeat(20)}${dim}Active Session // lagaryan.click/cli${reset}${' '.repeat(21)}`;
  return [line, titleLine, subtitleLine, sessionLine, line].join('\n');
}


export async function GET() {
  const { bold, reset, dim, primary, secondary, highlight, success, white, gray } = ansi;
  const site = 'https://www.lagaryan.click';

  const timeString = 'IST (UTC+05:30)';

  // Telemetry details inside a clean standard card to guarantee exact alignment
  const telemetryLines = [
    `${bold}${primary}HOST:${reset} lagaryan.click      ${bold}${secondary}OS:${reset} IBM z/OS / Linux      ${bold}${highlight}UPTIME:${reset} Active 2026`,
    `${bold}${primary}PORT:${reset} 80 (HTTP)           ${bold}${secondary}TIME:${reset} ${timeString}          ${bold}${highlight}LOC:${reset} Hyderabad, IN`
  ];
  const telemetryBox = drawBox('SYSTEM TELEMETRY', telemetryLines, 75, white);

  // Box 1: Core profile info
  const aboutLines = [
    `Systems Engineer at ${bold}${primary}Infosys${reset} specializing in mainframe`,
    `database design & COBOL/JCL on IBM z/OS enterprise systems.`,
    `A B.Tech CS graduate from ${bold}${primary}Vellore Institute of Technology${reset}`,
    `with an academic record of GPA: 8.18/10.`,
    `National winner at the prestigious ${bold}${highlight}Smart India Hackathon 2023${reset}.`,
    `I build AI automation pipelines, Flutter mobile architectures,`,
    `and self-hosted network infrastructures & homelabs.`
  ];
  const aboutBox = drawBox('CORE CONSOLE INFO', aboutLines, 75, secondary);

  // Box 2: Job timeline
  const expLines = [
    `${bold}${white}- Systems Engineer (Mainframe Developer) @ Infosys${reset} ${dim}(Feb 2026 - Present)${reset}`,
    `  Specializing in core banking & transaction codes using COBOL & JCL.`,
    `  Optimizing high-performance database schema queries in DB2 systems.`,
    ``,
    `${bold}${white}- Flutter Development Intern @ Persist Ventures${reset} ${dim}(May 2024 - July 2024)${reset}`,
    `  Scaled production client mobile apps serving ${bold}${primary}15,000+ active devices${reset}.`,
    `  Integrated Django REST APIs, reducing database latency by ${bold}${success}30%${reset}`,
    `  using structured state management caches.`
  ];
  const expBox = drawBox('PROFESSIONAL TIMELINE', expLines, 75, primary);

  // Box 3: Skill ratings using standard ASCII grids to prevent terminal emoji width errors
  const skillLines = [
    `${bold}${white}Mainframe & z/OS${reset}   [=========-] ${bold}${success}90%${reset}  ${dim}(COBOL, JCL, IBM z/OS, DB2)${reset}`,
    `${bold}${white}Flutter & Dart  ${reset}   [========--] ${bold}${success}80%${reset}  ${dim}(Cross-platform Mobile, Riverpod)${reset}`,
    `${bold}${white}Java & SQL Core ${reset}   [========--] ${bold}${success}80%${reset}  ${dim}(Enterprise training, RDBMS, DB2)${reset}`,
    `${bold}${white}SIH & IoT Eng   ${reset}   [========--] ${bold}${success}80%${reset}  ${dim}(SIH 2023 Winner, IoT & Firebase)${reset}`,
    `${bold}${white}Infrastructure  ${reset}   [=======---] ${bold}${success}70%${reset}  ${dim}(Docker, Linux Homelabs, n8n, VPN)${reset}`
  ];
  const skillBox = drawBox('TECHNICAL SKILL MATRIX', skillLines, 75, highlight);

  // Box 4: Legend commands
  const legendLines = [
    `${bold}${white}curl -L lagaryan.click/cli/projects${reset}    ${dim}Explore production projects${reset}`,
    `${bold}${white}curl -L lagaryan.click/cli/skills${reset}      ${dim}View skills & certifications${reset}`,
    `${bold}${white}curl -L lagaryan.click/cli/experience${reset}  ${dim}Full industrial work timeline${reset}`,
    `${bold}${white}curl -L lagaryan.click/cli/homelab${reset}     ${dim}Review self-hosted RPi setup${reset}`,
    `${bold}${white}curl -L lagaryan.click/cli/awards${reset}      ${dim}National hackathon records${reset}`,
    `${bold}${white}curl -L lagaryan.click/cli/contact${reset}     ${dim}Get email & social links${reset}`
  ];
  const legendBox = drawBox('AVAILABLE COMMANDS INDEX', legendLines, 75, gray);

  const bannerLines = banner().split('\n');
  const bodyText = [
    telemetryBox,
    '',
    aboutBox,
    '',
    expBox,
    '',
    skillBox,
    '',
    legendBox,
    '',
    `${dim}Visit my responsive portfolio ${link('lagaryan.click', site)} in your browser for a better view.${reset}`
  ].join('\n').split('\n');

  const allLines = [...bannerLines, ...bodyText];

  return terminalLinesResponse(allLines);
}

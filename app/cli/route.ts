import { ansi, link } from '@/lib/ansi';

export const runtime = 'nodejs';
// export const dynamic = 'force-static'; // or 'force-dynamic' if content changes often

// Toggle streaming output (optional)
const USE_STREAM = false;

function banner() {
  const { bold, cyan, reset } = ansi;
  const art = [
    '   ░███    ░█████████  ░██     ░██    ░███    ░███    ░██ ',
    '  ░██░██   ░██     ░██  ░██   ░██    ░██░██   ░████   ░██ ',
    ' ░██  ░██  ░██     ░██   ░██ ░██    ░██  ░██  ░██░██  ░██ ',
    '░█████████ ░█████████     ░████    ░█████████ ░██ ░██ ░██ ',
    '░██    ░██ ░██   ░██       ░██     ░██    ░██ ░██  ░██░██ ',
    '░██    ░██ ░██    ░██      ░██     ░██    ░██ ░██   ░████ ',
    '░██    ░██ ░██     ░██     ░██     ░██    ░██ ░██    ░███ ',
    '                                                          ',
    '                                                          ',
    '                                                          ',
  ];
  return `${bold}${cyan}${art.join('\n')}${reset}`;
}

function body() {
  const { bold, reset, dim, green, cyan, underline } = ansi;
  const site = 'https://www.lagaryan.click';

  const h = (title: string) => `${cyan}${bold}${title}${reset}\n${dim}${'─'.repeat(Math.min(60, title.length))}${reset}`;

  const about = [
    h('About'),
    `B.Tech (CS) senior; SIH 2023 winner.`,
    `I build AI agents, Flutter apps, and rapid MVPs that ship in days.`,
  ].join('\n');

  const socials = [
    h('Socials'),
    `• GitHub   : ${link('github.com/LAG-4', 'https://github.com/LAG-4')}`,
    `• LinkedIn : ${link('linkedin.com/in/aryan-gupta4203', 'https://www.linkedin.com/in/aryan-gupta4203/')}`,
    `• X/Twitter: ${link('x.com/lag_aryan', 'https://x.com/lag_aryan')}`,
    `• Email    : ${link('aryangupta4feb@gmail.com', 'mailto:aryangupta4feb@gmail.com')}`,
    `• Website  : ${link('lagaryan.click', site)}`,
  ].join('\n');

  const highlights = [
    h('Highlights'),
    `• ${bold}Winner, Smart India Hackathon 2023${reset}`,
    `• Top 5/Top 10 finishes across multiple hackathons`,
    `• COO (ex), scaled product to ${bold}15K+ users${reset}`,
    `• Active contributor to ${link('OpenCode', 'https://github.com/anomalyco/opencode')}`,
    `• Homelab: Jellyfin, Immich, n8n on Raspberry Pi with Tailscale`,
  ].join('\n');

  const skills1 = ['Flutter', 'Dart', 'Java', 'Python', 'React/Next.js', 'TypeScript', 'Firebase', 'AWS'];
  const skills2 = ['LangChain', 'Phidata', 'Linux', 'n8n', 'Raspberry Pi', 'Tailwind', 'Figma', 'Adobe AE/PS'];
  const skills = [
    h('Skills'),
    skills1.join(`${dim} · ${reset}`),
    skills2.join(`${dim} · ${reset}`),
  ].join('\n');

  const legend = [
    `${bold}${underline}Legend${reset}`,
    `${green}$ curl -L${reset} ${dim}lagaryan.click${reset}             ${dim}Get this page${reset}`,
    `${green}$ curl -L${reset} ${dim}lagaryan.click/cli/projects${reset}    ${dim}Projects list${reset}`,
    `${green}$ curl -L${reset} ${dim}lagaryan.click/cli/awards${reset}     ${dim}Awards & comps${reset}`,
    `${green}$ curl -L${reset} ${dim}lagaryan.click/cli/skills${reset}      ${dim}Skills & certs${reset}`,
    `${green}$ curl -L${reset} ${dim}lagaryan.click/cli/experience${reset}  ${dim}Work summary${reset}`,
    `${green}$ curl -L${reset} ${dim}lagaryan.click/cli/homelab${reset}     ${dim}Homelab/DevOps${reset}`,
  ].join('\n');

  return [
    about,
    '',
    socials,
    '',
    highlights,
    '',
    skills,
    '',
    legend,
    '',
  `${dim}Visit my website ${link('lagaryan.click', site)} for a better view.${reset}`,
  ].join('\n');
}

export async function GET() {
  if (!USE_STREAM) {
    const text = `${banner()}\n${body()}\n`;
    return new Response(text, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    });
  }

  // Streaming variant when USE_STREAM=true
  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      const chunks = [
        banner() + '\n',
        'Welcome to the CLI portfolio...\n',
        'Loading projects...\n',
        'Done.\n\n',
        body() + '\n',
      ];
      for (const c of chunks) {
        controller.enqueue(encoder.encode(c));
        await new Promise((r) => setTimeout(r, 250));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

// (Streaming legacy variant removed for lean deployment)

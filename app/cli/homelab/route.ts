import { ansi, drawBox, streamLinesResponse } from '@/lib/ansi';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { bold, reset, primary, dim, white, success } = ansi;

  const homelabLines = [
    `${bold}${white}- Hardware Cluster :${reset} Raspberry Pi Server node, TrueNAS network storage.`,
    `${bold}${white}- Containerization :${reset} Docker & Docker-Compose microservices orchestration.`,
    `${bold}${white}- Core Server Apps :${reset}`,
    `  - ${bold}${primary}Jellyfin${reset} : H.264/H.265 media streaming node.`,
    `  - ${bold}${primary}Immich${reset}   : Self-hosted photo backup client (AI tagging).`,
    `  - ${bold}${primary}n8n${reset}      : Pipeline workflow orchestrator & cron automations.`,
    ``,
    `${bold}${white}- Network Routing  :${reset}`,
    `  - ${bold}${success}Tailscale VPN${reset} : WireGuard overlay network linking nodes securely.`,
    `  - ${bold}${success}Cloudflare DNS${reset}: Managed domains, SSL keys & zero-trust tunnels.`,
    `  - ${bold}${success}cloudflared${reset}   : Secure outbound proxy shielding public IP exposures.`,
    ``,
    `${bold}${white}- Backup Strategies:${reset} RAID mirroring, TrueNAS snapshots & off-sites.`
  ];

  const content = [
    drawBox('HOMELAB DEVOPS & INFRASTRUCTURE CONFIG', homelabLines, 75, primary),
    '',
    `${dim}Homelab builds are reproducible via custom docker-compose YAML pipelines.${reset}`
  ].join('\n').split('\n');

  return streamLinesResponse(content, request);
}

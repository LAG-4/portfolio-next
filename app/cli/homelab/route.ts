import { ansi } from '@/lib/ansi';

export const runtime = 'nodejs';

export async function GET() {
  const { bold, reset, cyan, dim } = ansi;
  const lines = [
    `${bold}${cyan}Systems Administration & Homelab${reset}`,
    '',
    `${bold}Infra:${reset} Raspberry Pi server; ${bold}Docker${reset} + Docker Compose for services; ${bold}TrueNAS${reset} for storage/snapshots.`,
    `${bold}Apps:${reset} Jellyfin (media), Immich (AI photo backup), n8n (automation/workflows).`,
    `${bold}Network:${reset} ${bold}Cloudflare DNS${reset} + ${bold}cloudflared${reset} (Tunnels) for secure public access; ${bold}Tailscale${reset} for VPN/remote.`,
    `${bold}Domains:${reset} Managed subdomains and routing via Cloudflare (Zero Trust policies).`,
    '',
    `${dim}Self-hosted, reproducible via Compose; backups handled by TrueNAS snapshots.${reset}`,
  ];
  return new Response(lines.join('\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

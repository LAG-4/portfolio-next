import { ansi, link } from '@/lib/ansi';

export const runtime = 'nodejs';

export async function GET() {
  const { bold, reset, cyan, dim } = ansi;
  const lines = [
    `${bold}${cyan}Skills${reset}`,
    '',
    `${bold}Languages:${reset} Java, Dart, Python` ,
    `${bold}Technologies:${reset} Flutter, MERN Stack, Firebase, Git`,
    `${bold}AI:${reset} Gen AI, AI Agents, LangChain, Phidata (agno), Linux`,
    `${bold}Creative:${reset} Figma, Adobe After Effects, Photoshop, Lightroom, Canva`,
    `${bold}3D:${reset} Blender (basic)`,
    '',
    `${bold}Certificates:${reset} MERN Stack (Ethnus), AWS CCP, Google UX Foundations`,
    '',
    `${dim}See /cli/awards for competitions; /cli/projects for work samples.${reset}`,
  ];
  return new Response(lines.join('\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

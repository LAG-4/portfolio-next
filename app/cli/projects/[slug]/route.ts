import { ansi, link } from '@/lib/ansi';

export const runtime = 'nodejs';

const PROJECTS: Record<string, { name: string; desc: string; url: string } > = {
  'learnai': {
    name: 'LearnAI',
    desc: 'Flutter app to master AI concepts with structured learning and real-time industry updates; deployed on Google Play Store.',
    url: 'https://play.google.com/store/apps/details?id=com.lagaryan.learnai',
  },
  'mental-health-app': {
    name: 'Mental Health & Welfare App',
    desc: 'Campus-wide mental health platform with real-time monitoring; 5,000+ users; AI models for early distress detection.',
    url: 'https://www.lagaryan.click#projects',
  },
  'gaias-touch': {
    name: "Gaia's Touch",
    desc: 'Flutter app connecting NGOs with users; SDG filters, location-based discovery, in-app donations; +50% donations.',
    url: 'https://www.lagaryan.click#projects',
  },
  'shesafe': {
    name: 'SheSafe',
    desc: 'Campus safety app with Firebase, Aadhaar-based gender verification, chatbot, and IoT alerts; 5,000+ users.',
    url: 'https://www.lagaryan.click#projects',
  },
  'company-insights-agent': {
    name: 'Company Insights AI Agent',
    desc: 'Multi-agent system aggregating web news and stock data (DuckDuckGo + yfinance) into actionable intelligence.',
    url: 'https://www.lagaryan.click#projects',
  },
  'voice-car': {
    name: 'Voice-Controlled Car',
    desc: 'Raspberry Pi + Google Assistant + IFTTT + Adafruit; voice command execution ~90% accuracy.',
    url: 'https://www.lagaryan.click#projects',
  },
};

export async function GET(req: Request) {
  const { bold, reset, dim, cyan } = ansi;
  const { pathname } = new URL(req.url);
  const parts = pathname.split('/').filter(Boolean);
  const slug = parts[parts.length - 1];
  const p = PROJECTS[slug];
  if (!p) {
    const lines = [
      `${bold}${cyan}Project not found${reset}`,
      '',
      `Try: /cli/projects or visit ${link('Projects', 'https://lagaryan.click/projects')}`,
    ];
    return new Response(lines.join('\n') + '\n', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    });
  }

  const lines = [
    `${bold}${p.name}${reset}`,
    '',
    p.desc,
    '',
    `More: ${link(p.url, p.url)}`,
    `${dim}Tip: use a modern terminal for clickable links.${reset}`,
  ];

  return new Response(lines.join('\n') + '\n', {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

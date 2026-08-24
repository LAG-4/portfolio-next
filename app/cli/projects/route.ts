import { ansi, link, drawBox, terminalLinesResponse } from '@/lib/ansi';

export const dynamic = 'force-static';

export async function GET() {
  const { bold, reset, primary, dim, white } = ansi;

  const projectLines = [
    `${bold}${white}- Nail Bar by Kritika${reset} - ${dim}Client website and local search presence${reset}`,
    `  Next.js 16, local SEO & Google Business | Site: ${link('nailbar', 'https://nailbar-black.vercel.app')}`,
    ``,
    `${bold}${white}- LearnAI (Play Store App)${reset} - ${dim}Active Learning & gamified tech curriculum${reset}`,
    `  Flutter & Firestore RDBMS | Play Store link: ${link('Play Store', 'https://play.google.com/store/apps/details?id=com.lagaryan.learnai')}`,
    ``,
    `${bold}${white}- Hyd Cafe Finder${reset} - ${dim}Nomad wifi venues discovery platform${reset}`,
    `  Next.js 15, Convex DB & Cheerio scraping | Site: ${link('cafefinder-hyd', 'https://cafefinder-hyd.vercel.app/')}`,
    ``,
    `${bold}${white}- Quantum Finance AIStock${reset} - ${dim}LLM-powered financial advisory agent${reset}`,
    `  Streamlit, Ollama, Llama3 & Gemini | Github: ${link('finance_agent', 'https://github.com/LAG-4/finance_agent')}`,
    ``,
    `${bold}${white}- EcoRoom sustainable shop${reset} - ${dim}Eco renovations lead wizard & shop${reset}`,
    `  React 19, Tailwind CSS v4, Shadcn | Site: ${link('ecoroom', 'https://ecoroom.vercel.app')}`,
    ``,
    `${bold}${white}- AI Assistant Hub${reset} - ${dim}SQL Query engine, stock screener & personas council${reset}`,
    `  Python, OpenAI API, Streamlit | Site: ${link('multipurpose-ai', 'https://multipurpose-ai.streamlit.app/')}`,
    ``,
    `${bold}${white}- SheSafe (SIH Champion)${reset} - ${dim}National women campus safety IoT & App${reset}`,
    `  Flutter, Firebase, Arduino hardware, Aadhaar API | GitHub: ${link('sih', 'https://github.com/LAG-4/sih')}`
  ];

  const content = [
    drawBox('SELECTED PRODUCTION PROJECTS', projectLines, 75, primary),
    '',
    `${dim}Tip: visit the main website for interactive demonstrations and live stats.${reset}`
  ].join('\n').split('\n');

  return terminalLinesResponse(content);
}

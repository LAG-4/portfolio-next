/**
 * Personal notes for /now. Add, remove, or reorder entries here.
 * Keep this separate from project data: these are current personal picks.
 */
export interface PersonalPick {
  name: string;
  note: string;
  url?: string;
}

export interface PersonalGoal {
  title: string;
  note?: string;
  status: "working-on-it" | "up-next" | "done";
}

export interface Recommendation extends PersonalPick {
  category: "Tool" | "Read" | "Watch" | "Listen" | "Place" | "Other";
}

export interface PersonalNotes {
  /** ISO date of the last editorial update, not the page-render date. */
  updated: string | null;
  building: PersonalPick[];
  goalsYear: number;
  models: PersonalPick[];
  watching: PersonalPick[];
  goals: PersonalGoal[];
  recommendations: Recommendation[];
}

export const personalNotes: PersonalNotes = {
  updated: "2026-10-25",
  building: [
    {
      name: "Doer",
      note: "The project I’m building right now. More to share as it takes shape.",
    },
  ],
  goalsYear: 2026,
  models: [
    {
      name: "GPT-6.1 Sol",
      note: "My daily driver in Codex. For my usage, it’s the best value on the $20 plan and the one I can realistically keep using for most of my work.",
      url: "https://developers.openai.com/api/docs/models/gpt-6.1-sol",
    },
    {
      name: "GPT-6 Astra",
      note: "I bring it in for tougher decisions. It eats through my usage pretty quickly, so I use it sparingly.",
    },
    {
      name: "Muse Spark 1.3 Contributor",
      note: "The model I use most with my OpenCode Go subscription.",
    },
    {
      name: "Claude Haiku 5.5",
      note: "In the rotation for a few tasks, especially design work.",
      url: "https://dev.opencode.ai/v2/docs/console/models/",
    },
    {
      name: "DeepSeek V4.1 Flash",
      note: "A cheap option I reach for on some tasks. I’ve also found it more willing to attempt work that other models turn down.",
      url: "https://dev.opencode.ai/v2/docs/console/models/",
    },
  ],
  watching: [
    {
      name: "ThePrimeagen",
      note: "A regular in my YouTube rotation.",
      url: "https://www.youtube.com/@ThePrimeagen",
    },
    {
      name: "Theo — t3.gg",
      note: "Another of my go-to tech channels.",
      url: "https://www.youtube.com/@t3dotgg",
    },
    {
      name: "Tsoding",
      note: "I’ve been watching a few of his videos lately.",
      url: "https://www.youtube.com/@TsodingDaily",
    },
  ],
  goals: [
    {
      title: "Qualify for creator payouts on X",
      note: "First, work towards meeting the eligibility requirements for original-content payouts.",
      status: "working-on-it",
    },
    {
      title: "Earn from talking about tech",
      note: "I love tech and want to tweet about it. Getting paid a little for the posts I make would be a nice next step.",
      status: "up-next",
    },
    {
      title: "Buy a PS5 or a good gaming PC",
      note: "Get a gaming setup together. Playing GTA 6 is on the wish list.",
      status: "up-next",
    },
    {
      title: "Start earning money online",
      note: "A broader goal for this year: turn some of what I do online into income.",
      status: "working-on-it",
    },
  ],
  recommendations: [
    {
      name: "T3 Code",
      category: "Tool",
      note: "Loving this as an orchestrator UI for all my coding harnesses. Orchestrator V2 has been especially good.",
      url: "https://t3.codes/",
    },
  ],
};

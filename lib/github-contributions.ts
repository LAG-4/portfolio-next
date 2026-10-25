export interface ContributionDay {
  date: string;
  level: number;
  count: number;
}

export interface Contributions {
  total: number;
  days: ContributionDay[];
}

/** Read only the calendar fields from GitHub's public profile fragment. */
export function parseContributions(html: string): Contributions {
  const total = html.match(/([\d,]+)\s+contributions?\s+in the last year/i);
  if (!total) throw new Error("GitHub contribution total is missing");

  const counts = new Map<string, number>();
  for (const match of html.matchAll(
    /<tool-tip\b([^>]*)>([^<]*)<\/tool-tip>/g,
  )) {
    const id = match[1].match(/\bfor="([^"]+)"/)?.[1];
    const count = match[2].trim().match(/^(No|[\d,]+) contributions? on /);
    if (id && count)
      counts.set(
        id,
        count[1] === "No" ? 0 : Number(count[1].replaceAll(",", "")),
      );
  }

  const days: ContributionDay[] = [];
  for (const match of html.matchAll(/<td\b[^>]*\bdata-date="[^"]+"[^>]*>/g)) {
    const date = match[0].match(/\bdata-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
    const level = match[0].match(/\bdata-level="([0-4])"/)?.[1];
    const id = match[0].match(/\bid="([^"]+)"/)?.[1];
    const count = id ? counts.get(id) : undefined;
    if (
      !date ||
      level === undefined ||
      count === undefined ||
      !Number.isFinite(Date.parse(date))
    ) {
      throw new Error("GitHub contribution calendar format has changed");
    }
    days.push({ date, level: Number(level), count });
  }
  if (
    !days.length ||
    new Set(days.map((day) => day.date)).size !== days.length
  ) {
    throw new Error(
      "GitHub contribution calendar is empty or contains duplicate days",
    );
  }
  return {
    total: Number(total[1].replaceAll(",", "")),
    days: days.sort((a, b) => a.date.localeCompare(b.date)),
  };
}

export async function getContributions(): Promise<Contributions | null> {
  try {
    const response = await fetch(
      "https://github.com/users/LAG-4/contributions",
      {
        headers: { Accept: "text/html" },
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(6000),
      },
    );
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    return parseContributions(await response.text());
  } catch (error) {
    console.warn(
      "GitHub activity unavailable:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return null;
  }
}

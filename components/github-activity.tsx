import { ArrowUpRight } from "lucide-react";
import { getContributions } from "@/lib/github-contributions";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export async function GitHubActivity() {
  const activity = await getContributions();
  if (!activity)
    return (
      <section className="github-activity">
        <div className="section-heading">
          <h2>On GitHub</h2>
          <a
            className="quiet-link"
            href="https://github.com/LAG-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            LAG-4
            <ArrowUpRight size={13} />
          </a>
        </div>
        <p className="activity-unavailable">
          The contribution graph is unavailable right now. You can still find my
          work on GitHub.
        </p>
      </section>
    );

  const start = new Date(`${activity.days[0].date}T00:00:00Z`);
  const startOffset = start.getUTCDay();
  const weeks = Math.ceil((activity.days.length + startOffset) / 7);
  const width = weeks * 12;
  const labels: { month: string; x: number }[] = [];
  let lastMonth = -1;
  for (let week = 0; week < weeks; week++) {
    const day = activity.days[Math.max(0, week * 7 - startOffset)];
    if (!day) continue;
    const month = new Date(`${day.date}T00:00:00Z`).getUTCMonth();
    if (month !== lastMonth && week < weeks - 2) {
      // A partial opening month may have only one week; avoid overlapping labels.
      const previous = labels.at(-1);
      if (previous && week * 12 - previous.x < 30) labels.pop();
      labels.push({ month: months[month], x: week * 12 });
      lastMonth = month;
    }
  }
  const summary = `${activity.total.toLocaleString("en-US")} contributions in the last year`;
  return (
    <section className="github-activity" aria-labelledby="github-title">
      <div className="section-heading">
        <h2 id="github-title">On GitHub</h2>
        <a
          className="quiet-link"
          href="https://github.com/LAG-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          LAG-4
          <ArrowUpRight size={13} />
        </a>
      </div>
      <div
        className="contribution-scroll"
        tabIndex={0}
        role="region"
        aria-label="GitHub contribution calendar. Scroll horizontally to see the full year on small screens."
      >
        <svg
          className="contribution-calendar"
          viewBox={`0 0 ${width} 108`}
          role="img"
          aria-label={summary}
        >
          <title>
            {`${summary}, ${activity.days[0].date} to ${activity.days.at(-1)?.date}`}
          </title>
          {labels.map(({ month, x }, index) => (
            <text
              key={index}
              x={x}
              y={11}
              className="calendar-month"
              aria-hidden="true"
            >
              {month}
            </text>
          ))}
          {activity.days.map((day, index) => (
            <rect
              key={day.date}
              x={Math.floor((index + startOffset) / 7) * 12}
              y={22 + ((index + startOffset) % 7) * 12}
              width={9}
              height={9}
              rx={1.5}
              className={`contribution-cell level-${day.level}`}
            >
              <title>
                {`${day.count} ${day.count === 1 ? "contribution" : "contributions"} on ${day.date}`}
              </title>
            </rect>
          ))}
        </svg>
      </div>
      <div className="calendar-caption">
        <span>{summary}</span>
        <span
          className="calendar-key"
          aria-label="Contribution intensity from less to more"
        >
          Less{" "}
          {[0, 1, 2, 3, 4].map((level) => (
            <span key={level} className={`contribution-cell level-${level}`} />
          ))}{" "}
          More
        </span>
      </div>
    </section>
  );
}

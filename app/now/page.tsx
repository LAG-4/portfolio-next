import { ArrowUpRight, Check, Circle, CircleDashed } from "lucide-react";
import { personalNotes, type PersonalPick } from "@/lib/personal";

export const metadata = {
  title: "Now & favourites",
  description:
    "What I’m using, watching, working towards, and recommending. A personal notebook by Aryan Gupta.",
};

function PickList({ items, empty }: { items: PersonalPick[]; empty: string }) {
  if (!items.length) return <p className="personal-empty">{empty}</p>;
  return (
    <ul className="personal-picks">
      {items.map((item) => (
        <li key={item.name}>
          <div className="personal-pick-name">
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            ) : (
              <h3>{item.name}</h3>
            )}
          </div>
          <p>{item.note}</p>
        </li>
      ))}
    </ul>
  );
}

const goalStates = {
  "working-on-it": { label: "Working on it", icon: Circle },
  "up-next": { label: "Up next", icon: CircleDashed },
  done: { label: "Done", icon: Check },
};

export default function NowPage() {
  return (
    <article className="now-page">
      <header className="page-heading">
        <span className="eyebrow">A personal notebook</span>
        <h1>A few things I’m into.</h1>
        <p>
          The models I reach for, the people I learn from, and the things I want
          to do. A little space for whatever feels worth sharing.
        </p>
        {personalNotes.updated && (
          <span className="personal-updated">
            Last updated{" "}
            <time dateTime={personalNotes.updated}>
              {new Date(
                `${personalNotes.updated}T00:00:00Z`,
              ).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
                timeZone: "UTC",
              })}
            </time>
          </span>
        )}
      </header>
      <nav className="notebook-index" aria-label="Personal notebook sections">
        <a href="#building">Building</a>
        <a href="#models">Models</a>
        <a href="#watching">Watching</a>
        <a href="#goals">Goals</a>
        <a href="#recommendations">Worth sharing</a>
      </nav>
      <section className="notebook-section" id="building">
        <div className="notebook-heading">
          <span aria-hidden="true">01</span>
          <h2>Currently building</h2>
        </div>
        <PickList
          items={personalNotes.building}
          empty="Between projects. More soon."
        />
      </section>
      <section className="notebook-section" id="models">
        <div className="notebook-heading">
          <span aria-hidden="true">02</span>
          <h2>My model rotation</h2>
        </div>
        <p className="notebook-description">
          What I’m reaching for, and what I use each one for.
        </p>
        <PickList
          items={personalNotes.models}
          empty="I’m putting together my current model picks."
        />
      </section>
      <section className="notebook-section" id="watching">
        <div className="notebook-heading">
          <span aria-hidden="true">03</span>
          <h2>On my watch list</h2>
        </div>
        <p className="notebook-description">
          YouTube channels and people whose work I keep coming back to.
        </p>
        <PickList
          items={personalNotes.watching}
          empty="A few favourite channels are on the way."
        />
      </section>
      <section className="notebook-section" id="goals">
        <div className="notebook-heading">
          <span aria-hidden="true">04</span>
          <h2>Things I’m working towards</h2>
        </div>
        <p className="notebook-description">
          My list for {personalNotes.goalsYear}. Some practical, some just for
          me.
        </p>
        {personalNotes.goals.length ? (
          <ul className="personal-goals">
            {personalNotes.goals.map((goal) => {
              const { icon: Icon, label } = goalStates[goal.status];
              return (
                <li key={goal.title} className={`goal-${goal.status}`}>
                  <Icon size={15} aria-hidden="true" />
                  <div>
                    <h3>{goal.title}</h3>
                    {goal.note && <p>{goal.note}</p>}
                  </div>
                  <span className="goal-status">{label}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="personal-empty">
            I’ll share the goals I want to keep track of here.
          </p>
        )}
      </section>
      <section className="notebook-section" id="recommendations">
        <div className="notebook-heading">
          <span aria-hidden="true">05</span>
          <h2>Worth sharing</h2>
        </div>
        <p className="notebook-description">
          Tools, reads, places, and other good things I’d recommend.
        </p>
        {personalNotes.recommendations.length ? (
          <ul className="recommendation-list">
            {personalNotes.recommendations.map((item) => (
              <li key={item.name}>
                <span className="recommendation-category">{item.category}</span>
                <div>
                  <h3>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                        <ArrowUpRight size={13} aria-hidden="true" />
                      </a>
                    ) : (
                      item.name
                    )}
                  </h3>
                  <p>{item.note}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="personal-empty">
            Making a little room for the good finds.
          </p>
        )}
      </section>
      <aside className="notebook-note">
        A living list, updated when I find something worth passing on.
      </aside>
    </article>
  );
}

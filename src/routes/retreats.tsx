import { createFileRoute, Link } from "@tanstack/react-router";
import retreatLandscape from "@/assets/retreat-landscape.jpg";

export const Route = createFileRoute("/retreats")({
  head: () => ({
    meta: [
      { title: "Data Retreats — Get your team out of the office" },
      {
        name: "description",
        content:
          "Data Retreats are an emerging idea: bring a team somewhere beautiful for a couple of days and make room for thinking, learning, talking and reflecting.",
      },
      { property: "og:title", content: "Data Retreats — Get your team out of the office" },
      {
        property: "og:description",
        content:
          "An emerging idea for teams that want something different from another workshop, conference or offsite.",
      },
    ],
  }),
  component: Retreats,
});

const themes = [
  "Data and analytics strategy",
  "AI and the changing role of data teams",
  "Team health and ways of working",
  "Psychological safety",
  "Learning and upskilling",
  "Recovery, nature, good food",
];

function Retreats() {
  return (
    <article className="mx-auto max-w-5xl px-6 pt-10 md:px-10 md:pt-20">
      <p className="eyebrow">Data Retreats</p>
      <h1 className="measure mt-4 text-4xl leading-tight text-ink md:text-5xl">
        Get your team out of the office.
      </h1>

      <img
        src={retreatLandscape}
        width={1600}
        height={912}
        loading="lazy"
        alt="Still lake and pine forest in morning mist"
        className="mt-12 w-full object-cover"
      />

      <div className="mt-12 md:grid md:grid-cols-12 md:gap-12">
        <div className="md:col-span-7">
          <p className="text-lg leading-relaxed text-ink">
            Data Retreats are an emerging idea I&apos;m developing for teams and organisations that
            want something different from another workshop, conference or offsite.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Bring a team somewhere beautiful for a couple of days and create space for the things
            that are difficult to make room for in normal working life:
          </p>
          <p className="mt-6 font-display text-2xl italic text-primary">
            Thinking. Learning. Talking. Reflecting.
          </p>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            A retreat can combine data and analytics strategy, AI and the changing role of data
            teams, team health, ways of working, psychological safety, learning and upskilling —
            with time for recovery, nature, good food and conversations that don&apos;t need to fit
            into a 30-minute meeting.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The exact format is flexible. The idea is to create enough distance from everyday work
            for people to think properly about where they are, where they&apos;re going and how they
            want to work together.
          </p>
          <p className="mt-10 text-ink">Curious about the idea?</p>
          <Link
            to="/contact"
            className="mt-2 inline-block border-b border-clay pb-1 text-clay transition-opacity hover:opacity-70"
          >
            Get in touch
          </Link>
        </div>

        <aside className="mt-12 md:col-span-4 md:col-start-9 md:mt-2">
          <p className="eyebrow">Possible threads</p>
          <ul className="mt-5 space-y-3 text-muted-foreground">
            {themes.map((t) => (
              <li key={t} className="border-b border-border pb-3">
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted-foreground">
            Still taking shape — nothing here is a fixed programme.
          </p>
        </aside>
      </div>
    </article>
  );
}

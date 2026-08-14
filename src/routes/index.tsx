import { createFileRoute, Link } from "@tanstack/react-router";
import sophieWindow from "@/assets/sophie-window.jpg";
import sophieTable from "@/assets/sophie-table.jpg";
import retreatLandscape from "@/assets/retreat-landscape.jpg";
import { Newsletter } from "@/components/newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sophie Albrecht — Data & Insights Consultant and Facilitator" },
      {
        name: "description",
        content:
          "Independent Data & Insights consultant, advisor and facilitator. Helping organisations make better use of data — and helping people think more clearly about what matters.",
      },
      {
        property: "og:title",
        content: "Sophie Albrecht — Data & Insights Consultant and Facilitator",
      },
      {
        property: "og:description",
        content:
          "Data strategy, insights, decision-making, leadership and ways of working — shaped around what a team actually needs.",
      },
    ],
  }),
  component: Index,
});

const practice = [
  {
    title: "Data & Insights",
    lede: "Data work is most valuable when it helps people make better decisions.",
    body: [
      "I can help with questions around data and insights strategy, KPIs, measurement, prioritisation and how data teams can create more value for the wider organisation.",
      "The emphasis is not on producing more data for its own sake, but on making data genuinely useful.",
    ],
  },
  {
    title: "Working with data",
    lede: "Sometimes the challenge isn't the data itself. It's how people use it.",
    body: [
      "I work with leaders and teams to improve how they think about metrics, interpret information, ask better questions and bring data into everyday decision-making.",
      "This can include workshops, advisory work, facilitation or more hands-on support, depending on the situation.",
    ],
  },
  {
    title: "Data teams & leadership",
    lede: "Data teams sit in an interesting position.",
    body: [
      "They need technical expertise, but their impact increasingly depends on communication, prioritisation, business understanding and the ability to work effectively with the rest of the organisation.",
      "I help teams and leaders think about these broader questions — including how the role of data teams is changing as AI becomes part of everyday knowledge work.",
    ],
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-24 pt-10 md:px-10 md:pb-32 md:pt-20">
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <h1 className="text-[2.6rem] leading-[1.06] text-ink md:text-6xl">
              Data.
              <br />
              People.
              <br />
              <span className="italic text-primary">Better ways of working.</span>
            </h1>
            <p className="measure mt-8 text-lg leading-relaxed text-foreground/90">
              I help organisations make better use of data — and help the people working with it
              think more clearly about what actually matters.
            </p>
            <p className="measure mt-5 text-muted-foreground">
              I work across data strategy, insights, decision-making, leadership and ways of
              working, adapting the engagement to what a team or organisation actually needs.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-block border-b border-clay pb-1 text-clay transition-opacity hover:opacity-70"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-14 md:col-span-4 md:col-start-9 md:mt-2">
            <img
              src={sophieWindow}
              width={1200}
              height={1504}
              alt="Sophie sitting by a window with a notebook, looking out"
              className="w-full object-cover md:mt-8"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Independent consultant, advisor and facilitator.
            </p>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="eyebrow">What I do</p>
        <div className="mt-10 space-y-16 border-t border-border pt-10">
          {practice.map((item) => (
            <article key={item.title} className="md:grid md:grid-cols-12 md:gap-10">
              <h2 className="text-2xl text-ink md:col-span-4 md:text-[1.75rem]">{item.title}</h2>
              <div className="mt-4 md:col-span-7 md:col-start-6 md:mt-1">
                <p className="text-lg leading-relaxed text-ink">{item.lede}</p>
                {item.body.map((p) => (
                  <p key={p} className="mt-4 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How I work */}
      <section className="mx-auto mt-32 max-w-5xl px-6 md:px-10">
        <div className="bg-cream px-6 py-14 md:px-14">
          <p className="eyebrow">How I work</p>
          <div className="mt-8 md:grid md:grid-cols-12 md:gap-10">
            <p className="font-display text-2xl leading-snug text-ink md:col-span-5 md:text-3xl">
              I don&apos;t offer a rigid catalogue of consulting packages.
            </p>
            <div className="mt-6 md:col-span-6 md:col-start-7 md:mt-1">
              <p className="leading-relaxed text-muted-foreground">
                Every organisation has different problems, people and constraints, so engagements
                can be shaped around what is actually needed.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                That might mean strategic advice, a focused workshop, facilitation, helping a
                leadership team think through a data question, working with a data team, or a
                longer-term consulting engagement.
              </p>
              <p className="mt-4 leading-relaxed text-ink">
                The common thread is helping people get clearer about what matters and what to do
                next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Retreats teaser */}
      <section className="mx-auto mt-32 max-w-5xl px-6 md:px-10">
        <img
          src={retreatLandscape}
          width={1600}
          height={912}
          loading="lazy"
          alt="Misty pine forest reflected in a still lake at dawn"
          className="w-full object-cover"
        />
        <div className="mt-8 md:grid md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow">Data Retreats</p>
            <h2 className="mt-3 text-3xl leading-snug text-ink">Get your team out of the office.</h2>
          </div>
          <div className="mt-5 md:col-span-6 md:col-start-7 md:mt-9">
            <p className="leading-relaxed text-muted-foreground">
              An emerging idea I&apos;m developing for teams that want something different from
              another workshop, conference or offsite. Somewhere beautiful, for a couple of days,
              with room to think.
            </p>
            <Link
              to="/retreats"
              className="mt-6 inline-block border-b border-clay pb-1 text-clay transition-opacity hover:opacity-70"
            >
              Read more about the idea
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto mt-32 max-w-5xl px-6 md:px-10">
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <img
              src={sophieTable}
              width={1408}
              height={1008}
              loading="lazy"
              alt="Sophie in conversation with colleagues around a wooden table"
              className="w-full object-cover"
            />
          </div>
          <div className="mt-8 md:col-span-5 md:col-start-8 md:mt-6">
            <p className="eyebrow">About</p>
            <h2 className="mt-3 text-3xl text-ink">Hi, I&apos;m Sophie.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              A Data &amp; Insights leader and consultant who enjoys sitting somewhere between data,
              business and people.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-block border-b border-clay pb-1 text-clay transition-opacity hover:opacity-70"
            >
              More about me
            </Link>
          </div>
        </div>
      </section>

      <div className="mt-32">
        <Newsletter />
      </div>
    </>
  );
}

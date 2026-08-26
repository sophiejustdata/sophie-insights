import { createFileRoute, Link } from "@tanstack/react-router";
import sophieTable from "@/assets/sophie-table.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sophie — Data, business and people" },
      {
        name: "description",
        content:
          "Sophie is a Data & Insights leader and consultant working across data science, analytics, insights and leadership — and interested in the changing relationship between people, data and AI.",
      },
      { property: "og:title", content: "About Sophie — Data, business and people" },
      {
        property: "og:description",
        content:
          "A Data & Insights leader and consultant who enjoys sitting somewhere between data, business and people.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <article className="mx-auto max-w-5xl px-6 pt-10 md:px-10 md:pt-20">
      <p className="eyebrow">About</p>
      <h1 className="mt-4 text-4xl leading-tight text-ink md:text-5xl">Hi, I&apos;m Sophie.</h1>

      <div className="mt-12 md:grid md:grid-cols-12 md:gap-12">
        <div className="md:col-span-6">
          <p className="text-lg leading-relaxed text-ink">
            I&apos;m a Data &amp; Insights leader and consultant who enjoys sitting somewhere
            between data, business and people.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            I&apos;ve worked across data science, analytics, insights and leadership, including
            leading Data &amp; Insights teams and working closely with business and product
            stakeholders.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            What interests me most is the part that happens beyond the data itself:
          </p>
          <ul className="mt-6 space-y-3 border-l border-sage/50 pl-6 font-display text-xl leading-snug text-ink">
            <li>What are we actually trying to understand?</li>
            <li>What decisions are we trying to make?</li>
            <li>What should we measure?</li>
            <li>And how do we build ways of working that make all of this sustainable?</li>
          </ul>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            I&apos;m particularly interested in the changing relationship between people, data and
            AI — and in finding ways of working that are both effective and genuinely human.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            I don&apos;t believe every problem needs more dashboards, more meetings or more
            complexity.
          </p>
          <p className="mt-8 font-display text-2xl italic text-primary">
            Sometimes it needs a better question.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block border-b border-clay pb-1 text-clay transition-opacity hover:opacity-70"
          >
            Get in touch
          </Link>
        </div>

        <div className="mt-12 md:col-span-5 md:col-start-8 md:mt-2">
          <img
            src={sophieTable}
            width={1408}
            height={1008}
            loading="lazy"
            alt="Wooden table with notebooks, pencils and mugs"
            className="w-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}

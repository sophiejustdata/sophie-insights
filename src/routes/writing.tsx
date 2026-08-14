import { createFileRoute } from "@tanstack/react-router";
import { Newsletter } from "@/components/newsletter";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing & ideas — Sophie Albrecht" },
      {
        name: "description",
        content:
          "A lightweight space for writing and ideas about data and insights, AI and knowledge work, leadership, teams and sustainable ways of working.",
      },
      { property: "og:title", content: "Writing & ideas — Sophie Albrecht" },
      {
        property: "og:description",
        content:
          "Things I'm thinking about: data, AI and knowledge work, leadership, how teams work, and what organisations measure.",
      },
    ],
  }),
  component: Writing,
});

const topics = [
  "Data & Insights",
  "AI and knowledge work",
  "Leadership",
  "How teams work",
  "Sustainable ways of working",
  "The things organisations measure — and why",
];

function Writing() {
  return (
    <>
      <article className="mx-auto max-w-5xl px-6 pt-10 md:px-10 md:pt-20">
        <p className="eyebrow">Writing / Ideas</p>
        <h1 className="mt-4 text-4xl leading-tight text-ink md:text-5xl">
          Things I&apos;m thinking about
        </h1>

        <div className="mt-12 md:grid md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <p className="text-lg leading-relaxed text-ink">
              A lightweight space for writing and ideas.
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Nothing published here yet. When there is, it will appear in this space rather than
              being written to fill it.
            </p>
          </div>
          <ul className="mt-10 md:col-span-6 md:col-start-7 md:mt-1">
            {topics.map((t) => (
              <li
                key={t}
                className="border-b border-border py-4 font-display text-xl text-ink first:border-t"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <div className="mt-28">
        <Newsletter />
      </div>
    </>
  );
}

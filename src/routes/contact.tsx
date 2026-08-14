import { createFileRoute } from "@tanstack/react-router";
import sophieWindow from "@/assets/sophie-window.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Sophie — Want to talk?" },
      {
        name: "description",
        content:
          "Thinking about a data, insights, team or organisational challenge — or curious about the Data Retreat idea? Get in touch with Sophie.",
      },
      { property: "og:title", content: "Contact Sophie — Want to talk?" },
      {
        property: "og:description",
        content:
          "Get in touch about a data, insights, team or organisational challenge, or about Data Retreats.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <article className="mx-auto max-w-5xl px-6 pt-10 md:px-10 md:pt-20">
      <div className="md:grid md:grid-cols-12 md:gap-12">
        <div className="md:col-span-6">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-4xl leading-tight text-ink md:text-5xl">Want to talk?</h1>
          <p className="mt-8 text-lg leading-relaxed text-ink">
            If you&apos;re thinking about a data, insights, team or organisational challenge — or
            you&apos;re curious about the Data Retreat idea — I&apos;d be happy to hear from you.
          </p>
          <a
            href="mailto:hello@sophiealbrecht.com"
            className="mt-10 inline-block border-b border-clay pb-1 font-display text-2xl text-clay transition-opacity hover:opacity-70"
          >
            Email Sophie
          </a>
          <p className="mt-4 text-sm text-muted-foreground">hello@sophiealbrecht.com</p>
        </div>

        <div className="mt-12 md:col-span-5 md:col-start-8 md:mt-2">
          <img
            src={sophieWindow}
            width={1200}
            height={1504}
            loading="lazy"
            alt="Sophie by a window, notebook in hand"
            className="w-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}

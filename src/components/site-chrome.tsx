import { Link } from "@tanstack/react-router";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/retreats", label: "Data Retreats" },
  { to: "/writing", label: "Writing" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-baseline justify-between px-6 py-5 md:px-10">
        <Link
          to="/"
          className="font-display text-lg tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Sophie Albrecht
        </Link>

        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="transition-colors hover:text-clay"
              activeProps={{ className: "text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-sm text-muted-foreground md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-border px-6 pb-6 pt-4 md:hidden">
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-12 text-sm text-muted-foreground md:flex-row md:items-end md:justify-between md:px-10">
        <p className="measure font-display text-xl leading-snug text-ink">
          Sometimes it needs a better question.
        </p>
        <div className="flex flex-col gap-1 md:items-end">
          <a href="mailto:hello@sophiealbrecht.com" className="transition-colors hover:text-clay">
            hello@sophiealbrecht.com
          </a>
          <span>Data &amp; Insights consulting, advisory and facilitation</span>
        </div>
      </div>
    </footer>
  );
}

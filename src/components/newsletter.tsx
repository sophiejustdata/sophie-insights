import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email) return;
    setDone(true);
  }

  return (
    <section className="mx-auto max-w-5xl px-6 md:px-10">
      <div className="border-t border-border pt-12 md:grid md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <h2 className="text-2xl leading-snug text-ink md:text-3xl">
            A few thoughts, occasionally.
          </h2>
        </div>
        <div className="mt-6 md:col-span-6 md:col-start-7 md:mt-2">
          <p className="measure text-muted-foreground">
            Occasional thoughts on data, AI, work and better ways of working.
          </p>
          {done ? (
            <p className="mt-6 text-sm text-primary">
              Thank you — I&apos;ll be in touch when there&apos;s something worth sending.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex max-w-md items-end gap-4">
              <label className="flex-1">
                <span className="sr-only">Your email</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full border-b border-input bg-transparent pb-2 text-ink outline-none placeholder:text-muted-foreground/70 focus:border-sage"
                />
              </label>
              <button
                type="submit"
                className="pb-2 text-sm text-clay transition-opacity hover:opacity-70"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Clear Skies Counselling" },
      { name: "description", content: "Get in touch with Jen Phillips at Clear Skies Counselling in Southampton. Email, phone or send a message." },
      { property: "og:title", content: "Contact Clear Skies Counselling" },
      { property: "og:description", content: "Reach out for a free, no-pressure enquiry about counselling sessions." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Enquiry from ${name || "website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:Jenphillips85@outlook.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section className="container-prose grid gap-12 py-20 md:grid-cols-2 md:py-28">
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Contact</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Let's talk.</h1>
        <p className="mt-5 text-lg text-foreground/80 max-w-md">
          You're welcome to email me directly, or send a short message below.
          I aim to reply within two working days.
        </p>

        <dl className="mt-10 space-y-6 text-sm">
          <div>
            <dt className="uppercase tracking-[0.2em] text-xs text-muted-foreground">Email</dt>
            <dd className="mt-1"><a href="mailto:Jenphillips85@outlook.com" className="text-base hover:text-primary">Jenphillips85@outlook.com</a></dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.2em] text-xs text-muted-foreground">In-person</dt>
            <dd className="mt-1 text-base leading-relaxed">Rownhams House, Rownhams,<br />Southampton SO16 8LF</dd>
          </div>
          <div>
            <dt className="uppercase tracking-[0.2em] text-xs text-muted-foreground">Hours</dt>
            <dd className="mt-1 text-base">Thursdays &amp; Fridays, 10:00–14:00 (term time)</dd>
          </div>
        </dl>
      </div>

      <form onSubmit={onSubmit} className="soft-card p-8 md:p-10 space-y-5">
        <div>
          <label htmlFor="name" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Your name</label>
          <input id="name" name="name" required className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30" />
        </div>
        <div>
          <label htmlFor="email" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</label>
          <input id="email" type="email" name="email" required className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30" />
        </div>
        <div>
          <label htmlFor="message" className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Message</label>
          <textarea id="message" name="message" rows={5} required className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30" />
        </div>
        <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          {sent ? "Opening your email…" : "Send message"}
        </button>
        <p className="text-xs text-muted-foreground">Your message opens in your email app — no data is stored on this site.</p>
      </form>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import couples from "@/assets/couples.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Clear Skies Counselling" },
      { name: "description", content: "1:1 face-to-face, online, telephone, home visits and couples counselling in Southampton with Jen Phillips, MBACP." },
      { property: "og:title", content: "Services — Clear Skies Counselling" },
      { property: "og:description", content: "Flexible counselling options to suit your life: in-person in Southampton, online, by phone, or at home." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "1:1 face-to-face counselling",
    desc: "A quiet, private room to think out loud. Sessions are held in Rownhams House, Rownhams, Southampton SO16 8LF.",
    meta: "Thursdays & Fridays, 10:00–14:00 (term time)",
  },
  {
    title: "Online counselling",
    desc: "Therapy from wherever feels safest. Sessions via Zoom, Skype or WhatsApp — flexible and easy to fit around life.",
    meta: "Booking by email, phone or text",
  },
  {
    title: "Telephone counselling",
    desc: "For when a voice on the other end of the line feels easier than a screen or a journey. Comfortable, familiar, simple.",
    meta: "Same care, none of the commute",
  },
  {
    title: "Home visits",
    desc: "Therapy in the comfort of your own home for those who'd prefer it or for whom travel is difficult. Within 30 minutes of SO16.",
    meta: "Additional fee for travel time",
  },
];

function ServicesPage() {
  return (
    <>
      <section className="container-prose pt-16 pb-10 md:pt-24">
        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Services</p>
        <h1 className="mt-3 font-display text-5xl md:text-6xl max-w-3xl">Ways we can work together.</h1>
        <p className="mt-5 max-w-2xl text-lg text-foreground/80">
          Therapy should fit your life — not the other way around. Choose what works for you,
          or get in touch and we can talk it through.
        </p>
      </section>

      <section className="container-prose grid gap-5 pb-16 md:grid-cols-2">
        {services.map((s, i) => (
          <article key={s.title} className="soft-card flex flex-col p-8">
            <span className="font-display text-sm text-muted-foreground">0{i + 1}</span>
            <h2 className="mt-2 font-display text-2xl md:text-3xl">{s.title}</h2>
            <p className="mt-3 text-foreground/80 leading-relaxed">{s.desc}</p>
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-sm">
              <span className="text-muted-foreground">{s.meta}</span>
              <Link to="/contact" className="font-medium text-primary hover:underline">Enquire →</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-muted/50 py-20 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-2 md:items-center">
          <img src={couples} alt="Two hands gently meeting on a wooden table" className="w-full rounded-3xl aspect-[4/3] object-cover" loading="lazy" width={1280} height={960} />
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Couples Counselling</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">A shared space to be heard.</h2>
            <p className="mt-5 text-foreground/85 leading-relaxed">
              As a fully trained couples counsellor, I offer in-person or online sessions to help partners
              work through difficult times — together, at a pace that feels right for both of you.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              Life is busy. Online couples therapy can be the most realistic way to find time
              to focus on what matters most.
            </p>
            <Link to="/contact" className="mt-7 inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Arrange a session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

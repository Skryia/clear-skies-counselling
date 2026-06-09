import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroSky from "@/assets/hero-sky.jpg";
import aboutRoom from "@/assets/about-room.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clear Skies Counselling — Compassionate therapy in Southampton" },
      { name: "description", content: "Person-centred counselling and psychotherapy with Jen Phillips, BACP-registered. Online, telephone and in-person sessions." },
      { property: "og:title", content: "Clear Skies Counselling" },
      { property: "og:description", content: "A calm, non-judgemental space for therapy in Southampton, online and by phone." },
      { rel: "canonical", href: "/" } as never,
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroSky} alt="" className="h-full w-full object-cover" width={1920} height={1280} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </div>
        <div className="container-prose pt-20 pb-28 md:pt-28 md:pb-40">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              BACP Registered Psychotherapist
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
              A calmer sky,<br />
              <span className="italic text-primary">one conversation at a time.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              Person-centred counselling and psychotherapy with Jen Phillips.
              Safe, non-judgemental support in Southampton — in person, online, by phone, or at home.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90">
                Book a free enquiry
              </Link>
              <Link to="/services" className="inline-flex items-center rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-medium text-foreground transition hover:bg-card">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="container-prose grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Welcome</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Your wellbeing, the priority.</h2>
        </div>
        <div className="md:col-span-7 space-y-5 text-foreground/85 leading-relaxed">
          <p>
            At Clear Skies Counselling, you are met with dignity, warmth and zero judgement. I work in a
            person-centred way, which simply means that you lead — you're the expert of your own life.
          </p>
          <p>
            My role is to hold a calm, attentive space while you explore what's happening internally, find perspective,
            and take the next step in your own time. Long after our work together has ended, the path forward stays yours.
          </p>
        </div>
      </section>

      {/* Specialisms */}
      <section className="bg-muted/50 py-20 md:py-28">
        <div className="container-prose">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">What I work with</p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Areas of focus</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Whatever you bring to the room, you will be met with care. Below are some of the areas I most often support clients with.
            </p>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Anxiety", "Depression", "Loss & bereavement", "Trauma & PTSD",
              "Postnatal depression", "Infertility", "Relationship breakdowns",
              "Couples counselling", "Self-harm", "Addiction", "Loneliness",
              "Narcissistic abuse", "Children & young people", "Student issues",
            ].map((s) => (
              <li key={s} className="soft-card flex items-center gap-3 px-5 py-4">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About preview */}
      <section className="container-prose grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div className="relative">
          <img src={aboutRoom} alt="A calm, sunlit therapy room with a soft armchair and plant" className="w-full rounded-3xl object-cover aspect-[4/5]" loading="lazy" width={1024} height={1280} />
          <div className="absolute -bottom-6 -right-4 hidden md:block soft-card px-5 py-4 text-sm">
            <p className="font-display text-base">Jen Phillips</p>
            <p className="text-muted-foreground">BA (Hons), MBACP, MBICA</p>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">About</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Therapy that meets you where you are.</h2>
          <p className="mt-5 text-foreground/85 leading-relaxed">
            I'm Jen — a qualified psychotherapist and counsellor with experience supporting
            children, young people and adults. I'm a member of the British Association for
            Counselling and Psychotherapy (BACP) and the British Infertility Counselling
            Association (BICA), and hold full indemnity insurance.
          </p>
          <blockquote className="mt-6 border-l-2 border-accent pl-5 font-display text-xl italic text-foreground/90">
            "The client is the expert of themselves."<span className="block not-italic text-sm text-muted-foreground mt-1">— Carl Rogers</span>
          </blockquote>
          <Link to="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
            More about my practice <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-prose pb-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-20">
          <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="font-display text-4xl md:text-5xl max-w-xl">Ready when you are.</h2>
              <p className="mt-4 max-w-lg text-primary-foreground/80">
                Reach out for a free, no-pressure conversation. We'll talk about what you're looking for and whether we'd be a good fit.
              </p>
            </div>
            <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-background/90">
              Get in touch
            </Link>
          </div>
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
        </div>
      </section>
    </>
  );
}

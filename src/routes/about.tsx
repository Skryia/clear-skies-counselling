import { createFileRoute, Link } from "@tanstack/react-router";
import room from "@/assets/about-room.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Jen — Clear Skies Counselling" },
      { name: "description", content: "Meet Jen Phillips, BA (Hons), MBACP, MBICA — a person-centred psychotherapist based in Southampton." },
      { property: "og:title", content: "About Jen Phillips — Clear Skies Counselling" },
      { property: "og:description", content: "A qualified, BACP-registered psychotherapist offering safe, non-judgemental counselling in Southampton and online." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-prose pt-16 pb-10 md:pt-24 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">About</p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl">Hello, I'm Jen.</h1>
          <p className="mt-5 text-lg text-foreground/80 max-w-xl">
            I'm a qualified psychotherapist and counsellor at Clear Skies Counselling.
            My work centres on creating a safe, non-judgemental space where you can really
            explore what's going on for you — in a way that's often hard to do anywhere else.
          </p>
        </div>
        <div className="md:col-span-5">
          <img src={room} alt="A calm, sunlit therapy space" className="w-full rounded-3xl object-cover aspect-square" loading="lazy" width={1024} height={1024} />
        </div>
      </section>

      <section className="container-prose grid gap-12 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-3xl md:text-4xl">Qualifications &amp; ethics</h2>
        </div>
        <div className="md:col-span-7 space-y-4 text-foreground/85 leading-relaxed">
          <p>I hold a BA (Hons) in counselling and psychotherapy with experience supporting children, young people and adults.</p>
          <p>
            I'm a registered member of the <strong>British Association for Counselling and Psychotherapy (BACP)</strong>
            {" "}and the <strong>British Infertility Counselling Association (BICA)</strong>, and I practise within their
            ethical frameworks. I hold full professional indemnity insurance.
          </p>
        </div>
      </section>

      <section className="container-prose grid gap-12 py-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <h2 className="font-display text-3xl md:text-4xl">How I work</h2>
        </div>
        <div className="md:col-span-7 space-y-4 text-foreground/85 leading-relaxed">
          <p>I work in a person-centred way. That means you lead — you set the pace, the direction and the depth. My role is to listen carefully, hold the space, and offer therapeutic and psychological support along the way.</p>
          <p>The world is busy and fast-moving. It's easy to lose your train of thought, internalise difficult feelings, and forget your own worth. Therapy is simply a tool — one you can use to find your way back to yourself.</p>
        </div>
      </section>

      <section className="container-prose py-16">
        <div className="soft-card grid gap-8 p-10 md:grid-cols-3 md:items-center">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl">Curious if we'd be a good fit?</h2>
            <p className="mt-2 text-muted-foreground">A short conversation is the easiest place to start.</p>
          </div>
          <Link to="/contact" className="justify-self-start md:justify-self-end inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}

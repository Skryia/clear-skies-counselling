import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-muted/40">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl">Clear Skies Counselling</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            A calm, non-judgemental space for therapy. Putting your wellbeing first.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Visit</h4>
          <p className="mt-3 text-sm leading-relaxed">
            Rownhams House<br />Rownhams, Southampton<br />SO16 8LF
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">Contact</h4>
          <p className="mt-3 text-sm leading-relaxed">
            <a className="hover:text-primary" href="mailto:Jenphillips85@outlook.com">Jenphillips85@outlook.com</a>
          </p>
          <div className="mt-4 flex gap-2">
            <Link to="/contact" className="inline-flex rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90">Get in touch</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-prose flex flex-col md:flex-row gap-2 md:items-center md:justify-between py-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Clear Skies Counselling. All rights reserved.</p>
          <p>Registered member of the BACP &amp; BICA</p>
        </div>
      </div>
    </footer>
  );
}

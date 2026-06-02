import SiteNav from "@/components/SiteNav";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import logo from "@/assets/qfusion-logo.png";
import { getIndustry, industries } from "@/data/industries";
import NotFound from "./NotFound";
import { useEffect } from "react";

const Industry = () => {
  const { slug = "" } = useParams();
  const industry = getIndustry(slug);

  useEffect(() => {
    if (industry) {
      document.title = `${industry.name} – QFusion Customer Flow Platform`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", `${industry.name}: ${industry.tagline} — QFusion improves customer flow with queue management, appointments, check-ins and feedback.`);
    }
  }, [industry]);

  if (!industry) return <NotFound />;
  const Icon = industry.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 glass border-b border-border/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="QFusion – Customer Flow Platform" className="h-8 w-auto" />
          </Link>
          <SiteNav />
          <Button size="sm" variant="brand" asChild>
            <a href="/#demo">Book demo <ArrowRight className="ml-1 h-4 w-4" /></a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container relative pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">/</span>
            <span>Visitor Journey</span>
            <span className="mx-2">/</span>
            <span className="text-foreground">{industry.name}</span>
          </div>
          <div className={`mt-8 grid gap-12 items-center ${industry.image ? "lg:grid-cols-2" : ""}`}>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-3 rounded-full border border-border/80 bg-card/70 backdrop-blur px-4 py-2 text-sm font-medium">
                <span className="h-8 w-8 rounded-lg gradient-brand grid place-items-center">
                  <Icon className="h-4 w-4 text-primary-foreground" />
                </span>
                {industry.name} · Visitor Journey
              </div>
              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05]">
                <span className="text-gradient">{industry.tagline}</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">{industry.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" variant="brand" asChild>
                  <a href="/#demo">Book a demo <ArrowRight className="ml-1 h-4 w-4" /></a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/#features">See features</Link>
                </Button>
              </div>
            </div>
            {industry.image && (
              <div className="relative">
                <div className="absolute -inset-6 gradient-brand opacity-20 blur-3xl rounded-3xl" />
                <img
                  src={industry.image}
                  alt={`QFusion in ${industry.name.toLowerCase()}`}
                  className="relative rounded-2xl shadow-elegant border border-border w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-widest uppercase text-gradient">The challenges</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">What's slowing {industry.name.toLowerCase()} down today.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {industry.challenges.map((c) => (
              <div key={c.t} className="rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="font-semibold">{c.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{c.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 md:py-24 bg-secondary/40 border-y border-border">
        <div className="container">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-widest uppercase text-gradient">How QFusion helps</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">A complete flow built for {industry.name.toLowerCase()}.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {industry.solutions.map((s) => (
              <div key={s.t} className="rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-all">
                <div className="font-semibold text-lg">{s.t}</div>
                <div className="mt-2 text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-20 md:py-24">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-gradient">The outcome</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Measurable results, from day one.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              QFusion delivers fast wins and long-term operational gains across every {industry.name.toLowerCase()} location.
            </p>
          </div>
          <ul className="space-y-4">
            {industry.outcomes.map((b) => (
              <li key={b} className="flex gap-3 items-start rounded-xl border border-border bg-card p-4 shadow-card">
                <div className="h-6 w-6 rounded-md gradient-brand grid place-items-center shrink-0">
                  <Check className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* OTHER INDUSTRIES */}
      <section className="py-20 md:py-24 bg-secondary/40 border-y border-border">
        <div className="container">
          <div className="text-xs font-semibold tracking-widest uppercase text-gradient">Visitor Journey</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Explore other industries</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.filter((i) => i.slug !== industry.slug).map(({ icon: I, ...i }) => (
              <Link key={i.slug} to={`/visitor-journey/${i.slug}`}
                className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
                <div className="h-10 w-10 rounded-lg gradient-brand grid place-items-center">
                  <I className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="mt-4 font-semibold">{i.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{i.tagline}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl gradient-brand p-10 md:p-16 text-center shadow-elegant">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto">
                See QFusion in action for {industry.name.toLowerCase()}.
              </h2>
              <p className="mt-4 text-primary-foreground/85 text-lg max-w-xl mx-auto">
                Book a 20-minute demo tailored to your {industry.name.toLowerCase()} environment.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/#demo">Book a demo <ArrowRight className="ml-1 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-border">
        <div className="container text-sm text-muted-foreground flex flex-wrap gap-4 justify-between">
          <div>© {new Date().getFullYear()} QFusion · Customer Flow Platform</div>
          <Link to="/" className="hover:text-foreground">Back to home</Link>
        </div>
      </footer>
    </div>
  );
};

export default Industry;

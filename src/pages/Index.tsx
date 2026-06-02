import { Button } from "@/components/ui/button";
import SeoHead from "@/components/SeoHead";

import logo from "@/assets/qfusion-logo.png";
import mark from "@/assets/qfusion-mark.png";
import hero from "@/assets/hero-dashboard.jpg";
import {
  ArrowRight, CalendarCheck, ClipboardList, MonitorSmartphone, Star, Ticket,
  Users, Check, Zap, BarChart3, Shield, Cloud,
  Stethoscope, HeartPulse, Banknote, Landmark, Building2,
} from "lucide-react";


const APP_SITE = "https://qfusion.app";
const CONTACT_URL = `${APP_SITE}/#contact`;
const DEMO_URL = `${APP_SITE}/#contact`;

const UkFlag = ({ className = "" }: { className?: string }) => (
  <svg aria-hidden viewBox="0 0 60 30" className={`inline-block h-3 w-[18px] rounded-[1px] border border-border/60 ${className}`}>
    <clipPath id="uk-s"><path d="M0,0 v30 h60 v-30 z" /></clipPath>
    <clipPath id="uk-t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
    <g clipPath="url(#uk-s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-t)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

const IeFlag = ({ className = "" }: { className?: string }) => (
  <span aria-hidden className={`inline-flex h-3 w-[18px] overflow-hidden rounded-[1px] border border-border/60 ${className}`}>
    <span className="flex-1 bg-[#169B62]" />
    <span className="flex-1 bg-white" />
    <span className="flex-1 bg-[#FF883E]" />
  </span>
);



const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead lang="en" />

      {/* NAV */}
      <header className="sticky top-0 z-50 glass border-b border-border/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="QFusion UK – Customer Flow Platform" className="h-8 w-auto" />
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              <UkFlag />
              United Kingdom
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#sectors" className="hover:text-foreground transition-colors">Sectors</a>
            <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
            <a href={`${APP_SITE}/visitor-services/queue-management`} target="_blank" rel="noopener" className="hover:text-foreground transition-colors">
              More on qfusion.app ↗
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="hidden lg:inline-flex">
              <a href={CONTACT_URL} target="_blank" rel="noopener">Talk to sales</a>
            </Button>
            <Button size="sm" variant="brand" asChild>
              <a href={DEMO_URL} target="_blank" rel="noopener">Book demo <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
          </div>
        </div>
      </header>


      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container relative pt-20 pb-8 md:pt-28 md:pb-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 backdrop-blur px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-2 w-2 rounded-full gradient-brand animate-pulse-dot" />
                Customer Flow Platform for the United Kingdom
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Shorter queues. <span className="text-gradient">Happier visitors.</span> Built for the UK.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                QFusion is the all-in-one <strong className="text-foreground">Queue Management System</strong> trusted by
                UK hospitals, NHS trusts, banks, local councils and public services — cutting wait times and bringing
                every visitor journey under one cloud platform, supported locally from London.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-3 max-w-xl">
                <Stat value="-40%" label="Wait times" />
                <Stat value="+90%" label="Satisfaction" />
                <Stat value="100%" label="Visibility" />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" variant="brand" asChild>
                  <a href={DEMO_URL} target="_blank" rel="noopener">Book a demo <ArrowRight className="ml-1 h-4 w-4" /></a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#features">See features</a>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Cloud className="h-4 w-4" /> Cloud-based</div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> UK GDPR compliant</div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4" /> Real-time</div>
                <div className="flex items-center gap-2">
                  <UkFlag />
                  UK support team
                </div>
              </div>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="absolute -inset-6 gradient-brand opacity-20 blur-3xl rounded-[3rem]" />
              <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-border/60">
                <img src={hero} alt="QFusion dashboard, kiosk and display screen ecosystem" className="w-full h-auto" />
              </div>
              <FloatingCard className="absolute -left-4 top-10 hidden sm:flex animate-float" style={{ animationDelay: "0.4s" }}>
                <div className="h-9 w-9 rounded-lg gradient-brand grid place-items-center text-primary-foreground font-bold">A</div>
                <div>
                  <div className="text-xs text-muted-foreground">Now serving</div>
                  <div className="font-semibold">Ticket A-127</div>
                </div>
              </FloatingCard>
              <FloatingCard className="absolute -right-4 bottom-10 hidden sm:flex animate-float" style={{ animationDelay: "1.2s" }}>
                <BarChart3 className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Avg. wait</div>
                  <div className="font-semibold">3m 42s ↓ 38%</div>
                </div>
              </FloatingCard>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="pt-8 pb-20 md:pt-10 md:pb-28">
        <div className="container">
          <div className="max-w-2xl">
            <Eyebrow>Features</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Everything you need, in one UK-supported platform.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              One cloud system for tickets, appointments, kiosks, displays and feedback — purpose-built for UK
              hospitals, councils and high-street brands.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="text-muted-foreground">Call us on</span>
              <a href="tel:+442033186379" className="font-semibold text-foreground hover:text-primary transition-colors">
                +44 203 3186379
              </a>
              <span className="text-muted-foreground">or</span>
              <Button size="sm" variant="brand" asChild>
                <a href={CONTACT_URL} target="_blank" rel="noopener">Contact us <ArrowRight className="ml-1 h-3.5 w-3.5" /></a>
              </Button>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Feature icon={Users} title="Queue Management"
              desc="Walk-in handling with ticket-based or fully virtual queues and live SMS updates." />
            <Feature icon={CalendarCheck} title="Online Appointments"
              desc="24/7 self-service booking that flows directly into your live queue." />
            <Feature icon={Ticket} title="Digital Ticketing"
              desc="Printed or digital tickets with SMS and on-screen call-forward." />
            <Feature icon={ClipboardList} title="Reception & Check-In"
              desc="Self-service kiosks for visitor check-in and instant staff notifications." />
            <Feature icon={Star} title="Customer Feedback"
              desc="Post-service surveys to improve every visit." />
            <Feature icon={MonitorSmartphone} title="Live Displays"
              desc="Branded calling screens with clear audio and on-screen call-outs." />
          </div>
          <div className="mt-8">
            <a href={`${APP_SITE}/#features`} target="_blank" rel="noopener"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
              Full feature breakdown on qfusion.app <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTORS — UK */}
      <section id="sectors" className="py-20 md:py-28 bg-secondary/40 border-y border-border">
        <div className="container">
          <div className="max-w-2xl">
            <Eyebrow>Sectors</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Designed for UK public &amp; private services.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From NHS trusts to local council offices, QFusion brings order to every visitor journey across the
              United Kingdom.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Stethoscope, name: "Hospitals & NHS", tagline: "Calmer waiting rooms, faster patient flow.", href: `${APP_SITE}/visitor-journey/healthcare` },
              { icon: HeartPulse, name: "Healthcare", tagline: "GP surgeries, outpatient & primary care.", href: `${APP_SITE}/visitor-journey/healthcare` },
              { icon: Banknote, name: "Banks", tagline: "Premium service in every branch.", href: `${APP_SITE}/visitor-journey/finance` },
              { icon: Landmark, name: "Local Councils", tagline: "Better citizen service, less bureaucracy.", href: `${APP_SITE}/visitor-journey/public-sector` },
              { icon: Building2, name: "Public Services", tagline: "DVLA, DWP, HMRC & central government.", href: `${APP_SITE}/visitor-journey/public-sector` },
            ].map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener"
                className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
                <div className="h-10 w-10 rounded-lg gradient-brand grid place-items-center">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="mt-4 font-semibold">{s.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.tagline}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">From arrival to feedback — automated.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Customer arrives or books", d: "Online appointment, kiosk check-in or walk-in ticket." },
              { n: "02", t: "QFusion manages the journey", d: "Routes them to the right service, in the right order." },
              { n: "03", t: "Staff serve efficiently", d: "Live dashboard, displays and SMS keep everyone aligned." },
              { n: "04", t: "Feedback captured", d: "Post-visit ratings feed into your reporting." },
            ].map((s) => (
              <div key={s.n} className="relative rounded-xl border border-border bg-card p-6 shadow-card">
                <div className="text-sm font-mono text-gradient font-bold">{s.n}</div>
                <div className="mt-3 font-semibold">{s.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 md:py-28 bg-secondary/40 border-y border-border">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div>
            <Eyebrow>Benefits</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Faster service. Happier visitors. Smarter operations.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Designed and supported in the UK, with UK GDPR-ready hosting and dedicated London-based account
              management.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Reduce wait times across every location in the UK",
              "Clear, accessible interface and audio call-outs",
              "UK GDPR-compliant, hosted on UK/EU infrastructure",
              "Real-time data for managers and head office",
              "Local UK support team — phone, email & on-site",
            ].map((b) => (
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

      {/* CTA */}
      <section id="demo" className="py-20 md:py-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl gradient-brand p-10 md:p-16 text-center shadow-elegant">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                <UkFlag /> Built for the UK
              </div>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto">
                See QFusion in action.
              </h2>
              <p className="mt-4 text-primary-foreground/85 text-lg max-w-xl mx-auto">
                Book a 20-minute demo with our UK team and see how QFusion transforms your customer flow.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href={DEMO_URL} target="_blank" rel="noopener">Book demo <ArrowRight className="ml-1 h-4 w-4" /></a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                  <a href={CONTACT_URL} target="_blank" rel="noopener">Talk to sales</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-border bg-secondary/30">
        <div className="container py-14 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={logo} alt="QFusion" className="h-9 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              QFusion UK — the Customer Flow Platform for UK hospitals, NHS trusts, banks, councils and public
              services. A product by Interactive Displays UK.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Platform</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#sectors" className="hover:text-foreground">Sectors</a></li>
              <li><a href="#how" className="hover:text-foreground">How it works</a></li>
              <li><a href={APP_SITE} target="_blank" rel="noopener" className="hover:text-foreground">Global site ↗</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Contact us</div>
            <div className="space-y-5 text-sm text-muted-foreground">
              <div>
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <UkFlag /> United Kingdom
                </div>
                <ul className="mt-2 space-y-1">
                  <li><a className="hover:text-foreground" href="mailto:sales@interactivedisplaysuk.com">sales@interactivedisplaysuk.com</a></li>
                  <li><a className="hover:text-foreground" href="tel:+442033186379">+44 203 3186379</a></li>
                  <li>167-169 Great Portland Street</li>
                  <li>Fifth Floor, London, W1W 5PF</li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <IeFlag /> Ireland
                </div>
                <ul className="mt-2 space-y-1">
                  <li><a className="hover:text-foreground" href="mailto:sales@interactivedisplays.ie">sales@interactivedisplays.ie</a></li>
                  <li><a className="hover:text-foreground" href="tel:+353449672855">+353 44 967 2855</a></li>
                  <li>Dromone, Oldcastle</li>
                  <li>Co Meath, A82E0W4</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <img src={mark} alt="" className="h-5 w-5" />
              © {new Date().getFullYear()} QFusion UK. All rights reserved.
            </div>
            <div className="flex items-center gap-2"><UkFlag /> Built for the United Kingdom</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-lg border border-border bg-card/60 backdrop-blur px-3 py-2">
    <div className="text-xl font-bold text-gradient">{value}</div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </div>
);

const Eyebrow = ({ children, center }: { children: React.ReactNode; center?: boolean }) => (
  <div className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground ${center ? "mx-auto" : ""}`}>
    <span className="h-1.5 w-1.5 rounded-full gradient-brand" />
    {children}
  </div>
);

const Feature = ({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) => (
  <div className="group relative rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
    <div className="h-11 w-11 rounded-xl gradient-brand grid place-items-center shadow-glow">
      <Icon className="h-5 w-5 text-primary-foreground" />
    </div>
    <h3 className="mt-5 text-lg font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

const FloatingCard = ({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => (
  <div style={style} className={`glass border border-border/60 rounded-2xl shadow-elegant p-3 pr-5 flex items-center gap-3 ${className ?? ""}`}>
    {children}
  </div>
);

export default Index;

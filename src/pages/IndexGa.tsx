import { Button } from "@/components/ui/button";
import LangSwitch from "@/components/LangSwitch";
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

const IndexGa = () => {
  return (
    <div lang="ga" className="min-h-screen bg-background text-foreground">
      <SeoHead lang="ga" />

      {/* NAV */}
      <header className="sticky top-0 z-50 glass border-b border-border/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="QFusion Éire – Ardán Sreabhadh Custaiméirí" className="h-8 w-auto" />
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              <span aria-hidden className="inline-flex h-3 w-[18px] overflow-hidden rounded-[1px] border border-border/60">
                <span className="flex-1 bg-[#169B62]" />
                <span className="flex-1 bg-white" />
                <span className="flex-1 bg-[#FF883E]" />
              </span>
              Éire · Ireland
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Gnéithe</a>
            <a href="#sectors" className="hover:text-foreground transition-colors">Earnálacha</a>
            <a href="#how" className="hover:text-foreground transition-colors">Conas a oibríonn sé</a>
            <a href={`${APP_SITE}/visitor-services/queue-management`} target="_blank" rel="noopener" className="hover:text-foreground transition-colors">
              Tuilleadh ar qfusion.app ↗
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <LangSwitch current="ga" />
            <Button variant="ghost" size="sm" asChild className="hidden lg:inline-flex">
              <a href={CONTACT_URL} target="_blank" rel="noopener">Labhair le díolacháin</a>
            </Button>
            <Button size="sm" variant="brand" asChild>
              <a href={DEMO_URL} target="_blank" rel="noopener">Cuir taispeántas in áirithe <ArrowRight className="ml-1 h-4 w-4" /></a>
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
                Fáilte · Ardán Sreabhadh Custaiméirí d'Éirinn
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
                Scuainí níos giorra. <span className="text-gradient">Cuairteoirí níos sásta.</span> Tógtha d'Éirinn.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Is é QFusion an <strong className="text-foreground">Córas Bainistíochta Scuaine</strong> uile-in-aon a bhfuil
                muinín ag ospidéil, bainc, comhairlí contae agus seirbhísí poiblí na hÉireann as — ag laghdú amanna feithimh
                agus ag tabhairt gach turas cuairteora faoi aon ardán néalbhunaithe amháin, le tacaíocht áitiúil ó Éirinn.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-3 max-w-xl">
                <Stat value="-40%" label="Amanna feithimh" />
                <Stat value="+90%" label="Sástacht" />
                <Stat value="100%" label="Infheictheacht" />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" variant="brand" asChild>
                  <a href={DEMO_URL} target="_blank" rel="noopener">Cuir taispeántas in áirithe <ArrowRight className="ml-1 h-4 w-4" /></a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#features">Féach na gnéithe</a>
                </Button>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Cloud className="h-4 w-4" /> Néalbhunaithe</div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> Comhlíontach le GDPR</div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4" /> Fíor-am</div>
                <div className="flex items-center gap-2">
                  <span aria-hidden className="inline-flex h-3 w-[18px] overflow-hidden rounded-[1px] border border-border/60">
                    <span className="flex-1 bg-[#169B62]" />
                    <span className="flex-1 bg-white" />
                    <span className="flex-1 bg-[#FF883E]" />
                  </span>
                  Foireann tacaíochta Éireannach
                </div>
              </div>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: "150ms" }}>
              <div className="absolute -inset-6 gradient-brand opacity-20 blur-3xl rounded-[3rem]" />
              <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-border/60">
                <img src={hero} alt="Deais, cóisc agus scáileán taispeána QFusion" className="w-full h-auto" />
              </div>
              <FloatingCard className="absolute -left-4 top-10 hidden sm:flex animate-float" style={{ animationDelay: "0.4s" }}>
                <div className="h-9 w-9 rounded-lg gradient-brand grid place-items-center text-primary-foreground font-bold">A</div>
                <div>
                  <div className="text-xs text-muted-foreground">Anois ag freastal</div>
                  <div className="font-semibold">Ticéad A-127</div>
                </div>
              </FloatingCard>
              <FloatingCard className="absolute -right-4 bottom-10 hidden sm:flex animate-float" style={{ animationDelay: "1.2s" }}>
                <BarChart3 className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-xs text-muted-foreground">Meánfheitheamh</div>
                  <div className="font-semibold">3n 42s ↓ 38%</div>
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
            <Eyebrow>Gnéithe</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Gach rud atá uait, ar ardán amháin le tacaíocht Éireannach.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Aon chóras néalbhunaithe amháin do thicéid, coinní, cóisc, taispeántais agus aiseolas — le comhéadan
              ilteangach lena n-áirítear Gaeilge.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <span className="text-muted-foreground">Cuir glaoch orainn ar</span>
              <a href="tel:+353449672855" className="font-semibold text-foreground hover:text-primary transition-colors">
                +353 44 967 2855
              </a>
              <span className="text-muted-foreground">nó</span>
              <Button size="sm" variant="brand" asChild>
                <a href={CONTACT_URL} target="_blank" rel="noopener">Déan teagmháil linn <ArrowRight className="ml-1 h-3.5 w-3.5" /></a>
              </Button>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Feature icon={Users} title="Bainistíocht Scuaine"
              desc="Láimhseáil custaiméirí siúil isteach le scuainí ticéadbhunaithe nó fíorúla, agus nuashonruithe beo SMS." />
            <Feature icon={CalendarCheck} title="Coinní Ar Líne"
              desc="Áirithint féinseirbhíse 24/7 a théann díreach isteach i do scuaine bheo." />
            <Feature icon={Ticket} title="Ticéadú Digiteach"
              desc="Ticéid chlóite nó dhigiteacha le glao chun cinn trí SMS agus ar an scáileán." />
            <Feature icon={ClipboardList} title="Fáiltiú & Cláraigh Isteach"
              desc="Cóisc féinseirbhíse do chláraigh isteach cuairteoirí agus fógraí láithreacha don fhoireann." />
            <Feature icon={Star} title="Aiseolas Custaiméirí"
              desc="Suirbhéanna iar-sheirbhíse i nGaeilge agus i mBéarla chun gach cuairt a fheabhsú." />
            <Feature icon={MonitorSmartphone} title="Taispeántais Bheo"
              desc="Scáileáin ghlao brandáilte le fógraí dátheangacha." />
          </div>
          <div className="mt-8">
            <a href={`${APP_SITE}/#features`} target="_blank" rel="noopener"
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
              Miondealú iomlán ar na gnéithe ar qfusion.app <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section id="sectors" className="py-20 md:py-28 bg-secondary/40 border-y border-border">
        <div className="container">
          <div className="max-w-2xl">
            <Eyebrow>Earnálacha</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Deartha do sheirbhísí poiblí agus príobháideacha na hÉireann.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Ó ospidéil ghéarmhíochaine go hoifigí comhairle contae, cuireann QFusion ord ar gach turas cuairteora
              ar fud na hÉireann.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Stethoscope, name: "Ospidéil", tagline: "Seomraí feithimh níos socra, sreabhadh othair níos tapúla.", href: `${APP_SITE}/visitor-journey/healthcare` },
              { icon: HeartPulse, name: "Cúram Sláinte", tagline: "Clinicí GP, othair sheachtracha & cúram príomhúil.", href: `${APP_SITE}/visitor-journey/healthcare` },
              { icon: Banknote, name: "Bainc", tagline: "Seirbhís den scoth i ngach brainse.", href: `${APP_SITE}/visitor-journey/finance` },
              { icon: Landmark, name: "Comhairlí Contae", tagline: "Seirbhís níos fearr do shaoránaigh, níos lú maorlathais.", href: `${APP_SITE}/visitor-journey/public-sector` },
              { icon: Building2, name: "Seirbhísí Poiblí", tagline: "Cáin mhótair, leas sóisialach & gníomhaireachtaí stáit.", href: `${APP_SITE}/visitor-journey/public-sector` },
            ].map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener"
                className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-all hover:-translate-y-1">
                <div className="h-10 w-10 rounded-lg gradient-brand grid place-items-center">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="mt-4 font-semibold">{s.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.tagline}</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                  Tuilleadh eolais <ArrowRight className="h-3 w-3" />
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
            <Eyebrow>Conas a oibríonn sé</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Ó theacht go haiseolas — uathoibrithe.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Tagann nó cuireann an custaiméir in áirithe", d: "Coinne ar líne, cláraigh isteach ag an gcóisc nó ticéad siúil isteach." },
              { n: "02", t: "Bainistíonn QFusion an turas", d: "Cuirtear chuig an tseirbhís cheart iad, san ord ceart." },
              { n: "03", t: "Freastalaíonn an fhoireann go héifeachtach", d: "Coinníonn deais bheo, taispeántais agus SMS gach duine ar aon líne." },
              { n: "04", t: "Aiseolas á bhailiú", d: "Téann rátálacha iar-chuairte isteach i do thuairisciú." },
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
            <Eyebrow>Buntáistí</Eyebrow>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Seirbhís níos tapúla. Cuairteoirí níos sásta. Oibríochtaí níos cliste.</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Deartha agus tacaithe in Éirinn, le comhéadain dhátheangacha agus óstáil atá réidh do GDPR.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Laghdaigh amanna feithimh ag gach láthair in Éirinn",
              "Comhéadan dátheangach (Gaeilge / Béarla) agus fógraí glao",
              "Comhlíontach le GDPR, óstáilte ar bhonneagar an AE",
              "Sonraí fíor-ama do bhainisteoirí agus don phríomhoifig",
              "Foireann tacaíochta áitiúil — fón, ríomhphost & ar an láthair",
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
                Déanta in Éirinn
              </div>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto">
                Féach QFusion i mbun oibre.
              </h2>
              <p className="mt-4 text-primary-foreground/85 text-lg max-w-xl mx-auto">
                Cuir taispeántas 20-nóiméad in áirithe lenár bhfoireann in Éirinn agus féach conas a athraíonn QFusion
                sreabhadh do chustaiméirí.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href={DEMO_URL} target="_blank" rel="noopener">Cuir taispeántas in áirithe <ArrowRight className="ml-1 h-4 w-4" /></a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                  <a href={CONTACT_URL} target="_blank" rel="noopener">Labhair le díolacháin</a>
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
              QFusion Éire — an tArdán Sreabhadh Custaiméirí d'ospidéil, bainc, comhairlí agus seirbhísí poiblí na
              hÉireann. Táirge ó Interactive Displays Ireland.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Ardán</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Gnéithe</a></li>
              <li><a href="#sectors" className="hover:text-foreground">Earnálacha</a></li>
              <li><a href="#how" className="hover:text-foreground">Conas a oibríonn sé</a></li>
              <li><a href={APP_SITE} target="_blank" rel="noopener" className="hover:text-foreground">Suíomh domhanda ↗</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3">Teagmháil</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Interactive Displays Ireland</li>
              <li><a className="hover:text-foreground" href={CONTACT_URL} target="_blank" rel="noopener">Foirm theagmhála ↗</a></li>
              <li><a className="hover:text-foreground" href="mailto:hello@qfusion.ie">hello@qfusion.ie</a></li>
              <li><a className="hover:text-foreground" href="tel:+353449672855">+353 44 967 2855</a></li>

            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <img src={mark} alt="" className="h-5 w-5" />
              © {new Date().getFullYear()} QFusion Éire. Gach ceart ar cosaint.
            </div>
            <div>Déanta in Éirinn</div>
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

export default IndexGa;

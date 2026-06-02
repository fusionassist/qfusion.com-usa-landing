import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

type NavLinkProps = { href: string; children: React.ReactNode };

const NavAnchor = ({ href, children }: NavLinkProps) => {
  // Use plain <a> for in-page hash links so they jump on the home page.
  return (
    <Link to={href} className="hover:text-foreground transition-colors">
      {children}
    </Link>
  );
};

const SiteNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
      <NavAnchor href="/#features">Features</NavAnchor>
      <NavAnchor href="/#how">How it works</NavAnchor>

      <div className="relative group">
        <button className="flex items-center gap-1 hover:text-foreground transition-colors">
          Visitor Journey <ChevronDown className="h-3.5 w-3.5" />
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
          <div className="w-64 rounded-xl border border-border bg-card shadow-elegant p-2">
            {industries.map(({ icon: I, ...i }) => (
              <Link
                key={i.slug}
                to={`/visitor-journey/${i.slug}`}
                className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-secondary transition-colors"
              >
                <div className="h-8 w-8 rounded-md gradient-brand grid place-items-center shrink-0">
                  <I className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{i.name}</div>
                  <div className="text-xs text-muted-foreground">{i.tagline}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="relative group">
        <button className="flex items-center gap-1 hover:text-foreground transition-colors">
          Visitor Services <ChevronDown className="h-3.5 w-3.5" />
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
          <div className="w-64 rounded-xl border border-border bg-card shadow-elegant p-2">
            {services.map(({ icon: I, ...s }) => (
              <Link
                key={s.slug}
                to={`/visitor-services/${s.slug}`}
                className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-secondary transition-colors"
              >
                <div className="h-8 w-8 rounded-md gradient-brand grid place-items-center shrink-0">
                  <I className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.tagline}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Truck } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services & Pricing", href: "/pricing" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group" data-testid="link-home-logo">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
                WI Estate Cleanout
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`nav-${link.href.replace(/\//g, "").replace(/\s/g, "-") || "home"}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:2626990100"
              data-testid="link-phone-header"
              className="hidden sm:flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              262-699-0100
            </a>
            <button
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              data-testid="button-menu-toggle"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-border py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${link.href.replace(/\//g, "") || "home"}`}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-primary bg-accent"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:2626990100"
              data-testid="link-phone-mobile"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-primary"
            >
              <Phone className="w-4 h-4" />
              262-699-0100
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <Truck className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-base">WI Estate Cleanout</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Locally owned and operated in West Bend, WI. Licensed for solid waste removal. Insured. We donate and recycle as much as possible — your cleanout should do right by the community.
            </p>
            <a
              href="tel:2626990100"
              data-testid="link-phone-footer"
              className="inline-flex items-center gap-1.5 mt-4 text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              262-699-0100
            </a>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-testid={`footer-nav-${link.href.replace(/\//g, "") || "home"}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Service Areas</h3>
            <ul className="space-y-2">
              {[
                { name: "Washington County", slug: "washington-county" },
                { name: "Ozaukee County", slug: "ozaukee-county" },
                { name: "Fond du Lac County", slug: "fond-du-lac-county" },
                { name: "Sheboygan County", slug: "sheboygan-county" },
                { name: "Waukesha County", slug: "waukesha-county" },
              ].map((county) => (
                <li key={county.slug}>
                  <Link
                    href={`/service-areas/${county.slug}`}
                    data-testid={`footer-county-${county.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {county.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} WI Estate Cleanout. All rights reserved. Based in West Bend, WI.
          </p>
          <p className="text-xs text-white/50">Licensed for solid waste removal &bull; Insured</p>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

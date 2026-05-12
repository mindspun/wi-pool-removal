import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Sofa, Calendar } from "lucide-react";

const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4351309/new";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
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
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
              <Sofa className="w-5 h-5 text-white" />
            </div>
            <span className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
              WI Furniture Disposal
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
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
              className="hidden sm:flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-2 rounded text-sm font-bold hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              262-699-0100
            </a>
            <a
              href={JOBBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 bg-green-600 text-white px-3 py-2 rounded text-sm font-bold hover:bg-green-700 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Schedule Pickup
            </a>
            <button
              className="md:hidden p-2 rounded text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
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
                className={`block px-3 py-2 rounded text-sm font-medium transition-colors ${
                  location === link.href ? "text-primary bg-accent" : "text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:2626990100" className="flex items-center gap-1.5 px-3 py-2 text-sm font-bold text-primary">
              <Phone className="w-4 h-4" />262-699-0100
            </a>
            <a
              href={JOBBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 mx-3 mt-2 px-3 py-2.5 bg-green-600 text-white rounded text-sm font-bold hover:bg-green-700 transition-colors justify-center"
            >
              <Calendar className="w-4 h-4" />
              Schedule Pickup
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <Sofa className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">WI Furniture Disposal</span>
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              Locally owned in West Bend, WI. Licensed for solid waste removal. Fully insured. Household and commercial furniture pickup done right.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-4">
              <a href="tel:2626990100" className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:text-primary/80 transition-colors">
                <Phone className="w-4 h-4" />262-699-0100
              </a>
              <a
                href={JOBBER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-green-600 text-white px-3 py-2 rounded text-sm font-bold hover:bg-green-700 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                Schedule Pickup
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white/50 mb-4 text-xs uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white/50 mb-4 text-xs uppercase tracking-widest">Service Counties</h3>
            <ul className="space-y-2">
              {[
                { name: "Washington County", slug: "washington-county" },
                { name: "Ozaukee County", slug: "ozaukee-county" },
                { name: "Fond du Lac County", slug: "fond-du-lac-county" },
                { name: "Sheboygan County", slug: "sheboygan-county" },
                { name: "Waukesha County", slug: "waukesha-county" },
              ].map((c) => (
                <li key={c.slug}>
                  <Link href={`/service-areas/${c.slug}`} className="text-sm text-white/65 hover:text-white transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} WI Furniture Disposal. All rights reserved. West Bend, WI.</p>
          <p className="text-xs text-white/40">Licensed for solid waste removal &bull; Insured</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Waves } from "lucide-react";

const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4351309/new";

const NAVY = "#0A1628";
const AQUA = "#00BCD4";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header style={{ background: NAVY }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: AQUA }}
            >
              <Waves className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="text-base font-bold text-white group-hover:opacity-90 transition-opacity">
                WI Pool Removal
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location === link.href
                    ? "text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
                style={location === link.href ? { color: AQUA } : {}}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:2626990100"
              className="hidden sm:flex items-center gap-1.5 font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
              style={{ background: AQUA, color: "#fff" }}
            >
              <Phone className="w-4 h-4" />
              262-699-0100
            </a>
            <a
              href={JOBBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 border font-semibold px-4 py-2 rounded-lg text-sm transition-colors hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
            >
              Free Quote
            </a>
            <button
              className="lg:hidden p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-white/10 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-md text-sm font-medium transition-colors text-white/80 hover:text-white hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10 mt-2 space-y-2">
              <a
                href="tel:2626990100"
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-bold"
                style={{ background: AQUA, color: "#fff" }}
              >
                <Phone className="w-4 h-4" />
                Call or Text: 262-699-0100
              </a>
              <a
                href={JOBBER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 mx-3 px-3 py-2.5 rounded-lg text-sm font-semibold border"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ background: NAVY }} className="text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center"
                style={{ background: AQUA }}
              >
                <Waves className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-base">WI Pool Removal</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Locally owned above ground pool removal serving Southeast Wisconsin. We drain, disassemble, haul away, and clean up — metal frame components recycled.
            </p>
            <p className="text-xs mt-3 font-semibold px-2 py-1 rounded inline-block" style={{ background: "rgba(0,188,212,0.15)", color: AQUA }}>
              Above ground pools only
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="tel:2626990100"
                className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-80 transition-opacity"
                style={{ color: AQUA }}
              >
                <Phone className="w-4 h-4" />
                262-699-0100
              </a>
              <a
                href={JOBBER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors w-fit"
                style={{ background: AQUA }}
              >
                Get a Free Quote
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
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
                    className="text-sm hover:text-white transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {county.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="border-t mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            &copy; {new Date().getFullYear()} WI Pool Removal. All rights reserved. West Bend, WI.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            Above ground pool removal only &bull; Southeast Wisconsin
          </p>
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

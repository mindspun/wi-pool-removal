import { useEffect } from "react";
import { Link } from "wouter";
import {
  Phone,
  Recycle,
  Heart,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Trash2,
  Home as HomeIcon,
  PackageOpen,
  Boxes,
} from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import { counties } from "@/data/serviceAreas";

const services = [
  { icon: Boxes, title: "Estate Cleanouts", desc: "Full property clearance after a passing, downsizing, or sale. We handle everything start to finish." },
  { icon: Trash2, title: "Junk Removal", desc: "Furniture, appliances, accumulated clutter — we haul it all out quickly and responsibly." },
  { icon: HomeIcon, title: "Garage & Basement Clearing", desc: "Decades of storage cleared in a single visit. We sort, donate, and recycle before anything hits the landfill." },
  { icon: PackageOpen, title: "Attic Cleanouts", desc: "Careful, efficient attic clearing with full removal of everything you no longer need." },
  { icon: Heart, title: "Hoarding Cleanup", desc: "Compassionate, non-judgmental service for hoarding situations. We go at the pace that works for you." },
  { icon: Recycle, title: "Donation & Recycling", desc: "We coordinate with local charities to donate usable items and recycle everything we can." },
];

const values = [
  { icon: Heart, title: "Donation First", desc: "We actively seek donation opportunities for every item before anything goes to waste." },
  { icon: Recycle, title: "Recycle What We Can", desc: "Metals, electronics, and more are recycled responsibly — not just tossed in a dumpster." },
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Licensed for solid waste removal in Wisconsin. Fully insured for your peace of mind." },
  { icon: MapPin, title: "Locally Owned", desc: "Based right here in West Bend, WI. We're your neighbors, not a national franchise." },
];

export default function Home() {
  useEffect(() => {
    document.title = "WI Estate Cleanout | Estate Cleanout & Junk Removal in Wisconsin";
  }, []);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "WI Estate Cleanout",
            description:
              "Locally owned estate cleanout and junk removal serving Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties in Wisconsin.",
            telephone: "+12626990100",
            address: {
              "@type": "PostalAddress",
              addressLocality: "West Bend",
              addressRegion: "WI",
              addressCountry: "US",
            },
            areaServed: [
              "Washington County, WI",
              "Ozaukee County, WI",
              "Fond du Lac County, WI",
              "Sheboygan County, WI",
              "Waukesha County, WI",
            ],
            priceRange: "$$",
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-muted/60 to-accent/30 py-20 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full mb-5">
            West Bend, WI &bull; Locally Owned &bull; Licensed &amp; Insured
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-5">
            Wisconsin Estate Cleanout &amp; Junk Removal You Can Trust
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            WI Estate Cleanout is a locally owned, licensed, and insured junk removal company based in West Bend. We serve Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties with a commitment to donating and recycling before any material reaches a landfill.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:2626990100"
              data-testid="hero-call-button"
              className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-lg hover:bg-primary/90 transition-colors shadow-md text-base"
            >
              <Phone className="w-5 h-5" />
              Call or Text 262-699-0100
            </a>
            <Link
              href="/contact"
              data-testid="hero-estimate-link"
              className="flex items-center gap-2 bg-white border border-border text-foreground font-semibold px-7 py-3.5 rounded-lg hover:border-primary hover:text-primary transition-colors shadow-sm text-base"
            >
              Request a Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">What We Do</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From single-room junk removal to full estate cleanouts, we handle it all — with a genuine commitment to reducing waste.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                data-testid={`service-card-${s.title.toLowerCase().replace(/\s/g, "-")}`}
                className="bg-muted/30 border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing" data-testid="services-pricing-link" className="text-primary font-semibold hover:underline text-sm">
              View pricing and how we charge &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Why WI Estate Cleanout?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We built this company around values that matter to Wisconsin families.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center" data-testid={`value-${v.title.toLowerCase().replace(/\s/g, "-")}`}>
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Our Service Area</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We serve five Wisconsin counties from our home base in West Bend.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {counties.map((county) => (
              <Link
                key={county.slug}
                href={`/service-areas/${county.slug}`}
                data-testid={`county-link-${county.slug}`}
                className="group bg-white border border-border rounded-xl p-5 hover:border-primary hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {county.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {county.cities.map((c) => c.name).join(", ")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/service-areas" data-testid="view-all-areas-link" className="text-primary font-semibold hover:underline text-sm">
              View all service areas &rarr;
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Get a Free, No-Obligation Estimate"
        subtext="Call or text 262-699-0100. We price by load — no hidden fees, no surprises."
      />
    </Layout>
  );
}

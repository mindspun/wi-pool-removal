import { useEffect } from "react";
import { Link } from "wouter";
import {
  Phone, Zap, ShieldCheck, MapPin, ArrowRight,
  Thermometer, Wind, Waves, UtensilsCrossed, Refrigerator, WashingMachine,
} from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import { counties } from "@/data/serviceAreas";

const appliances = [
  { icon: Refrigerator, title: "Refrigerators & Freezers", desc: "All sizes, any condition. We remove and dispose of fridges, chest freezers, and standalone freezer units." },
  { icon: WashingMachine, title: "Washers & Dryers", desc: "Top load, front load, gas or electric — we haul them all out with no fuss." },
  { icon: UtensilsCrossed, title: "Stoves, Ranges & Ovens", desc: "Gas or electric, freestanding or built-in. We disconnect and remove safely." },
  { icon: Waves, title: "Dishwashers", desc: "Built-in or portable dishwashers removed and disposed of responsibly." },
  { icon: Thermometer, title: "Water Heaters", desc: "Tank and tankless water heaters removed from any location in the home." },
  { icon: Wind, title: "HVAC & Air Conditioners", desc: "Window units, portable ACs, and larger HVAC equipment — all handled." },
];

const values = [
  { icon: Zap, title: "Any Appliance, Any Condition", desc: "Working or broken, old or new — we take it. No need to prep or move anything beforehand." },
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Licensed for solid waste removal in Wisconsin. Fully insured on every job, every time." },
  { icon: Phone, title: "Quick Quotes by Phone", desc: "Call or text with your location and items. We give you a price fast — no waiting." },
  { icon: MapPin, title: "Locally Owned in West Bend", desc: "We live and work in the communities we serve. You're talking to the owner, not a call center." },
];

export default function Home() {
  useEffect(() => {
    document.title = "WI Appliance Disposal | Appliance Pickup & Removal in Wisconsin";
  }, []);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "WI Appliance Disposal",
            description: "Locally owned household and commercial appliance disposal and pickup serving Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties in Wisconsin.",
            telephone: "+12626990100",
            address: {
              "@type": "PostalAddress",
              addressLocality: "West Bend",
              addressRegion: "WI",
              addressCountry: "US",
            },
            areaServed: [
              "Washington County, WI", "Ozaukee County, WI",
              "Fond du Lac County, WI", "Sheboygan County, WI", "Waukesha County, WI",
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
            Wisconsin Appliance Disposal &amp; Pickup
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            WI Appliance Disposal removes household and commercial appliances throughout Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties. Locally owned, licensed for solid waste removal, and fully insured. Pricing based on your location and items — call or text for a fast quote.
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
              data-testid="hero-contact-link"
              className="flex items-center gap-2 bg-white border border-border text-foreground font-semibold px-7 py-3.5 rounded-lg hover:border-primary hover:text-primary transition-colors shadow-sm text-base"
            >
              Request a Pickup
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Appliances */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Appliances We Remove</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Household or commercial, working or broken — we haul it all. Any condition, no prep needed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {appliances.map((a) => (
              <div
                key={a.title}
                data-testid={`appliance-card-${a.title.toLowerCase().replace(/[\s&,]/g, "-")}`}
                className="bg-muted/30 border border-border rounded-xl p-6 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't see yours?{" "}
            <a href="tel:2626990100" className="text-primary font-semibold hover:underline">
              Call us — we likely take it.
            </a>
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Why WI Appliance Disposal?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Simple, straightforward service from a locally owned company that picks up the phone.
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

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">How It Works</h2>
            <p className="text-muted-foreground">Three steps and it's done.</p>
          </div>
          <div className="space-y-6">
            {[
              { step: "1", title: "Call or Text Us", desc: "Tell us your location and what needs to go. We'll give you a price based on your items and how far we're traveling." },
              { step: "2", title: "Schedule a Pickup", desc: "We'll set a time that works for you. We show up when we say we will — no waiting around all day." },
              { step: "3", title: "We Haul It Away", desc: "Our crew removes everything and handles responsible disposal. You don't touch a thing." },
            ].map((s) => (
              <div key={s.step} className="flex items-start gap-5 bg-muted/30 border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-muted/30 border-y border-border">
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
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{county.name}</h3>
                    <p className="text-xs text-muted-foreground">{county.cities.map((c) => c.name).join(", ")}</p>
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
        heading="Get a Fast Quote"
        subtext="Call or text 262-699-0100. Pricing based on your location and items — no surprises."
      />
    </Layout>
  );
}

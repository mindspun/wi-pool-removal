import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, Sofa, ShieldCheck, MapPin, ArrowRight, Armchair, BedDouble, BookOpen, UtensilsCrossed, Monitor, Package } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import { counties } from "@/data/serviceAreas";

const furnitureTypes = [
  { icon: Sofa, title: "Sofas & Sectionals", desc: "Any size, any fabric, any condition. We haul out entire seating sets or single pieces." },
  { icon: BedDouble, title: "Beds & Bed Frames", desc: "Twin through king, platform frames, headboards, box springs — all removed and disposed of." },
  { icon: Armchair, title: "Chairs & Recliners", desc: "Accent chairs, recliners, loveseats, office chairs — whatever you've got, we'll take it." },
  { icon: UtensilsCrossed, title: "Dining Sets", desc: "Tables and chairs removed together. We disconnect and haul out full dining room sets." },
  { icon: Monitor, title: "Desks & Office Furniture", desc: "Work-from-home desks, filing cabinets, office chairs, cubicle systems — household or commercial." },
  { icon: BookOpen, title: "Bookcases & Storage", desc: "Freestanding shelves, bookcases, media consoles, storage units — all accepted." },
];

const steps = [
  { n: "1", t: "Call or Text Us", d: "Tell us your city and what furniture needs to go. We'll give you a price right then — no waiting, no in-person estimate for most jobs." },
  { n: "2", t: "Schedule a Pickup", d: "We'll find a time that works for you and confirm your appointment. We show up when we say we will." },
  { n: "3", t: "We Haul It Away", d: "Our crew does all the lifting, loading, and responsible disposal. You don't have to move a thing." },
];

export default function Home() {
  useEffect(() => {
    document.title = "WI Furniture Disposal | Furniture Pickup & Removal in Wisconsin";
  }, []);

  return (
    <Layout>
      {/* Hero — split layout */}
      <section className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-accent px-3 py-1 rounded mb-5">
              West Bend, WI &bull; Licensed &amp; Insured
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-5">
              Wisconsin Furniture Pickup &amp; Disposal
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              WI Furniture Disposal removes household and commercial furniture throughout Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties. Locally owned, licensed for solid waste, fully insured. Pricing by the job — call or text for a fast quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:2626990100" className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3.5 rounded hover:bg-primary/90 transition-colors shadow">
                <Phone className="w-5 h-5" />Call or Text 262-699-0100
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-muted text-foreground font-semibold px-6 py-3.5 rounded hover:bg-muted/70 transition-colors">
                Request a Pickup<ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, label: "Licensed & Insured" },
              { icon: MapPin, label: "5 Wisconsin Counties" },
              { icon: Sofa, label: "All Furniture Types" },
              { icon: Phone, label: "Fast Phone Quotes" },
            ].map((item) => (
              <div key={item.label} className="bg-muted/50 border border-border rounded p-5 text-center">
                <div className="w-10 h-10 bg-primary/10 rounded mx-auto mb-3 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Remove */}
      <section className="py-16 px-4 bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Furniture We Remove</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Any piece, any condition. You don't need to move it — we handle everything from where it sits.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {furnitureTypes.map((f) => (
              <div key={f.title} className="bg-white border border-border rounded p-6 hover:shadow-md hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{f.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't see yours?{" "}
            <a href="tel:2626990100" className="text-primary font-semibold hover:underline">Call us — we likely take it.</a>
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">How It Works</h2>
            <p className="text-muted-foreground">Three steps. No hassle.</p>
          </div>
          <div className="relative space-y-4">
            {steps.map((s, i) => (
              <div key={s.n} className="flex items-start gap-5 bg-muted/30 border border-border rounded p-6">
                <div className="w-10 h-10 bg-primary text-white rounded font-bold text-lg flex items-center justify-center flex-shrink-0">{s.n}</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{s.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
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
            <p className="text-muted-foreground max-w-xl mx-auto">We serve five Wisconsin counties from our base in West Bend.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {counties.map((county) => (
              <Link
                key={county.slug}
                href={`/service-areas/${county.slug}`}
                className="group bg-white border border-border rounded p-5 hover:border-primary hover:shadow-sm transition-all"
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
            <Link href="/service-areas" className="text-primary font-semibold hover:underline text-sm">View all service areas &rarr;</Link>
          </div>
        </div>
      </section>

      <CtaBanner heading="Get a Fast Quote" subtext="Call or text 262-699-0100. Pricing based on your location and items — confirmed before we schedule." />
    </Layout>
  );
}

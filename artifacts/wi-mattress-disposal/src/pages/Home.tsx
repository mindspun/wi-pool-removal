import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, BedDouble, ShieldCheck, MapPin, ArrowRight, Recycle, Clock, Star } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import { counties } from "@/data/serviceAreas";

const mattressSizes = [
  "Twin & Twin XL", "Full / Double", "Queen", "King & California King", "Box Springs", "Futon & Foam Mattresses",
];

const whyUs = [
  { icon: BedDouble, title: "All Sizes & Conditions", desc: "New, old, stained, or torn — we take any mattress in any condition. No judgment, no prep required." },
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Licensed for solid waste removal in Wisconsin and fully insured on every single job, every time." },
  { icon: Clock, title: "We Show Up On Time", desc: "When we say we'll be there, we are. Schedule with confidence — no waiting around all day." },
  { icon: Recycle, title: "Responsible Disposal", desc: "We dispose of mattresses according to Wisconsin solid waste regulations. Not just thrown in a dumpster." },
  { icon: Phone, title: "Fast Phone Quotes", desc: "Call or text with your location and quantity. We give you a number right away — no waiting." },
  { icon: MapPin, title: "Locally Based in West Bend", desc: "We live and work in the communities we serve. You're talking to the owner, not a call center." },
];

export default function Home() {
  useEffect(() => {
    document.title = "WI Mattress Disposal | Mattress Pickup & Removal in Wisconsin";
  }, []);

  return (
    <Layout>
      {/* Hero — centered with feature strip */}
      <section className="bg-gradient-to-br from-muted/60 via-background to-accent/20 border-b border-border py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Star className="w-4 h-4" />
            West Bend, WI &bull; Locally Owned &bull; Licensed &amp; Insured
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-5">
            Wisconsin Mattress Disposal &amp; Pickup
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            WI Mattress Disposal picks up and responsibly disposes of mattresses throughout Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties. All sizes, any condition. Pricing based on your location and quantity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:2626990100" className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-4 rounded-2xl hover:bg-primary/90 transition-colors shadow-lg text-base">
              <Phone className="w-5 h-5" />Call or Text 262-699-0100
            </a>
            <Link href="/contact" className="flex items-center gap-2 bg-white border border-border text-foreground font-semibold px-7 py-4 rounded-2xl hover:border-primary hover:text-primary transition-colors text-base">
              Request a Pickup<ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sizes strip */}
      <section className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70 mb-4">We Remove All Sizes</p>
          <div className="flex flex-wrap justify-center gap-3">
            {mattressSizes.map((size) => (
              <span key={size} className="bg-white/15 text-white font-medium text-sm px-4 py-1.5 rounded-full">{size}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Why WI Mattress Disposal?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Simple, dependable service from a locally owned company that actually picks up the phone.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-muted/30 border border-border rounded-2xl p-6 hover:shadow-md hover:border-primary/30 transition-all">
                <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted/30 border-y border-border">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">How It Works</h2>
            <p className="text-muted-foreground">Easy as three steps.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { n: "1", t: "Call or Text", d: "Tell us your city and how many mattresses. We give you a price right then." },
              { n: "2", t: "Schedule", d: "We book a time that works for you and confirm your appointment." },
              { n: "3", t: "We Remove It", d: "We haul it out, load it up, and dispose of it responsibly. Done." },
            ].map((s) => (
              <div key={s.n} className="bg-white border border-border rounded-2xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">{s.n}</div>
                <h3 className="font-bold text-foreground mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
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
            <p className="text-muted-foreground max-w-xl mx-auto">Five Wisconsin counties served from our home base in West Bend.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {counties.map((county) => (
              <Link
                key={county.slug}
                href={`/service-areas/${county.slug}`}
                className="group bg-muted/30 border border-border rounded-2xl p-5 hover:border-primary hover:shadow-md transition-all"
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

      <CtaBanner heading="Get a Fast Quote" subtext="Call or text 262-699-0100. We price based on your location and quantity — always discussed before scheduling." />
    </Layout>
  );
}

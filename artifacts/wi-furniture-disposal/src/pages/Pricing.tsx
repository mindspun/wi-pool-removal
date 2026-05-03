import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, MapPin, HelpCircle, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import Breadcrumb from "@/components/Breadcrumb";

const tiers = [
  {
    name: "Quarter Load",
    price: "$275",
    description: "Up to a quarter of our 7×16×4 trailer — a few pieces of furniture or a small room's worth of furniture.",
    examples: ["1–3 pieces of furniture", "Single sofa or sectional", "A dresser and a few chairs", "Small room clearout"],
  },
  {
    name: "Half Load",
    price: "$425",
    description: "Approximately half our 7×16×4 trailer — a full bedroom set, a living room, or several pieces across multiple rooms of furniture.",
    examples: ["Full bedroom set", "Living room furniture", "4–6 pieces mixed", "Office furniture clearout"],
  },
  {
    name: "Three-Quarter Load",
    price: "$575",
    description: "About three-quarters of our 7×16×4 trailer — larger furniture jobs combining multiple rooms or a mix of indoor and outdoor pieces.",
    examples: ["Multiple rooms of furniture", "Apartment clearout", "Indoor + outdoor combo", "Larger estate furniture"],
    highlighted: true,
  },
  {
    name: "Full Load",
    price: "$750",
    description: "A completely full 7×16×4 trailer — whole-home furniture removal, commercial properties, or large rental turnovers.",
    examples: ["Whole-home clearout", "Commercial property", "Large rental turnover", "Full estate furniture"],
  },
];

const faqs = [
  { q: "How exactly is pricing determined?", a: "We price by the volume of furniture in our truck — not by the hour, and not by item count. The ranges above cover most furniture removal jobs; call or text for a fast quote." },
  { q: "Does the price include labor and disposal?", a: "Yes. Every quote includes our crew's labor, loading, hauling, and responsible disposal. There are no add-ons after the job is done." },
  { q: "Are there any hidden fees?", a: "No. The price we quote is the price you pay — no fuel surcharges, no dumping fees, no surprise charges." },
  { q: "Do I need to move the furniture before you arrive?", a: "No. Our crew handles all the lifting for furniture removal. Tell us where the pieces are and we take it from there." },
  { q: "Do you take broken or damaged furniture?", a: "Yes. Condition doesn't matter — broken frames, torn upholstery, old wood, whatever. We take it." },
  { q: "What counties do you serve?", a: "Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties. Your location within those counties affects pricing." },
  { q: "Do you take commercial furniture?", a: "Yes. Office furniture, waiting room seating, restaurant furniture, cubicle systems — we handle commercial jobs." },
  { q: "Can you pick up just one piece?", a: "Yes. Single-item furniture pickups fall under our quarter-load minimum. Call or text and we'll confirm the price." },
];

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing | WI Furniture Disposal - Wisconsin Furniture Removal";
  }, []);

  return (
    <Layout>
      <div className="bg-muted/50 border-b border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Pricing</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Transparent, volume-based furniture removal pricing with no hidden fees. Prices include labor and disposal.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">

        {/* How We Price */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-foreground mb-3">How We Price</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We charge by load size — the amount of space your furniture occupies in our 7×16×4 trailer. You only pay for the furniture we actually haul. All prices include labor and disposal.
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-14">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded border p-6 flex flex-col ${
                tier.highlighted
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-white shadow-sm"
              }`}
            >
              {tier.highlighted && (
                <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">Most Common</span>
              )}
              <h3 className="text-lg font-bold text-foreground mb-1">{tier.name}</h3>
              <p className="text-2xl font-extrabold text-primary mb-3">{tier.price}</p>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">{tier.description}</p>
              <ul className="space-y-2">
                {tier.examples.map((ex) => (
                  <li key={ex} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Always Included */}
        <div className="bg-muted/40 border border-border rounded p-6 mb-14 text-center">
          <p className="text-foreground font-semibold text-lg mb-4">Every furniture removal job includes:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Labor & loading by our crew", "Responsible furniture disposal", "Licensed & insured service", "Price confirmed before we start", "On-time scheduling"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-foreground/80 bg-white border border-border rounded-full px-4 py-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{item}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-primary" />Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-border rounded p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-accent/40 border border-accent rounded p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Not Sure Which Tier Fits?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">Call or text us — we'll talk through it and give you a number right away.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:2626990100" className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded hover:bg-primary/90 transition-colors">
              <Phone className="w-4 h-4" />Call or Text 262-699-0100
            </a>
            <Link href="/contact" className="text-primary font-semibold hover:underline text-sm">Request a pickup online &rarr;</Link>
          </div>
        </div>
      </div>

      <CtaBanner />
    </Layout>
  );
}

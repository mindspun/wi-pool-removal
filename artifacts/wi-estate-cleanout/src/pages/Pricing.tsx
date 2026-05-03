import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, CheckCircle2, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import Breadcrumb from "@/components/Breadcrumb";

const tiers = [
  {
    name: "Small Load",
    range: "$125 – $200",
    description: "A few items — a couple pieces of furniture, several bags of debris, or a small pile of miscellaneous junk.",
    examples: ["1–2 pieces of furniture", "A few appliances", "Small room cleanout", "Miscellaneous bags of junk"],
  },
  {
    name: "Half Load",
    range: "$250 – $375",
    description: "Roughly half a truck — a garage's worth of items, a basement, or several rooms of accumulated belongings.",
    examples: ["Full garage cleanout", "Basement cleanout", "3–4 rooms of furniture", "Estate partial clearance"],
    highlighted: true,
  },
  {
    name: "Full Load",
    range: "$400 – $600+",
    description: "A full truck load — complete estate cleanouts, whole-home clearances, or large hoarding situations.",
    examples: ["Full estate cleanout", "Whole-home clearance", "Large hoarding cleanup", "Commercial property cleanout"],
  },
];

const faqs = [
  {
    q: "How exactly is pricing determined?",
    a: "We price by the volume of space your junk takes up in our truck — not by the hour, and not by item count. A free on-site estimate tells you exactly what to expect before we lift a single thing.",
  },
  {
    q: "Are there any hidden fees?",
    a: "No. The price we quote is the price you pay. There are no fuel surcharges, no dumping fees added after the fact, and no surprise labor charges.",
  },
  {
    q: "Do you charge extra for donation coordination?",
    a: "No. Coordinating donations to local charities is part of our standard service — at no additional cost. We believe it's the right thing to do.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Yes. We offer free, no-obligation estimates. For many jobs, we can give a range over the phone — and we always confirm pricing in person before we start.",
  },
  {
    q: "What if I only have one or two items?",
    a: "We handle small jobs too. Single-item or small-load removals start at our minimum pricing. Call or text us and we'll give you a quick estimate.",
  },
  {
    q: "What don't you take?",
    a: "We don't haul hazardous materials (paint, chemicals, oils, asbestos), but we can point you toward proper disposal resources. Most everything else — furniture, appliances, yard waste, construction debris — we handle.",
  },
];

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing | WI Estate Cleanout - Junk Removal in Wisconsin";
  }, []);

  return (
    <Layout>
      <div className="bg-muted/40 border-b border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services & Pricing" }]} />
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Services &amp; Pricing</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Transparent, load-based pricing with no hidden fees. A free estimate before we ever start.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-foreground mb-3">How We Price</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We charge by load size — the amount of space your items occupy in our truck. This is the fairest way to price junk removal because you only pay for what we actually haul. The ranges below are estimates; your final price is confirmed with a free, on-site estimate before any work begins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-14">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              data-testid={`pricing-tier-${tier.name.toLowerCase().replace(/\s/g, "-")}`}
              className={`rounded-xl border p-6 flex flex-col ${
                tier.highlighted
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border bg-white shadow-sm"
              }`}
            >
              {tier.highlighted && (
                <span className="text-xs font-semibold text-primary uppercase tracking-wide mb-3">Most Common</span>
              )}
              <h3 className="text-xl font-bold text-foreground mb-1">{tier.name}</h3>
              <p className="text-2xl font-extrabold text-primary mb-3">{tier.range}</p>
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

        <div className="bg-muted/40 border border-border rounded-xl p-6 mb-14 text-center">
          <p className="text-foreground font-semibold text-lg mb-2">Every job includes:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {[
              "Free on-site estimate",
              "Donation coordination",
              "Responsible recycling",
              "Cleanup after removal",
              "Licensed & insured crew",
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-foreground/80 bg-white border border-border rounded-full px-4 py-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-primary" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                data-testid={`faq-${i}`}
                className="bg-white border border-border rounded-xl p-6"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-accent/40 border border-accent rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Get Your Free Estimate</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Not sure which tier fits your job? Call or text us — we'll talk through it and give you a range right away.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:2626990100"
              data-testid="pricing-call-button"
              className="flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call or Text 262-699-0100
            </a>
            <Link
              href="/contact"
              data-testid="pricing-contact-link"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Send us a request online &rarr;
            </Link>
          </div>
        </div>
      </div>

      <CtaBanner />
    </Layout>
  );
}

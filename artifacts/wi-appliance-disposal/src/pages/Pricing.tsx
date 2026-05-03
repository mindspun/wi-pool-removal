import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, MapPin, HelpCircle, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import Breadcrumb from "@/components/Breadcrumb";

const factors = [
  { icon: MapPin, title: "Your Location", desc: "We price based on how far we travel from West Bend. Communities closer to us cost less; farther locations reflect the extra drive time and fuel." },
  { icon: CheckCircle2, title: "Items Being Removed", desc: "A single refrigerator is a different job than ten commercial kitchen appliances. The number, size, and type of items all factor into the quote." },
  { icon: Phone, title: "Quick Quote by Phone", desc: "Tell us your city and what needs to go and we'll give you a price right then — no waiting, no in-person estimate required for most jobs." },
];

const faqs = [
  { q: "How do I get a price?", a: "Call or text 262-699-0100 with your location and a description of what you need removed. We'll give you a quote on the spot for most jobs." },
  { q: "Do I need to move anything beforehand?", a: "No. Our crew handles all the lifting and moving. Just let us know where the items are and we'll take care of the rest." },
  { q: "Do you take broken or non-working appliances?", a: "Yes. Working, broken, old, rusted — condition doesn't matter. We take it." },
  { q: "What areas do you serve?", a: "We serve Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties. Your location within those counties affects pricing." },
  { q: "Do you take commercial appliances?", a: "Yes. We handle commercial kitchen equipment, large HVAC units, and other commercial appliances in addition to standard household items." },
  { q: "What appliances don't you take?", a: "We remove most household and commercial appliances. If you're unsure about a specific item, just call or text and we'll let you know." },
];

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing | WI Appliance Disposal - Wisconsin Appliance Removal";
  }, []);

  return (
    <Layout>
      <div className="bg-muted/40 border-b border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Pricing</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Pricing is based on your location and the items being removed. Call or text for a fast quote — no in-person estimate needed for most jobs.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 mb-12 text-center shadow-md">
          <h2 className="text-2xl font-bold mb-3">Pricing Is Based On Your Job</h2>
          <p className="text-primary-foreground/85 max-w-xl mx-auto leading-relaxed mb-6">
            We don't use a one-size-fits-all rate sheet. Every quote accounts for your location and exactly what needs to be removed — so you pay a fair price for your specific job, not a padded estimate built for worst-case scenarios.
          </p>
          <a
            href="tel:2626990100"
            data-testid="pricing-hero-call"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4" />
            Call or Text for a Quote: 262-699-0100
          </a>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-6">What Affects Your Price</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {factors.map((f) => (
            <div key={f.title} className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/40 border border-border rounded-xl p-6 mb-14">
          <h2 className="text-lg font-bold text-foreground mb-4">What's Always Included</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Lifting & loading by our crew",
              "Responsible disposal",
              "Licensed & insured service",
              "Price confirmed before we start",
              "On-time scheduling",
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
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} data-testid={`faq-${i}`} className="bg-white border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-accent/40 border border-accent rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Get Your Quote Now</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Tell us your city and what you need removed. We'll give you a price right away.
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
            <Link href="/contact" data-testid="pricing-contact-link" className="text-primary font-semibold hover:underline text-sm">
              Request a pickup online &rarr;
            </Link>
          </div>
        </div>
      </div>

      <CtaBanner />
    </Layout>
  );
}

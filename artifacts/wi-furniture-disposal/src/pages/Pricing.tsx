import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, MapPin, HelpCircle, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import Breadcrumb from "@/components/Breadcrumb";

const faqs = [
  { q: "How do I get a price?", a: "Call or text 262-699-0100 with your location and a description of what you need removed. We'll quote you right then for most jobs." },
  { q: "Do I need to move furniture before you arrive?", a: "No. Our crew handles all the lifting. Tell us where the pieces are and we take it from there." },
  { q: "Do you take broken or damaged furniture?", a: "Yes. Condition doesn't matter — broken frames, torn upholstery, old wood, whatever. We take it." },
  { q: "What counties do you serve?", a: "Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties. Your location within those counties affects your price." },
  { q: "Do you take commercial furniture?", a: "Yes. Office furniture, waiting room seating, restaurant furniture, cubicle systems — we handle commercial jobs." },
  { q: "Can you pick up just one piece?", a: "Yes. We price by the job, so a single recliner or one dresser is a reasonable pickup." },
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
          <p className="text-muted-foreground text-lg max-w-2xl">Pricing is based on your location and the volume of furniture being removed. Call or text for a fast quote — no in-person estimate needed for most jobs.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        {/* Main pricing callout */}
        <div className="bg-foreground text-white rounded p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-3">Pricing Is Based On Volume</h2>
          <p className="text-white/75 max-w-xl mx-auto leading-relaxed mb-6">We don't use a flat-rate price sheet. Every quote is based on the volume of furniture being removed and includes labor and disposal — so you pay a fair price for your specific situation, not a padded estimate built for worst-case scenarios.</p>
          <a href="tel:2626990100" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded hover:bg-primary/90 transition-colors">
            <Phone className="w-4 h-4" />Call or Text for a Quote: 262-699-0100
          </a>
        </div>

        {/* Factors */}
        <h2 className="text-xl font-bold text-foreground mb-5">What Affects Your Price</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {[
            { icon: MapPin, t: "Your Location", d: "We price based on travel from West Bend. Communities closer to us cost less; farther locations reflect the extra drive." },
            { icon: CheckCircle2, t: "Volume of Furniture", d: "A single chair is different from a full living room set. The amount of space your items take up is the main factor in pricing." },
            { icon: Phone, t: "Labor & Disposal Included", d: "Our quote includes labor, hauling, and disposal — no surprise add-ons after the job is done." },
          ].map((f) => (
            <div key={f.t} className="bg-white border border-border rounded p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-primary/10 rounded flex items-center justify-center">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">{f.t}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>

        {/* Always included */}
        <div className="bg-muted/40 border border-border rounded p-6 mb-12">
          <h2 className="text-lg font-bold text-foreground mb-4">Always Included</h2>
          <div className="flex flex-wrap gap-3">
            {["Lifting & loading by our crew", "Labor included", "Responsible disposal", "Licensed & insured service", "Price confirmed before we start", "On-time scheduling"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-foreground/80 bg-white border border-border rounded-full px-4 py-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{item}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
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
          <h2 className="text-2xl font-bold text-foreground mb-3">Get Your Quote Now</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">Tell us your city and what you need removed. We'll give you a price right away.</p>
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

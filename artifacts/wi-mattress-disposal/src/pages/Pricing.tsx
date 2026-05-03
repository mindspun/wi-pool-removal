import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, MapPin, HelpCircle, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import Breadcrumb from "@/components/Breadcrumb";

const faqs = [
  { q: "How do I get a price?", a: "Call or text 262-699-0100 with your city and how many mattresses. We'll give you a quote on the spot." },
  { q: "Do you take stained or damaged mattresses?", a: "Yes. Condition doesn't matter — stained, torn, wet, old. We take any mattress in any condition." },
  { q: "Do I need to move the mattress?", a: "No. Tell us where it is and we'll handle everything from there — no prep needed on your end." },
  { q: "What areas do you serve?", a: "Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties. Your location within those counties affects pricing." },
  { q: "Do you take box springs?", a: "Yes. Box springs are included and priced the same as mattresses." },
  { q: "Do you pick up commercial/hotel mattresses?", a: "Yes. We handle commercial mattress disposal — hotels, apartments, assisted living facilities, and other commercial properties." },
];

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing | WI Mattress Disposal - Wisconsin Mattress Removal";
  }, []);

  return (
    <Layout>
      <div className="bg-gradient-to-br from-muted/60 to-accent/20 border-b border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Pricing</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">Pricing is based on your location and how many mattresses need to be removed. Call or text for a fast quote — no waiting, no in-person estimate needed for most jobs.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 mb-12 text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-3">Pricing Is Based On Your Job</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto leading-relaxed mb-6">We don't use a one-size-fits-all rate sheet. Every quote is based on your location and how many pieces — so you pay a fair price for your actual job, not a padded worst-case estimate.</p>
          <a href="tel:2626990100" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors shadow">
            <Phone className="w-4 h-4" />Call or Text: 262-699-0100
          </a>
        </div>

        <h2 className="text-xl font-bold text-foreground mb-5">What Affects Your Price</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {[
            { icon: MapPin, t: "Your Location", d: "We price based on distance from West Bend. Closer communities cost less; farther locations reflect the travel." },
            { icon: CheckCircle2, t: "Number of Pieces", d: "One mattress versus five is a different job. The count and sizes all factor into the quote." },
            { icon: Phone, t: "Fast Phone Quote", d: "Tell us your city and your count. We give you a number right away — no appointment needed to get a price." },
          ].map((f) => (
            <div key={f.t} className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{f.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>

        <div className="bg-muted/40 border border-border rounded-2xl p-6 mb-12">
          <h2 className="text-lg font-bold text-foreground mb-4">Always Included</h2>
          <div className="flex flex-wrap gap-3">
            {["Lifting & loading by our crew", "Responsible disposal", "Licensed & insured", "Price confirmed before scheduling", "On-time arrival"].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm text-foreground/80 bg-white border border-border rounded-full px-4 py-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />{item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-primary" />Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-accent/30 border border-accent rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Get Your Quote Now</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">Tell us your city and how many mattresses. We'll give you a price right away.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:2626990100" className="flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
              <Phone className="w-4 h-4" />Call or Text 262-699-0100
            </a>
            <Link href="/contact" className="text-primary font-semibold hover:underline text-sm">Request online &rarr;</Link>
          </div>
        </div>
      </div>

      <CtaBanner />
    </Layout>
  );
}

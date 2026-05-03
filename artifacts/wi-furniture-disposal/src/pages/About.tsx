import { useEffect } from "react";
import { Phone, ShieldCheck, MapPin, Sofa, Award, Handshake } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const commitments = [
  { icon: Sofa, title: "All Furniture, Any Condition", desc: "Working or broken, old or new — condition doesn't matter. We take it without judgment and without prep." },
  { icon: ShieldCheck, title: "Licensed & Fully Insured", desc: "Licensed for solid waste removal in Wisconsin. Fully insured on every job. Your property is protected." },
  { icon: Award, title: "Transparent Pricing", desc: "We price based on your location and what needs to go. You know the cost before we set an appointment — never a surprise at the end." },
  { icon: MapPin, title: "Based in West Bend", desc: "Locally owned and operated. We serve Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties from our home base." },
  { icon: Phone, title: "You Talk to the Owner", desc: "When you call or text, you're reaching the person running the operation — not a dispatch system or call center." },
  { icon: Handshake, title: "Household & Commercial", desc: "From a single recliner to a full office clearout — we handle both residential and commercial furniture removal jobs." },
];

export default function About() {
  useEffect(() => {
    document.title = "About WI Furniture Disposal | West Bend, WI";
  }, []);

  return (
    <Layout>
      <div className="bg-muted/50 border-b border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="text-4xl font-extrabold text-foreground mb-4">About WI Furniture Disposal</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">A locally owned furniture removal company built on honest pricing, reliable scheduling, and responsible disposal.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-foreground">What We Do</h2>
          <p className="text-foreground/80 leading-relaxed">WI Furniture Disposal removes household and commercial furniture across five Wisconsin counties. Sofas, sectionals, beds, dressers, desks, dining tables, recliners, office furniture — if you can sit on it, sleep on it, or put things in it, we haul it away.</p>
          <p className="text-foreground/80 leading-relaxed">We're based in West Bend, putting us close to the heart of our service area. We cover Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties. Pricing is based on where you are and what you need removed — call or text and we'll give you a number fast.</p>
          <p className="text-foreground/80 leading-relaxed">Every job is handled by a licensed, insured crew. We do the lifting, the loading, and the responsible disposal. You don't touch a thing.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {commitments.map((item) => (
            <div key={item.title} className="bg-white border border-border rounded p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">{item.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-accent/40 border border-accent rounded p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Schedule?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">Call or text with your location and what needs to go. We'll give you a price fast.</p>
          <a href="tel:2626990100" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded hover:bg-primary/90 transition-colors">
            <Phone className="w-4 h-4" />262-699-0100
          </a>
        </div>
      </div>
    </Layout>
  );
}

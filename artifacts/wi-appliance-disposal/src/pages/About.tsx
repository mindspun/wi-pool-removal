import { useEffect } from "react";
import { ShieldCheck, MapPin, Zap, Phone, Award, Handshake } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import Breadcrumb from "@/components/Breadcrumb";

const commitments = [
  { icon: Zap, title: "Any Appliance, Any Condition", desc: "Working, broken, old, rusted — we take it without judgment. No prep needed on your end." },
  { icon: ShieldCheck, title: "Licensed & Fully Insured", desc: "Licensed for solid waste removal in Wisconsin and fully insured on every job. Your property is protected." },
  { icon: Award, title: "Transparent Pricing", desc: "Pricing is based on your location and the items being removed. We discuss cost before we schedule — never a surprise bill at the end." },
  { icon: MapPin, title: "Based in West Bend", desc: "We live and work in the same communities we serve across Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties." },
  { icon: Phone, title: "You Talk to the Owner", desc: "When you call or text, you're reaching the person running the business — not a dispatch center or automated system." },
  { icon: Handshake, title: "Household & Commercial", desc: "We handle everything from a single home refrigerator to full commercial kitchen equipment clearouts. No job too small, no appliance too large." },
];

export default function About() {
  useEffect(() => {
    document.title = "About WI Appliance Disposal | West Bend, WI";
  }, []);

  return (
    <Layout>
      <div className="bg-muted/40 border-b border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="text-4xl font-extrabold text-foreground mb-4">About WI Appliance Disposal</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A locally owned appliance removal company built around honest pricing, reliable scheduling, and responsible disposal.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">What We Do</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            WI Appliance Disposal removes household and commercial appliances across five Wisconsin counties. Refrigerators, washers, dryers, stoves, dishwashers, water heaters, HVAC units, commercial kitchen equipment — if it plugs in or runs on gas and you don't want it anymore, we haul it away.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            We're based in West Bend, which puts us close to the heart of our service area. We cover Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties — and we price every job based on where you are and what you need removed. Call or text us and we'll give you a number right away.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Every job is handled by a licensed, insured crew. We do the lifting, the loading, and the responsible disposal — you don't touch a thing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {commitments.map((item) => (
            <div
              key={item.title}
              data-testid={`commitment-${item.title.toLowerCase().replace(/[\s&,]/g, "-")}`}
              className="bg-white border border-border rounded-xl p-6 shadow-sm"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-accent/40 border border-accent rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Schedule?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Call or text us with your location and what needs to go. We'll give you a price fast.
          </p>
          <a
            href="tel:2626990100"
            data-testid="about-call-button"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            262-699-0100
          </a>
        </div>
      </div>
    </Layout>
  );
}

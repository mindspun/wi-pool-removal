import { useEffect } from "react";
import { Phone, ShieldCheck, MapPin, BedDouble, Recycle, Handshake } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

const commitments = [
  { icon: BedDouble, title: "All Sizes & Conditions", desc: "New, old, stained, torn, or wet — we take mattresses in any condition, any size. No prep needed on your end." },
  { icon: ShieldCheck, title: "Licensed & Fully Insured", desc: "Licensed for solid waste removal in Wisconsin and fully insured on every job. Your property is protected." },
  { icon: Recycle, title: "Responsible Disposal", desc: "We dispose of mattresses in compliance with Wisconsin solid waste regulations. Not just dumped — done right." },
  { icon: MapPin, title: "Based in West Bend", desc: "Locally owned and operated. We serve Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties." },
  { icon: Phone, title: "You Talk to the Owner", desc: "When you call or text, you're reaching the person running the business — not a dispatch system." },
  { icon: Handshake, title: "Household & Commercial", desc: "From one bedroom mattress to a full hotel property clearout — we handle residential and commercial jobs." },
];

export default function About() {
  useEffect(() => {
    document.title = "About WI Mattress Disposal | West Bend, WI";
  }, []);

  return (
    <Layout>
      <div className="bg-gradient-to-br from-muted/60 to-accent/20 border-b border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="text-4xl font-extrabold text-foreground mb-4">About WI Mattress Disposal</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">A locally owned mattress removal company built around honest pricing, dependable service, and responsible disposal.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-foreground">What We Do</h2>
          <p className="text-foreground/80 leading-relaxed">WI Mattress Disposal picks up and responsibly disposes of mattresses across five Wisconsin counties. All sizes — twin through California king — and all conditions. We serve homeowners, landlords, hotels, and anyone else who needs a mattress removed the right way.</p>
          <p className="text-foreground/80 leading-relaxed">We're based in West Bend, close to the center of our service area. We cover Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties. Pricing is based on where you are and how many pieces — call or text and we'll give you a number right away.</p>
          <p className="text-foreground/80 leading-relaxed">Every job is handled by a licensed, insured crew. We haul it out, load it up, and handle disposal in compliance with Wisconsin regulations. You don't touch a thing.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          {commitments.map((item) => (
            <div key={item.title} className="bg-white border border-border rounded-2xl p-6 shadow-sm">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Schedule?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">Call or text with your city and how many mattresses. We'll give you a price right away.</p>
          <a href="tel:2626990100" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors">
            <Phone className="w-4 h-4" />262-699-0100
          </a>
        </div>
      </div>
    </Layout>
  );
}

import { useEffect } from "react";
import { ShieldCheck, Recycle, Heart, Award, MapPin, Handshake } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import Breadcrumb from "@/components/Breadcrumb";

const commitments = [
  {
    icon: Heart,
    title: "Donation Before Disposal",
    desc: "Every estate cleanout starts with a sorting phase. Furniture, clothing, kitchenware, books — if it's usable, we find it a home through local charities, thrift stores, and donation centers. We never just haul everything to a dumpster.",
  },
  {
    icon: Recycle,
    title: "Recycle What We Can",
    desc: "Metals, electronics, paper, and more are separated and taken to appropriate recycling facilities. Our goal is to minimize what goes to a landfill at every single job.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Fully Insured",
    desc: "WI Estate Cleanout is licensed for solid waste removal in Wisconsin and carries full liability insurance. You're protected on every job, every time.",
  },
  {
    icon: Award,
    title: "Honest, Transparent Pricing",
    desc: "We price by load size — not by the hour or by item count. You get a free estimate before we start, and you only pay for what we actually remove. No surprises.",
  },
  {
    icon: MapPin,
    title: "Locally Rooted in West Bend",
    desc: "We live and work in the same communities we serve. That means we treat your property like a neighbor would — with care, respect, and a genuine interest in leaving things right.",
  },
  {
    icon: Handshake,
    title: "Respectful of Difficult Situations",
    desc: "Estate cleanouts often happen during emotionally difficult times. We approach every job with patience and sensitivity, going at the pace that works for you and your family.",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About WI Estate Cleanout | West Bend, WI Junk Removal";
  }, []);

  return (
    <Layout>
      <div className="bg-muted/40 border-b border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="text-4xl font-extrabold text-foreground mb-4">About WI Estate Cleanout</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A locally owned junk removal and estate cleanout company committed to doing things the right way — for you, and for the community.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            WI Estate Cleanout was founded on a straightforward idea: Wisconsin families dealing with estate transitions, downsizing, or accumulated junk deserve a cleanout company that's honest, hardworking, and genuinely responsible about where everything ends up.
          </p>
          <p className="text-foreground/80 leading-relaxed mb-4">
            We're based in West Bend, right in the heart of our service area. Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties are our backyard — and we take pride in serving them well. When we take on a job, we're not just hauling stuff out the door. We're sorting through it carefully, identifying what can be donated, what can be recycled, and what genuinely needs to be disposed of.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            The landfill is always the last resort. That's not a marketing tagline — it's the way we actually run every job, every day.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {commitments.map((item) => (
            <div
              key={item.title}
              data-testid={`commitment-${item.title.toLowerCase().replace(/\s/g, "-")}`}
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
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Work With Us?</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Whether it's a small garage cleanout or a full estate removal, we'd be glad to help. Call or text anytime for a free estimate.
          </p>
          <a
            href="tel:2626990100"
            data-testid="about-call-button"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            262-699-0100
          </a>
        </div>
      </div>
    </Layout>
  );
}

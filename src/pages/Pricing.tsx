import { useEffect } from "react";
import { Phone, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { setPageMeta } from "@/lib/seo";

const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4351309/new";

const NAVY = "#0A1628";
const AQUA = "#00BCD4";

const factors = [
  {
    title: "Pool Size",
    desc: "Pool diameter and wall height directly affect how long disassembly takes and how much material we're hauling. A 12-foot round pool is a very different job from a 30-foot oval.",
  },
  {
    title: "Water Volume",
    desc: "We drain the pool as part of the job. More water means more time on-site before we can begin disassembly. Larger pools take longer to drain.",
  },
  {
    title: "Decking and Accessories",
    desc: "Attached wood or composite decking, stairs, and accessories add scope to the job. We'll discuss what's included in your quote before we start.",
  },
  {
    title: "Site Access",
    desc: "We need to be able to get the disassembled materials out of your yard. Tight gate openings, long haul distances, or difficult terrain can affect the job scope.",
  },
  {
    title: "Pool Condition",
    desc: "A structurally sound pool is faster to disassemble than one that has partially collapsed, rusted through, or has a deteriorated liner fused to the wall. We handle both — but condition affects the quote.",
  },
  {
    title: "Add-Ons",
    desc: "If you want us to haul away additional items like old patio furniture, pump equipment, or pool toys and chemicals, we can often include that in the same visit for an additional fee.",
  },
];

const alwaysIncluded = [
  "Complete pool drain (we handle this — you don't need to drain it first)",
  "Full disassembly of frame, uprights, top rails, and wall panel",
  "Liner and liner pad removal",
  "Pump, filter, skimmer, and hardware removal",
  "All materials hauled off your property",
  "Metal frame components delivered to recycling",
  "Final site cleanup",
  "Upfront, locked-in quote — no surprise charges on service day",
];

const scenarios = [
  {
    title: "Small Round Pool (12–15 ft)",
    desc: "Typically the fastest jobs. Easy access, manageable water volume, and straightforward disassembly. These are our quickest removals.",
  },
  {
    title: "Standard Family Pool (18–24 ft round)",
    desc: "The most common above ground pool size in Southeast Wisconsin. These jobs typically take a few hours from drain to cleanup.",
  },
  {
    title: "Large Oval Pool (with buttresses)",
    desc: "Oval pools with external buttress legs have more components and take longer to disassemble. We're experienced with all oval pool systems.",
  },
  {
    title: "Pool with Attached Deck",
    desc: "If your pool has an attached wood or composite deck, that adds scope. We'll quote it together so you get a single price for the full removal.",
  },
];

export default function Pricing() {
  useEffect(() => {
    setPageMeta(
      "Above Ground Pool Removal Pricing | WI Pool Removal",
      "Transparent above ground pool removal pricing in Southeast Wisconsin. Quotes based on pool size, water volume, access, and condition. No hidden fees. Call 262-699-0100."
    );
  }, []);

  return (
    <Layout>
      <section style={{ background: NAVY }} className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <h1 className="text-4xl font-black text-white mb-4">Pool Removal Pricing</h1>
          <p className="text-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Straightforward, upfront quotes. No hidden fees, no surprise charges on service day.
          </p>
          <p className="text-sm font-semibold mt-4 px-3 py-1.5 rounded-full inline-block" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
            Above ground pools only — we do not remove in-ground pools
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>How We Price Above Ground Pool Removal</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We don't charge by the hour. We quote each job based on its specific scope — pool size, water volume, decking, and site access. You get a clear price before we start, and that's the price you pay. We don't add charges on the day of service.
          </p>
          <p className="text-gray-700 leading-relaxed">
            To get your quote, call or text us at{" "}
            <a href="tel:2626990100" className="font-semibold" style={{ color: AQUA }}>
              262-699-0100
            </a>{" "}
            or submit a request through our online form. We'll ask a few quick questions — pool size, rough age and condition, whether there's attached decking, and your address — and give you a price from there. Most quotes are provided over the phone or text without requiring a site visit.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: NAVY }}>What Affects the Cost</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {factors.map((f) => (
              <div
                key={f.title}
                className="rounded-xl p-5 border"
                style={{ borderColor: "#dde3ed", background: "#fafbfc" }}
              >
                <h3 className="font-bold mb-2" style={{ color: NAVY }}>{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: NAVY }}>Example Scenarios</h2>
          <div className="space-y-4">
            {scenarios.map((s) => (
              <div
                key={s.title}
                className="rounded-xl p-5 border-l-4"
                style={{ borderLeftColor: AQUA, background: "rgba(0,188,212,0.04)", border: "1px solid rgba(0,188,212,0.2)", borderLeft: `4px solid ${AQUA}` }}
              >
                <h3 className="font-bold mb-1" style={{ color: NAVY }}>{s.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Every job is different. Call us for a specific quote for your pool — it's free, fast, and there's no obligation.
          </p>
        </div>

        <div
          className="rounded-xl p-7"
          style={{ background: "rgba(0,188,212,0.07)", border: "1px solid rgba(0,188,212,0.2)" }}
        >
          <h2 className="text-2xl font-bold mb-5" style={{ color: NAVY }}>What's Always Included</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Every removal we do includes the full scope — there are no stripped-down "basic" packages that leave you dealing with the cleanup. When we leave, the job is done.
          </p>
          <ul className="space-y-3">
            {alwaysIncluded.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: AQUA }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>No Hidden Fees</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We hear from homeowners who've gotten quotes from other companies and then been hit with additional charges on service day — fuel surcharges, disposal fees, unexpected add-ons. That's not how we operate. The price we quote is the price you pay. If something changes significantly between the quote and the job — like discovering a collapsed section we weren't told about — we'll discuss it with you before proceeding.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our goal is a simple, smooth transaction: you get your pool removed and your yard back, and you pay exactly what you expected to pay.
          </p>
        </div>

        <div style={{ background: NAVY }} className="rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Get Your Free Quote</h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
            Call or text us — we'll ask a few quick questions and give you a clear price. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:2626990100"
              className="flex items-center gap-2 font-bold px-7 py-3.5 rounded-lg text-white"
              style={{ background: AQUA }}
            >
              <Phone className="w-4 h-4" />
              Call or Text 262-699-0100
            </a>
            <a
              href={JOBBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg border text-white hover:bg-white/10 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              Request a Quote Online
            </a>
          </div>
        </div>
      </div>

      <CtaBanner
        heading="Transparent Pricing. No Surprises."
        subtext="Call or text for your free estimate. We quote the full job upfront — what you're quoted is what you pay."
      />
    </Layout>
  );
}

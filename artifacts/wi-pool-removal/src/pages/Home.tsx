import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, CheckCircle2, ArrowRight, Recycle, Clock, Trash2, Waves } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import { counties } from "@/data/serviceAreas";
import { setPageMeta } from "@/lib/seo";

const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4351309/new";

const NAVY = "#0A1628";
const AQUA = "#00BCD4";

const highlights = [
  { icon: Clock, label: "Fast Scheduling", desc: "Most removals scheduled within the week" },
  { icon: Trash2, label: "Full Cleanup", desc: "We haul everything — zero debris left behind" },
  { icon: Recycle, label: "Metal Recycled", desc: "Steel and aluminum frames go to recycling" },
  { icon: Waves, label: "Above Ground Specialists", desc: "We only do above ground pools — we're very good at it" },
];

const whyRemove = [
  "Eliminate costly annual maintenance, chemicals, and liner replacements",
  "Remove a liability and safety hazard — especially for families with small children",
  "Reclaim valuable yard space for a garden, patio, or play area",
  "Boost your home's appeal and value before selling",
  "Stop patching a failing structure every season",
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "WI Pool Removal",
  description:
    "Above ground pool removal company serving Southeast Wisconsin. We drain, disassemble, haul away, and recycle metal components. Above ground pools only.",
  telephone: "+1-262-699-0100",
  address: {
    "@type": "PostalAddress",
    addressLocality: "West Bend",
    addressRegion: "WI",
    addressCountry: "US",
  },
  areaServed: [
    "Washington County, WI",
    "Ozaukee County, WI",
    "Fond du Lac County, WI",
    "Sheboygan County, WI",
    "Waukesha County, WI",
  ],
  url: "https://www.wipoolremoval.com",
};

export default function Home() {
  useEffect(() => {
    setPageMeta(
      "WI Pool Removal — Above Ground Pool Removal in Southeast Wisconsin",
      "Above ground pool removal serving Southeast Wisconsin. We drain, disassemble, haul away, and recycle metal. Fast scheduling, upfront pricing. Call 262-699-0100."
    );
  }, []);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section style={{ background: NAVY }} className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-1.5 rounded-full mb-6" style={{ background: "rgba(0,188,212,0.15)", color: AQUA }}>
            <Waves className="w-4 h-4" />
            Above Ground Pool Removal — Southeast Wisconsin
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Above Ground Pool Removal{" "}
            <span style={{ color: AQUA }}>Done Right.</span>
            <br />
            Serving Southeast Wisconsin.
          </h1>
          <p className="text-xl mb-3 max-w-2xl" style={{ color: "rgba(255,255,255,0.8)" }}>
            We drain it, disassemble it, haul it away, and leave your yard clean. Metal frame recycled. Honest pricing, fast scheduling.
          </p>
          <p className="text-sm font-semibold mb-8 px-3 py-1.5 rounded-full inline-block" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
            Above ground pools only — we do not remove in-ground pools
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:2626990100"
              className="flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-xl text-lg text-white shadow-xl transition-opacity hover:opacity-90"
              style={{ background: AQUA }}
            >
              <Phone className="w-5 h-5" />
              Call or Text 262-699-0100
            </a>
            <a
              href={JOBBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-xl text-lg border-2 text-white transition-colors hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.35)" }}
            >
              Get a Free Quote Online
            </a>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY }}>
            Complete Above Ground Pool Removal
          </h2>
          <p className="text-gray-700 text-lg mb-6 max-w-3xl">
            When your above ground pool has seen better days — or you're simply ready for your yard back — WI Pool Removal handles the entire process. We are a Southeast Wisconsin company specializing exclusively in above ground pool removal. We don't remove in-ground pools. That focus means we're efficient, well-equipped, and experienced with exactly this type of work.
          </p>
          <p className="text-gray-700 mb-6 max-w-3xl">
            Our removal process starts with draining all the water from the pool. We then disassemble the entire structure — uprights, top rails, frame, and liner — removing every component from your property. Pumps, filters, skimmers, and any attached hardware are all included. Once everything is removed, we do a final site cleanup so the area is ready for whatever you have planned. The steel or aluminum frame components are taken to a recycling facility. We don't just dump — we recycle what we can.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
            {[
              "Complete water drain handled by us",
              "Full frame and liner disassembly",
              "Pump, filter, and hardware removal",
              "All materials hauled off your property",
              "Metal frame components recycled",
              "Final site cleanup included",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-gray-700">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: AQUA }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Remove */}
      <section className="py-16 px-4" style={{ background: NAVY }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Wisconsin Homeowners Remove Their Above Ground Pools
          </h2>
          <p className="mb-8 text-lg max-w-3xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Above ground pools can be great — but at some point, the costs, the hassle, and the liability outweigh the fun. Here's why homeowners across Southeast Wisconsin call us every season.
          </p>
          <ul className="space-y-4 max-w-2xl">
            {whyRemove.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: AQUA }} />
                <span className="text-white/80">{reason}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-white/70 max-w-3xl">
            Whatever your reason, we make the removal process easy. You don't have to figure out how to drain it, where to take the metal, or what to do with the liner. That's all on us. We handle it start to finish.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center" style={{ color: NAVY }}>
            What Makes WI Pool Removal Different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="text-center p-6 rounded-xl border"
                style={{ borderColor: "rgba(0,188,212,0.25)", background: "rgba(0,188,212,0.04)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: AQUA }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2" style={{ color: NAVY }}>{label}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Overview */}
      <section className="py-16 px-4" style={{ background: "#f8fafc" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY }}>
            Serving Southeast Wisconsin
          </h2>
          <p className="text-gray-700 mb-10 max-w-3xl text-lg">
            We serve homeowners across five counties in Southeast Wisconsin. Click your county to see all the cities we cover and learn more about our service in your area.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {counties.map((county) => (
              <Link
                key={county.slug}
                href={`/service-areas/${county.slug}`}
                className="group flex items-center justify-between bg-white border rounded-xl px-6 py-5 hover:shadow-md transition-all"
                style={{ borderColor: "#dde3ed" }}
              >
                <div>
                  <p className="font-bold" style={{ color: NAVY }}>{county.name}</p>
                  <p className="text-sm text-gray-500 mt-0.5">{county.cities.length} cities served</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ color: AQUA }}
            >
              View all service areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing note + CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY }}>
            Straightforward, Upfront Pricing
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Pool removal costs vary based on pool size, water volume, decking, and site access. We don't give inflated estimates — we quote the job accurately and stick to it. No extra charges on service day.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-lg mb-8"
            style={{ background: "rgba(0,188,212,0.1)", color: AQUA }}
          >
            Learn About Our Pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CtaBanner
        heading="Ready to Remove Your Above Ground Pool?"
        subtext="Call or text for a free, no-obligation estimate. We schedule fast and do the job right — above ground pools only."
      />
    </Layout>
  );
}

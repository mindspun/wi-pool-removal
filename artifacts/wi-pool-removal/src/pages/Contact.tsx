import { useEffect } from "react";
import { Phone, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";

const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4351309/new";

const NAVY = "#0A1628";
const AQUA = "#00BCD4";

const whatToHaveReady = [
  "Pool size (diameter for round, length × width for oval or rectangular)",
  "Pool shape: round, oval, or rectangular",
  "Approximate age and current condition (standing, partially collapsed, rusted, etc.)",
  "Whether there is attached wood or composite decking",
  "Gate width and access route to the pool",
  "Your address (for scheduling and route planning)",
];

export default function Contact() {
  useEffect(() => {
    document.title = "Contact WI Pool Removal — Free Above Ground Pool Removal Quotes";
  }, []);

  return (
    <Layout>
      <section style={{ background: NAVY }} className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-black text-white mb-4">Contact WI Pool Removal</h1>
          <p className="text-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Call, text, or submit a quote request online. We respond promptly and quote quickly.
          </p>
          <p className="text-sm font-semibold mt-4 px-3 py-1.5 rounded-full inline-block" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
            Above ground pools only — we do not remove in-ground pools
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">

        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>Get in Touch</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            The fastest way to get a quote is to call or text us directly at{" "}
            <a href="tel:2626990100" className="font-bold" style={{ color: AQUA }}>
              262-699-0100
            </a>
            . We'll ask a few quick questions and give you a price right away. Most quotes are handled by phone or text — no need for a site visit.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you prefer to submit a request online and have us reach back out to you, use our Jobber quote form below. We check submissions regularly and respond the same business day in most cases.
          </p>
        </div>

        {/* Contact options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div style={{ background: NAVY }} className="rounded-xl p-7 text-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: AQUA }}
            >
              <Phone className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Call or Text</h3>
            <p className="mb-5" style={{ color: "rgba(255,255,255,0.7)" }}>
              The fastest way to get a quote. We'll answer quickly and give you a price on the spot.
            </p>
            <a
              href="tel:2626990100"
              className="block font-black text-2xl text-white hover:opacity-80 transition-opacity"
              style={{ color: AQUA }}
            >
              262-699-0100
            </a>
          </div>

          <div
            className="rounded-xl p-7 text-center border"
            style={{ borderColor: "rgba(0,188,212,0.25)", background: "rgba(0,188,212,0.04)" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-black text-white"
              style={{ background: NAVY }}
            >
              ✉
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: NAVY }}>Online Quote Request</h3>
            <p className="text-gray-600 mb-5">
              Fill out a quick form and we'll reach back out with your quote by the next business day.
            </p>
            <a
              href={JOBBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-bold px-6 py-3 rounded-lg text-white transition-opacity hover:opacity-90"
              style={{ background: NAVY }}
            >
              Submit a Quote Request
            </a>
          </div>
        </div>

        {/* What to have ready */}
        <div
          className="rounded-xl p-7"
          style={{ background: "rgba(0,188,212,0.07)", border: "1px solid rgba(0,188,212,0.2)" }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: NAVY }}>What to Have Ready When You Call</h2>
          <p className="text-gray-700 mb-5 leading-relaxed">
            Having this information on hand speeds up the quoting process significantly. You don't need exact measurements — good estimates are enough to get you a solid price.
          </p>
          <ul className="space-y-3">
            {whatToHaveReady.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: AQUA }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Above ground only reiteration */}
        <div
          className="rounded-xl p-6 border"
          style={{ borderColor: "#dde3ed", background: "#fafbfc" }}
        >
          <h3 className="font-bold mb-2" style={{ color: NAVY }}>Above Ground Pools Only</h3>
          <p className="text-gray-700 leading-relaxed">
            WI Pool Removal specializes exclusively in above ground pool removal. We do not remove in-ground pools. If you're unsure whether your pool qualifies, give us a call — we'll let you know right away. Most above ground pools are easy to identify: they sit on top of the ground with a visible metal frame, and you can walk around the outside of the pool at grade level.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            For everything about how the removal process works, see our{" "}
            <a href="/how-it-works" className="font-semibold" style={{ color: AQUA }}>
              How It Works page
            </a>
            .
          </p>
        </div>
      </div>

      <CtaBanner
        heading="Ready to Remove Your Pool?"
        subtext="Call or text 262-699-0100 for a fast, free quote. Above ground pools only — Southeast Wisconsin."
      />
    </Layout>
  );
}

import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, ArrowRight, Phone, CheckCircle2, HelpCircle } from "lucide-react";
import Layout from "./Layout";
import Breadcrumb from "./Breadcrumb";
import CtaBanner from "./CtaBanner";
import type { County } from "@/data/serviceAreas";
import { setPageMeta } from "@/lib/seo";

const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4351309/new";

const NAVY = "#0A1628";
const AQUA = "#00BCD4";

interface CountyPageProps {
  county: County;
}

const whatsIncluded = [
  "Complete pool drain — we handle all water removal",
  "Full disassembly of frame, top rails, and uprights",
  "Liner and liner pad removal",
  "Pump, filter, and hardware removal",
  "All materials hauled off your property",
  "Metal frame components recycled",
  "Final site cleanup — no debris left behind",
  "Upfront, transparent quote before work begins",
];

const faqs = [
  {
    q: "Do you remove in-ground pools?",
    a: "No. WI Pool Removal specializes exclusively in above ground pool removal. We do not remove in-ground pools of any type.",
  },
  {
    q: "Do I need to drain the pool before you arrive?",
    a: "No — draining is part of our service. We handle all water removal as part of every job.",
  },
  {
    q: "How long does pool removal take?",
    a: "Most above ground pool removals take 2 to 4 hours depending on pool size, water volume, and site access.",
  },
  {
    q: "Do I need a permit to remove an above ground pool?",
    a: "In most Wisconsin municipalities, no permit is required for above ground pool removal. We're happy to advise based on your specific area.",
  },
];

export default function CountyPage({ county }: CountyPageProps) {
  useEffect(() => {
    setPageMeta(
      `${county.name} Above Ground Pool Removal | WI Pool Removal`,
      `Above ground pool removal throughout ${county.name}, Wisconsin. WI Pool Removal drains, disassembles, hauls away, and recycles metal. Locally owned. Call 262-699-0100.`
    );
  }, [county.name]);

  return (
    <Layout>
      <div style={{ background: NAVY }} className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas" },
              { label: county.name },
            ]}
          />
          <div className="flex items-start gap-3">
            <MapPin className="w-7 h-7 mt-1 flex-shrink-0" style={{ color: AQUA }} />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                {county.name} Above Ground Pool Removal
              </h1>
              <p className="text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
                Serving all of {county.name}, Wisconsin &mdash; above ground pools only
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        {/* Intro */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p className="text-lg">{county.description}</p>
          <p>
            WI Pool Removal is locally owned and operated out of West Bend, WI — right here in
            Southeast Wisconsin. We specialize exclusively in above ground pool removal; we do not
            remove in-ground pools. Every job includes a complete drain, full disassembly of the
            frame and liner, removal of the pump, filter, and all hardware, hauling every material
            off your property, and a thorough final cleanup. Metal frame components — steel and
            aluminum — are recycled rather than sent to a landfill. We quote all jobs upfront so
            there are no surprise charges on service day.
          </p>
          <p>
            Homeowners across {county.name} hire us for a variety of reasons. Some pools have
            simply reached the end of their lifespan after 10 to 20 years of use. Others become
            a liability when families no longer use them, and the cost of replacing a liner, pump,
            or filter every few seasons stops making financial sense. Some homeowners are preparing
            to sell and want to reclaim yard space or remove what buyers may see as a burden rather
            than a bonus. Whatever your reason, we make the process straightforward: one scheduled
            visit, and the pool is gone.
          </p>
          <p>
            Above ground pool removal in {county.name} is the only type of pool removal we do —
            and because we've focused on it exclusively, we're efficient at it. We've removed
            round, oval, and rectangular above ground pools of all sizes. We know what access
            challenges tend to come up on properties across the county, and we come equipped to
            handle them. If you're not sure whether your pool qualifies — for example, if your pool
            is partially sunk or has an attached deck structure — just call us at{" "}
            <a href="tel:2626990100" className="font-semibold" style={{ color: AQUA }}>262-699-0100</a>{" "}
            and we'll help you figure it out before scheduling anything.
          </p>
        </div>

        {/* Cities grid */}
        <div>
          <h2 className="text-xl font-bold mb-5" style={{ color: NAVY }}>
            Cities We Serve in {county.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {county.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${county.slug}/${city.slug}`}
                className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg px-5 py-4 hover:shadow-md transition-all"
              >
                <span className="font-medium text-gray-800">{city.name}</span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>
        </div>

        {/* What's included */}
        <div
          className="rounded-xl p-6"
          style={{ background: "rgba(0,188,212,0.07)", border: "1px solid rgba(0,188,212,0.22)" }}
        >
          <h2 className="text-xl font-bold mb-5" style={{ color: NAVY }}>
            What&rsquo;s Included in Every {county.name} Removal
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: AQUA }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing context */}
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <h2 className="text-xl font-bold" style={{ color: NAVY }}>
            What Does Pool Removal Cost in {county.name}?
          </h2>
          <p>
            Most above ground pool removals in {county.name} range from <strong>$300 to $700</strong>.
            The final price depends on the pool's size and diameter, how much water is in it when
            we arrive, access to the pool from the street or driveway, and the condition of the
            frame and liner. We provide a complete, itemized quote before any work begins —
            no vague estimates, no fees you didn't know about.
          </p>
          <p>
            To get a fast quote, you can call or text us at{" "}
            <a href="tel:2626990100" className="font-semibold" style={{ color: AQUA }}>262-699-0100</a>{" "}
            or submit a request through our online form. It helps to know the pool's approximate
            size, shape, and how full it currently is, but we can often work with just a photo.
          </p>
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-xl font-bold mb-6" style={{ color: NAVY }}>
            Common Questions from {county.name} Homeowners
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="rounded-xl p-5"
                style={{ background: "#f8f9fa", border: "1px solid #e9ecef" }}
              >
                <div className="flex items-start gap-3 mb-2">
                  <HelpCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: AQUA }} />
                  <h3 className="font-semibold text-gray-900">{q}</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed pl-7">{a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA block */}
        <div style={{ background: NAVY }} className="rounded-xl p-6 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Ready to remove your pool in {county.name}?
          </h3>
          <p className="mb-5" style={{ color: "rgba(255,255,255,0.75)" }}>
            Call or text for a free estimate. We schedule fast and do the work right.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:2626990100"
              className="flex items-center gap-2 font-bold px-6 py-3 rounded-lg text-white"
              style={{ background: AQUA }}
            >
              <Phone className="w-4 h-4" />
              Call 262-699-0100
            </a>
            <a
              href={JOBBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold px-6 py-3 rounded-lg border text-white hover:bg-white/10 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              Get a Free Quote Online
            </a>
          </div>
        </div>
      </div>

      <CtaBanner
        heading={`Serving All of ${county.name}`}
        subtext="Above ground pool removal done right. Fast scheduling, full cleanup, metal recycled."
      />
    </Layout>
  );
}

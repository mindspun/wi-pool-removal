import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import Layout from "./Layout";
import Breadcrumb from "./Breadcrumb";
import CtaBanner from "./CtaBanner";
import type { County } from "@/data/serviceAreas";

const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4351309/new";

const NAVY = "#0A1628";
const AQUA = "#00BCD4";

interface CountyPageProps {
  county: County;
}

export default function CountyPage({ county }: CountyPageProps) {
  useEffect(() => {
    document.title = `${county.name} Above Ground Pool Removal | WI Pool Removal`;
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-lg max-w-none mb-10">
          <p className="text-gray-700 text-lg leading-relaxed">{county.description}</p>
          <p className="text-gray-700 leading-relaxed mt-4">
            WI Pool Removal is locally owned and operated out of West Bend, WI. We specialize
            exclusively in above ground pool removal — we do not remove in-ground pools. Every job
            includes a complete drain, full disassembly of the frame and liner, hauling all
            materials off your property, and a final site cleanup. Metal frame components are
            recycled. We quote all jobs upfront with transparent, fair pricing.
          </p>
        </div>

        <h2 className="text-xl font-bold mb-5" style={{ color: NAVY }}>
          Cities We Serve in {county.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {county.cities.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${county.slug}/${city.slug}`}
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg px-5 py-4 hover:shadow-md transition-all"
              style={{}}
            >
              <span className="font-medium text-gray-800 group-hover:transition-colors" style={{}}>
                {city.name}
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-0.5 transition-transform" style={{}} />
            </Link>
          ))}
        </div>

        <div
          className="rounded-xl p-6 mb-6"
          style={{ background: "rgba(0,188,212,0.08)", border: "1px solid rgba(0,188,212,0.25)" }}
        >
          <h2 className="text-lg font-bold mb-2" style={{ color: NAVY }}>
            What's Included in Every {county.name} Removal
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            {[
              "Complete pool drain",
              "Full frame disassembly",
              "Liner and hardware removal",
              "All materials hauled away",
              "Metal frame recycled",
              "Final site cleanup",
              "Upfront, transparent quote",
              "Above ground pools only",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: AQUA }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

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

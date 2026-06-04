import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, CheckCircle2, Phone } from "lucide-react";
import Layout from "./Layout";
import Breadcrumb from "./Breadcrumb";
import CtaBanner from "./CtaBanner";
import type { County, City } from "@/data/serviceAreas";

const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4351309/new";

const NAVY = "#0A1628";
const AQUA = "#00BCD4";

interface CityPageProps {
  county: County;
  city: City;
}

const included = [
  "Complete pool drain (we handle all water removal)",
  "Full disassembly of frame, uprights, and top rails",
  "Liner and liner pad removal",
  "Filter, pump, and hardware removal",
  "All materials hauled off your property",
  "Metal frame components recycled",
  "Final site cleanup — no debris left behind",
  "Transparent upfront quote before we start",
];

export default function CityPage({ county, city }: CityPageProps) {
  useEffect(() => {
    document.title = `Above Ground Pool Removal in ${city.name}, WI | WI Pool Removal`;
  }, [city.name]);

  return (
    <Layout>
      <div style={{ background: NAVY }} className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas" },
              { label: county.name, href: `/service-areas/${county.slug}` },
              { label: city.name },
            ]}
          />
          <div className="flex items-start gap-3">
            <MapPin className="w-7 h-7 mt-1 flex-shrink-0" style={{ color: AQUA }} />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Above Ground Pool Removal in {city.name}, WI
              </h1>
              <p className="text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
                Serving {city.name} and nearby {county.name} communities &mdash; above ground pools only
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">{city.blurb}</p>

            <p className="text-gray-700 leading-relaxed">
              WI Pool Removal is locally owned and based in West Bend — just a short drive from{" "}
              {city.name}. We specialize exclusively in above ground pool removal. In-ground pool
              removal is not a service we offer. Our process covers every step: draining the water,
              fully disassembling the frame and liner, removing the pump, filter, and all hardware,
              hauling everything off your property, and leaving the site clean and ready for your
              next use. The metal frame components — steel or aluminum — are recycled. We quote
              every job upfront with no surprise charges on service day.
            </p>

            <div>
              <h2 className="text-xl font-bold mb-4" style={{ color: NAVY }}>
                What's Included in Every {city.name} Pool Removal
              </h2>
              <ul className="space-y-2.5">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-700">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: AQUA }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-xl p-5"
              style={{ background: "rgba(0,188,212,0.08)", border: "1px solid rgba(0,188,212,0.25)" }}
            >
              <h3 className="font-bold mb-2" style={{ color: NAVY }}>
                Above Ground Pools Only
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                WI Pool Removal specializes exclusively in above ground pool removal. We do not
                remove in-ground pools. If you have an above ground pool — round, oval, or
                rectangular — in {city.name} or the surrounding {county.name} area, we're the
                right company for the job. Not sure if your pool qualifies? Call us at{" "}
                <a href="tel:2626990100" className="font-semibold" style={{ color: AQUA }}>
                  262-699-0100
                </a>{" "}
                and we'll help you figure it out.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>
                Helpful Links for {city.name} Homeowners
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/how-it-works" className="text-sm font-semibold px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50" style={{ color: AQUA, borderColor: AQUA }}>
                  How Pool Removal Works
                </Link>
                <Link href="/pricing" className="text-sm font-semibold px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50" style={{ color: AQUA, borderColor: AQUA }}>
                  Pool Removal Pricing
                </Link>
                <Link href="/contact" className="text-sm font-semibold px-4 py-2 rounded-lg border transition-colors hover:bg-gray-50" style={{ color: AQUA, borderColor: AQUA }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div style={{ background: NAVY }} className="rounded-xl p-5">
              <h3 className="font-bold text-white mb-4">Get a Free Estimate</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                No obligation. We quote upfront — no hidden fees on service day.
              </p>
              <a
                href="tel:2626990100"
                className="flex items-center justify-center gap-2 w-full text-center font-bold py-3 rounded-lg mb-3 text-white"
                style={{ background: AQUA }}
              >
                <Phone className="w-4 h-4" />
                Call or Text Us
              </a>
              <p className="text-center text-sm font-semibold text-white">262-699-0100</p>
              <div className="border-t mt-4 pt-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <a
                  href={JOBBER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-sm font-semibold py-2.5 rounded-lg border transition-colors hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
                >
                  Request a Quote Online
                </a>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide" style={{ color: NAVY }}>
                Also Serving {county.name}
              </h3>
              <ul className="space-y-1.5">
                {county.cities
                  .filter((c) => c.slug !== city.slug)
                  .slice(0, 7)
                  .map((otherCity) => (
                    <li key={otherCity.slug}>
                      <Link
                        href={`/service-areas/${county.slug}/${otherCity.slug}`}
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        {otherCity.name}
                      </Link>
                    </li>
                  ))}
              </ul>
              <Link
                href={`/service-areas/${county.slug}`}
                className="block mt-3 text-sm font-semibold hover:underline"
                style={{ color: AQUA }}
              >
                All of {county.name} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaBanner
        heading={`Pool Removal in ${city.name}, WI`}
        subtext="Call or text anytime for a free estimate. Locally owned, above ground pools only."
      />
    </Layout>
  );
}

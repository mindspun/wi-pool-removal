import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { setPageMeta } from "@/lib/seo";
import { counties } from "@/data/serviceAreas";

const NAVY = "#0A1628";
const AQUA = "#00BCD4";

export default function ServiceAreas() {
  useEffect(() => {
    setPageMeta(
      "Above Ground Pool Removal Service Areas | WI Pool Removal",
      "WI Pool Removal serves Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties in Southeast Wisconsin. Above ground pool removal specialists."
    );
  }, []);

  return (
    <Layout>
      <section style={{ background: NAVY }} className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />
          <div className="flex items-start gap-3">
            <MapPin className="w-8 h-8 mt-1 flex-shrink-0" style={{ color: AQUA }} />
            <div>
              <h1 className="text-4xl font-black text-white mb-4">Service Areas</h1>
              <p className="text-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
                Above ground pool removal across five counties in Southeast Wisconsin.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>
            Covering Southeast Wisconsin
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            WI Pool Removal serves homeowners across five counties in Southeast Wisconsin. Based in West Bend, we can reach most communities in our service area quickly — often scheduling within the same week you call. We specialize exclusively in above ground pool removal. We do not remove in-ground pools.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Select your county below to see all the cities we serve and learn more about pool removal in your area. If you're not sure whether we cover your location, call us at{" "}
            <a href="tel:2626990100" className="font-semibold" style={{ color: AQUA }}>
              262-699-0100
            </a>{" "}
            — we're happy to check.
          </p>
        </div>

        {/* County cards */}
        <div className="space-y-10">
          {counties.map((county) => (
            <div key={county.slug}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold" style={{ color: NAVY }}>{county.name}</h2>
                <Link
                  href={`/service-areas/${county.slug}`}
                  className="flex items-center gap-1 text-sm font-semibold hover:underline"
                  style={{ color: AQUA }}
                >
                  County page <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <p className="text-gray-600 mb-5 leading-relaxed">{county.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {county.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/service-areas/${county.slug}/${city.slug}`}
                    className="flex items-center justify-between bg-white border rounded-lg px-4 py-3 hover:shadow-sm transition-all group"
                    style={{ borderColor: "#dde3ed" }}
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                      {city.name}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-6"
          style={{ background: "rgba(0,188,212,0.07)", border: "1px solid rgba(0,188,212,0.2)" }}
        >
          <h3 className="font-bold mb-2" style={{ color: NAVY }}>Don't See Your City?</h3>
          <p className="text-gray-700 leading-relaxed">
            We may still be able to serve you depending on location. Give us a call at{" "}
            <a href="tel:2626990100" className="font-semibold" style={{ color: AQUA }}>
              262-699-0100
            </a>{" "}
            and we'll let you know right away whether your property is in our range.
          </p>
        </div>
      </div>

      <CtaBanner
        heading="Serving Southeast Wisconsin"
        subtext="Five counties, 50+ cities. Above ground pool removal specialists based in West Bend, WI."
      />
    </Layout>
  );
}

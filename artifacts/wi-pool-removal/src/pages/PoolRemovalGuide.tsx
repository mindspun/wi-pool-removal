import { useEffect } from "react";
import { Link } from "wouter";
import { Phone, CheckCircle2, AlertCircle, Recycle, Droplets, Wrench, Truck } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { setPageMeta } from "@/lib/seo";

const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4351309/new";
const NAVY = "#0A1628";
const AQUA = "#00BCD4";

const steps = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "1. Get a Quote",
    body: "Contact us with your pool's size, shape, how full it is, and any access details. We'll give you a transparent upfront price — no vague estimates, no fees you didn't know about.",
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    title: "2. We Drain the Water",
    body: "On the scheduled day, we start by draining the pool completely. We use submersible pumps to remove all standing water before any disassembly begins. You don't need to pre-drain anything.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "3. Full Disassembly",
    body: "We disassemble the entire pool: top rails, uprights, bottom track, liner, liner pad, pump, filter, and all hardware. Everything comes apart methodically so nothing gets left behind.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "4. Haul-Away",
    body: "All components are loaded and hauled off your property. We leave with everything — no pile of parts left for you to deal with.",
  },
  {
    icon: <Recycle className="w-6 h-6" />,
    title: "5. Metal Recycled",
    body: "Steel and aluminum frame components go directly to a metal recycler. We recycle as much as possible rather than sending usable materials to a landfill.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "6. Final Cleanup",
    body: "Before we leave, we clean up the work area. No debris, no tools left behind. Your yard is ready for whatever comes next.",
  },
];

const doItYourselfWarnings = [
  "Water removal from a 24-foot round pool weighs over 27,000 gallons — draining incorrectly can flood neighboring properties",
  "Above ground pool liners contain mold and bacteria after years of use — proper handling matters",
  "Disassembly without proper tools can result in sharp metal edges and injury",
  "Local disposal fees for pool materials can match or exceed professional removal costs",
  "Most municipalities have rules about where pool water can be discharged",
];

export default function PoolRemovalGuide() {
  useEffect(() => {
    setPageMeta(
      "Wisconsin Above Ground Pool Removal Guide | WI Pool Removal",
      "Everything Wisconsin homeowners need to know about above ground pool removal — what's involved, what it costs, DIY vs. professional, and how to prepare. WI Pool Removal."
    );
  }, []);

  return (
    <Layout>
      <section style={{ background: NAVY }} className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pool Removal Guide" }]} />
          <h1 className="text-4xl font-black text-white mb-4">
            Wisconsin Above Ground Pool Removal Guide
          </h1>
          <p className="text-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            What's involved, what it costs, and how to prepare — for Southeast Wisconsin homeowners.
          </p>
          <p
            className="text-sm font-semibold mt-4 px-3 py-1.5 rounded-full inline-block"
            style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
          >
            Above ground pools only — we do not remove in-ground pools
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>
            Why Wisconsin Homeowners Remove Above Ground Pools
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              Above ground pools are a significant investment — but they don't last forever. After 10 to 20 years, most pool liners, frames, and filtration systems wear out to the point where repairs cost more than replacement. At that point, many homeowners decide removal makes more sense than continuing to maintain an aging pool.
            </p>
            <p>
              Other common reasons for pool removal include reclaiming yard space for a deck, garden, or play area; preparing a home for sale (buyers often see aging pools as a liability, not an asset); reducing water bills and chemical costs; and simply no longer using the pool after kids grow up.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: NAVY }}>
            How Above Ground Pool Removal Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-xl p-5"
                style={{ background: "rgba(0,188,212,0.07)", border: "1px solid rgba(0,188,212,0.2)" }}
              >
                <div className="flex items-center gap-3 mb-3" style={{ color: AQUA }}>
                  {step.icon}
                  <h3 className="font-bold text-base" style={{ color: NAVY }}>{step.title}</h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>
            What Does Above Ground Pool Removal Cost in Wisconsin?
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              In Southeast Wisconsin, most above ground pool removals cost between <strong>$300 and $700</strong>. The final price depends on:
            </p>
            <ul className="space-y-2 ml-4">
              {[
                "Pool size — diameter and depth (larger pools take more time and hauling capacity)",
                "Water volume — how full the pool is when we arrive",
                "Access — gate width, distance from the truck, slope of the yard",
                "Condition — heavily corroded frames or damaged liners add complexity",
                "Additional equipment — pumps, filters, and related hardware included at no extra charge",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: AQUA }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              We always provide a transparent upfront quote before any work begins. There are no hidden fees or surprise charges on service day.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>
            DIY Pool Removal vs. Hiring a Professional
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Some homeowners attempt to remove their own above ground pool. While it's technically possible, there are real risks and costs to consider:
          </p>
          <div className="rounded-xl p-5 mb-6" style={{ background: "#fff8f0", border: "1px solid #fed7aa" }}>
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              <h3 className="font-bold text-orange-800">DIY Considerations</h3>
            </div>
            <ul className="space-y-2.5">
              {doItYourselfWarnings.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-sm text-orange-900">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-1.5" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Professional removal handles all of this for you — water, disassembly, haul-away, and recycling — in a single scheduled visit. For most homeowners in Southeast Wisconsin, the cost of professional removal is well worth the time saved and risks avoided.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>
            Permits for Above Ground Pool Removal in Wisconsin
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In most Wisconsin cities and counties, no permit is required to remove an above ground pool. Requirements vary by municipality — some areas require a permit if any grading or utility work is involved. We recommend checking with your local building department if you have questions. We're happy to advise based on the specific area where we're working.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>
            How to Prepare for Pool Removal Day
          </h2>
          <ul className="space-y-3">
            {[
              "Ensure gate or side yard access is at least 36 inches wide for equipment and personnel",
              "Remove any fencing, plants, or decorations immediately around the pool perimeter",
              "Disconnect the pump and filter from any electrical circuits before we arrive",
              "Let your neighbors know if our truck will be parked near the property line",
              "Clear a path from the pool to the street or driveway for hauling materials",
            ].map((tip) => (
              <li key={tip} className="flex items-start gap-3 text-gray-700">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: AQUA }} />
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <div style={{ background: NAVY }} className="rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">
            Ready to Get a Quote?
          </h2>
          <p className="mb-5" style={{ color: "rgba(255,255,255,0.75)" }}>
            Serving Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:2626990100"
              className="flex items-center gap-2 font-bold px-6 py-3 rounded-lg text-white"
              style={{ background: AQUA }}
            >
              <Phone className="w-4 h-4" />
              Call or Text 262-699-0100
            </a>
            <a
              href={JOBBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold px-6 py-3 rounded-lg border text-white hover:bg-white/10 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              Request a Quote Online
            </a>
          </div>
          <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            Above ground pools only — we do not remove in-ground pools
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link href="/pricing" className="text-sm font-semibold hover:underline" style={{ color: AQUA }}>
            View Pricing →
          </Link>
          <Link href="/how-it-works" className="text-sm font-semibold hover:underline" style={{ color: AQUA }}>
            Our Process →
          </Link>
          <Link href="/faq" className="text-sm font-semibold hover:underline" style={{ color: AQUA }}>
            FAQs →
          </Link>
          <Link href="/service-areas" className="text-sm font-semibold hover:underline" style={{ color: AQUA }}>
            Service Areas →
          </Link>
        </div>
      </div>

      <CtaBanner
        heading="Wisconsin's Above Ground Pool Removal Specialists"
        subtext="Drain, disassemble, haul away, and recycle — all in one visit. Call 262-699-0100."
      />
    </Layout>
  );
}

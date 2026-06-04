import { useEffect } from "react";
import { Phone } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { setPageMeta } from "@/lib/seo";

const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4351309/new";

const NAVY = "#0A1628";
const AQUA = "#00BCD4";

export default function About() {
  useEffect(() => {
    setPageMeta(
      "About WI Pool Removal — Above Ground Pool Specialists in West Bend, WI",
      "Locally owned above ground pool removal specialists based in West Bend, WI. We drain, disassemble, haul away, and recycle metal frames. Above ground pools only."
    );
  }, []);

  return (
    <Layout>
      {/* Page header */}
      <section style={{ background: NAVY }} className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 className="text-4xl font-black text-white mb-4">About WI Pool Removal</h1>
          <p className="text-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Locally owned above ground pool removal specialists based in West Bend, Wisconsin.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        {/* Our Story */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            WI Pool Removal is a locally owned company based in West Bend, Wisconsin. We focus exclusively on one thing: above ground pool removal. We don't dabble in landscaping, general junk removal, or in-ground pool work. We remove above ground pools — round, oval, and rectangular — for homeowners across five counties in Southeast Wisconsin.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            That focus matters. When you hire a company that specializes in what you need, you get a crew that shows up prepared, with the right equipment and a clear process. We've removed pools on every type of property — small suburban backyards, larger rural lots, properties with tight gate access, pools that are still functional, and pools that have partially collapsed. We've seen the full range, and we know how to handle it.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are based in West Bend and serve Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties. Most of the communities we serve are within an easy drive, which means we can often schedule jobs quickly — sometimes within the same week you call.
          </p>
        </div>

        {/* Our Process */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>How We Approach Every Job</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Every above ground pool removal we do follows the same careful sequence. We start by draining all the water from the pool — we handle this ourselves, so you don't need to worry about it in advance. Depending on the pool size, draining can take a few hours. We plan for it and work around it.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once the water is out, we disassemble the pool structure completely. This includes the uprights, top rails, wall panel, liner, liner pad, and any attached hardware. The pump, filter, skimmer, and associated plumbing are removed as well. Everything comes off the property — we don't leave partial pieces, liner scraps, or hardware behind.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The metal frame components — whether steel or aluminum — are separated and taken to a recycling facility. We believe in handling materials responsibly. The liner, liner pad, and non-recyclable components are disposed of properly.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We finish with a site cleanup. When we leave, the area where the pool stood is clear. You can use it for whatever comes next — a patio, garden, play area, or just open yard space.
          </p>
        </div>

        {/* Specialist positioning */}
        <div
          className="rounded-xl p-7"
          style={{ background: "rgba(0,188,212,0.07)", border: "1px solid rgba(0,188,212,0.2)" }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>
            Why We Only Do Above Ground Pools
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We get asked occasionally whether we remove in-ground pools. We don't, and that's intentional. In-ground pool removal is a completely different project — it involves excavation, concrete breaking, fill dirt, compaction, and often permits and inspections. The equipment, crew skills, and process are fundamentally different from above ground pool removal.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            By staying focused on above ground pool removal, we've built genuine expertise in what we do. Our crew knows every type of above ground pool — round steel-frame pools, oval pools with buttress legs, aluminum-frame models, and various liner systems. We know where the components connect, how to disassemble efficiently, and how to handle situations where a pool has deteriorated or partially failed.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you have an above ground pool in Southeast Wisconsin and you want it gone, we're the right company for the job.
          </p>
        </div>

        {/* Metal recycling commitment */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>Our Metal Recycling Commitment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The steel and aluminum frame components from above ground pools are recyclable material. Rather than sending them to a landfill, we separate and deliver the metal to a recycling facility. It's a small thing, but it's the right thing — and our customers appreciate knowing that what we haul isn't just going straight to the dump.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Liner material and other non-recyclable components are disposed of responsibly through proper channels. We don't cut corners on disposal.
          </p>
        </div>

        {/* CTA section */}
        <div style={{ background: NAVY }} className="rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Talk About Your Pool?
          </h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
            Call or text us at 262-699-0100 for a free, no-obligation estimate. We'll ask a few quick questions about your pool and give you a clear price.
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

      <CtaBanner />
    </Layout>
  );
}

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

const steps = [
  {
    number: "01",
    title: "Get a Free Quote",
    content: `Call or text us at 262-699-0100 or submit a request through our online form. We'll ask you a few quick questions: What's the approximate size of your pool? Round, oval, or rectangular? Is there attached decking? Roughly how old is the pool and is it still standing? What's the access situation — is there a gate, and how wide is it?\n\nFrom there, we give you a price. Most quotes are done over the phone or text without needing to send someone out for a site visit. We'll confirm the price in writing so you have it on record. No obligation — if the price doesn't work for you, no problem.`,
  },
  {
    number: "02",
    title: "Schedule the Removal",
    content: `Once you accept the quote, we find a date that works for your schedule. We typically have availability within the same week for most Southeast Wisconsin locations. We'll confirm the appointment and give you a time window for the day of service.\n\nYou don't need to do anything to prepare the pool in advance. Don't drain it — we handle that. Don't disassemble any parts — that's our job. If there's anything unusual about the yard access we should know about, just let us know ahead of time so we can plan accordingly.`,
  },
  {
    number: "03",
    title: "We Drain the Pool",
    content: `On service day, our crew arrives and starts with the drain. We pump the water out of the pool — this is a step that takes time depending on how much water is in it. A 24-foot round pool holds thousands of gallons, so we plan for this step and work around it. We use submersible pumps and direct the water away from the pool area.\n\nWhile the pool is draining, we're also assessing the full job — checking the structure, identifying how components connect, planning the disassembly sequence, and staging our equipment. By the time the pool is fully drained, we're ready to move efficiently into disassembly.`,
  },
  {
    number: "04",
    title: "Full Disassembly",
    content: `With the water drained, we disassemble the entire pool structure. This includes the top rails, uprights, wall panel, and any support hardware. For oval pools with external buttress legs, we work through the buttress system as part of the process. The liner is carefully removed — we don't slash and drag it, we take it down cleanly. The liner pad beneath it is removed as well.\n\nWe also remove the pump, filter, skimmer, and all associated plumbing and hardware. Nothing that was part of the pool setup stays behind. If there are accessories — ladders, solar covers, cleaning equipment — we'll include those in the removal based on what was covered in your quote. We work methodically through every component until the structure is fully down.`,
  },
  {
    number: "05",
    title: "Haul Everything Away",
    content: `Once the pool is fully disassembled, we load everything onto our truck. The steel or aluminum frame components are kept separate from the liner and other materials — they're going to a recycling facility, not a landfill. The liner, liner pad, and non-recyclable hardware are disposed of properly.\n\nWe don't leave anything behind. Not a top rail, not a bolt, not a piece of liner. If there are items on-site that were part of the pool setup that we haven't explicitly discussed, we'll ask you whether you want them included before loading them up.`,
  },
  {
    number: "06",
    title: "Site Cleanup and Done",
    content: `The final step is site cleanup. After the pool and all materials are loaded, we do a walkthrough of the area to make sure it's clean and clear. Any small debris, hardware, or material left from the disassembly process is picked up. We rake and tidy the area so the ground is ready for whatever comes next — whether that's landscaping, a patio project, or just open yard space.\n\nWhen we drive away, the job is done. You don't have any follow-up tasks, no material to dispose of, no cleanup to finish. The space is yours.`,
  },
];

const faqs = [
  {
    q: "Will the pool removal damage my yard?",
    a: "Some ground disturbance is normal — the area where the pool sat will show the impression of the pool and may have some softer soil from the water. We take care around the surrounding yard, but getting a large pool structure out without any impact on the ground is not realistic. Most homeowners plan to rake, re-seed, or do a simple landscaping project in the area after the pool is removed. We clean up all debris from the removal itself.",
  },
  {
    q: "What happens to the liner?",
    a: "Above ground pool liners are vinyl and not currently recyclable in most markets. We dispose of the liner through proper waste disposal channels. The metal components of the frame — steel or aluminum uprights, top rails, and frame hardware — are separated and taken to a recycling facility.",
  },
  {
    q: "How long does a pool removal take?",
    a: "Most above ground pool removals take a few hours to a full day, depending on pool size, water volume, and any additional scope like decking. A smaller 12–15 foot pool on a straightforward property might be done in 2–3 hours. A larger 30-foot oval pool with attached decking on a property with limited access is a full-day job. We'll give you a realistic time estimate when we quote the job.",
  },
  {
    q: "Do I need to be home during the removal?",
    a: "It's helpful but not always required. You should be available at the start so we can confirm access and answer any last-minute questions. After that, many customers go about their day and return to a finished yard. If you need to be away for the full day, just make sure we have access to the pool area and a way to reach you if something comes up.",
  },
  {
    q: "Do you remove in-ground pools?",
    a: "No. WI Pool Removal specializes exclusively in above ground pool removal. In-ground pool removal involves excavation, concrete breaking, fill material, and a completely different process and equipment set. We don't do that work. If you have an above ground pool, we're your team. If you have an in-ground pool, you'll need a different contractor.",
  },
  {
    q: "Can you remove a pool that's already partially collapsed or failing?",
    a: "Yes. We handle pools in all conditions — functional pools, pools with failed liners, pools with rusted components, and pools that have partially collapsed. Deteriorated pools can take longer to work through and may be quoted slightly higher to account for the additional complexity, but we can remove them. Tell us about the condition when you call and we'll factor it into your quote.",
  },
];

export default function HowItWorks() {
  useEffect(() => {
    setPageMeta(
      "How Above Ground Pool Removal Works | WI Pool Removal",
      "Learn how our 6-step above ground pool removal process works — from free quote to final cleanup. Drain, disassemble, haul away, recycle metal. Southeast Wisconsin."
    );
  }, []);

  return (
    <Layout>
      <section style={{ background: NAVY }} className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "How It Works" }]} />
          <h1 className="text-4xl font-black text-white mb-4">How Above Ground Pool Removal Works</h1>
          <p className="text-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Six clear steps from your first call to a clean, open yard.
          </p>
          <p className="text-sm font-semibold mt-4 px-3 py-1.5 rounded-full inline-block" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
            Above ground pools only — we do not remove in-ground pools
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Steps */}
        <div className="space-y-10 mb-16">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-sm"
                  style={{ background: AQUA }}
                >
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-3" style={{ background: "rgba(0,188,212,0.3)" }} />
                )}
              </div>
              <div className="pb-8">
                <h2 className="text-xl font-bold mb-3" style={{ color: NAVY }}>{step.title}</h2>
                {step.content.split("\n\n").map((para, j) => (
                  <p key={j} className="text-gray-700 leading-relaxed mb-3">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-2xl font-bold mb-8" style={{ color: NAVY }}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-xl p-6 border"
                style={{ borderColor: "#dde3ed", background: "#fafbfc" }}
              >
                <h3 className="font-bold mb-3" style={{ color: NAVY }}>{faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: NAVY }} className="rounded-xl p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to Get Started?</h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
            Call or text us to get a free quote. We'll walk you through the process for your specific pool and give you a clear price.
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
        heading="Questions About the Process?"
        subtext="Call us at 262-699-0100 — we're happy to walk you through exactly what to expect for your specific pool."
      />
    </Layout>
  );
}

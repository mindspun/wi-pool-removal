import { useEffect, useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import CtaBanner from "@/components/CtaBanner";
import Breadcrumb from "@/components/Breadcrumb";
import { setPageMeta } from "@/lib/seo";

const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4351309/new";
const NAVY = "#0A1628";
const AQUA = "#00BCD4";

const faqs = [
  {
    q: "Do you remove in-ground pools?",
    a: "No. WI Pool Removal specializes exclusively in above ground pool removal. We do not remove in-ground pools of any type. If you have an above ground pool — round, oval, or rectangular — we're the right company for the job.",
  },
  {
    q: "How much does above ground pool removal cost in Wisconsin?",
    a: "Most above ground pool removals in Southeast Wisconsin range from $300 to $700 depending on pool size, the amount of water remaining, site access, and the condition of the liner and hardware. We provide a transparent upfront quote before any work begins — no hidden fees on service day.",
  },
  {
    q: "Do I need to drain the pool before you arrive?",
    a: "No — draining is included in our service. We handle all water removal as part of the job. If you've already partially drained the pool, great; if not, we'll take care of it from the start.",
  },
  {
    q: "How long does above ground pool removal take?",
    a: "Most standard above ground pool removals take 2 to 4 hours. Larger pools, pools with unusually large water volumes, or pools with difficult access may take longer. We'll give you a realistic time estimate when we quote the job.",
  },
  {
    q: "What happens to the pool materials after removal?",
    a: "Metal frame components — steel and aluminum uprights, top rails, and braces — are taken to a metal recycler. The liner, liner pad, and other non-metal components are disposed of properly. Our goal is to recycle as much as possible.",
  },
  {
    q: "Do you haul everything away?",
    a: "Yes. Every job includes full haul-away of all pool components: frame, liner, pump, filter, hardware, and any associated equipment. We leave the site clean with no debris remaining on your property.",
  },
  {
    q: "Do you need a permit to remove an above ground pool in Wisconsin?",
    a: "In most Wisconsin municipalities, no permit is required to remove an above ground pool. However, requirements vary by city and county. We recommend checking with your local municipality if you're uncertain — we're happy to advise based on the area we're servicing.",
  },
  {
    q: "How quickly can you schedule the removal?",
    a: "We typically schedule jobs within 1 to 2 weeks of a confirmed quote, depending on our current calendar. Call or text us and we'll give you a realistic timeframe for your area.",
  },
  {
    q: "What counties do you serve?",
    a: "We serve Washington, Ozaukee, Fond du Lac, Sheboygan, and Waukesha counties in Southeast Wisconsin. If you're in a neighboring area and unsure whether we cover your location, give us a call.",
  },
  {
    q: "What information do I need to get a quote?",
    a: "To quote your job accurately, it helps to know: the pool's approximate diameter or dimensions, whether it's round, oval, or rectangular, roughly how full of water it currently is, and any access challenges (narrow gates, steep yards, etc.). A photo is always helpful. You can submit a quote request online or call us directly.",
  },
  {
    q: "Is WI Pool Removal locally owned?",
    a: "Yes. We're locally owned and based in West Bend, WI. We serve the surrounding Southeast Wisconsin area and take pride in doing the job right for our neighbors.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-semibold text-gray-900">{q}</span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          style={{ color: AQUA }}
        />
      </button>
      {open && (
        <div className="pb-5 pr-8">
          <p className="text-gray-700 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  useEffect(() => {
    setPageMeta(
      "Above Ground Pool Removal FAQs | WI Pool Removal",
      "Answers to common questions about above ground pool removal in Southeast Wisconsin — cost, scheduling, what's included, permits, and more. Call 262-699-0100."
    );
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section style={{ background: NAVY }} className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <h1 className="text-4xl font-black text-white mb-4">
            Above Ground Pool Removal FAQs
          </h1>
          <p className="text-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Common questions about our pool removal process, pricing, and service area.
          </p>
          <p
            className="text-sm font-semibold mt-4 px-3 py-1.5 rounded-full inline-block"
            style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}
          >
            Above ground pools only — we do not remove in-ground pools
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 px-6 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>

        <div
          className="mt-12 rounded-xl p-6 text-center"
          style={{ background: NAVY }}
        >
          <h2 className="text-xl font-bold text-white mb-2">
            Still have questions?
          </h2>
          <p className="mb-5" style={{ color: "rgba(255,255,255,0.75)" }}>
            Call or text us — we're happy to answer and give you a free, no-obligation quote.
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
        </div>
      </div>

      <CtaBanner
        heading="Ready to Remove Your Pool?"
        subtext="Call or text for a free estimate. Above ground pools only. Southeast Wisconsin."
      />
    </Layout>
  );
}

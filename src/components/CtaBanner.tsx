const JOBBER_URL =
  "https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4351309/new";

interface CtaBannerProps {
  heading?: string;
  subtext?: string;
}

export default function CtaBanner({
  heading = "Ready to remove your above ground pool?",
  subtext = "Call or text us for a free estimate. Fast scheduling, full cleanup, metal recycled.",
}: CtaBannerProps) {
  return (
    <section style={{ background: "#0A1628" }} className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-white">{heading}</h2>
        <p className="mb-8 text-base" style={{ color: "rgba(255,255,255,0.75)" }}>
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:2626990100"
            className="flex items-center gap-2 font-bold px-7 py-3.5 rounded-lg transition-colors text-base shadow-lg"
            style={{ background: "#00BCD4", color: "#fff" }}
          >
            Call or Text 262-699-0100
          </a>
          <a
            href={JOBBER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-semibold px-7 py-3.5 rounded-lg transition-colors text-base border-2"
            style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}
          >
            Get a Free Quote
          </a>
        </div>
        <p className="mt-5 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
          Above ground pool removal only &bull; Southeast Wisconsin
        </p>
      </div>
    </section>
  );
}

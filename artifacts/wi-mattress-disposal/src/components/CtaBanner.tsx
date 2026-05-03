import { Link } from "wouter";
import { Phone, CalendarCheck } from "lucide-react";

interface CtaBannerProps {
  heading?: string;
  subtext?: string;
}

export default function CtaBanner({
  heading = "Ready to schedule a pickup?",
  subtext = "Call or text for a quick quote. Pricing based on location and quantity.",
}: CtaBannerProps) {
  return (
    <section className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">{heading}</h2>
        <p className="text-primary-foreground/80 mb-8 text-base max-w-xl mx-auto">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:2626990100"
            className="flex items-center gap-2 bg-white text-primary font-bold px-6 py-3.5 rounded-xl hover:bg-white/90 transition-colors shadow-md"
          >
            <Phone className="w-4 h-4" />
            Call or Text 262-699-0100
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-3.5 rounded-xl hover:border-white/70 hover:bg-white/10 transition-colors"
          >
            <CalendarCheck className="w-4 h-4" />
            Request a Pickup
          </Link>
        </div>
      </div>
    </section>
  );
}

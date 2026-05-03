import { useEffect } from "react";
import { Phone, ExternalLink, MapPin, Clock, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact WI Estate Cleanout | Get a Free Estimate";
  }, []);

  return (
    <Layout>
      <div className="bg-muted/40 border-b border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Ready to schedule a cleanout or just have a quick question? Reach out — we're easy to get in touch with.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white border border-border rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-6">Request a Free Estimate</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Use our online request form to describe your job and schedule a time that works for you. We'll follow up quickly to confirm details and provide your free estimate.
              </p>
              <a
                href="https://clienthub.getjobber.com/client_hubs/placeholder"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="jobber-request-link"
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg hover:bg-primary/90 transition-colors text-base"
              >
                Open Online Request Form
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-muted-foreground mt-3">
                Powered by Jobber — our scheduling and service management platform
              </p>
            </div>

            <div className="bg-white border border-border rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-6">Or Give Us a Call</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Prefer to talk things through? Call or text us directly. We're happy to answer questions, talk through your situation, and give you a ballpark estimate on the spot.
              </p>
              <a
                href="tel:2626990100"
                data-testid="contact-call-button"
                className="flex items-center justify-center gap-2 w-full bg-foreground text-white font-semibold py-3.5 rounded-lg hover:bg-foreground/90 transition-colors text-base"
              >
                <Phone className="w-5 h-5" />
                262-699-0100
              </a>
              <div className="flex items-center justify-center gap-1.5 mt-3">
                <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Call or text — both work</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-foreground mb-5">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide font-medium">Phone</p>
                    <a
                      href="tel:2626990100"
                      data-testid="contact-info-phone"
                      className="text-foreground font-semibold hover:text-primary transition-colors"
                    >
                      262-699-0100
                    </a>
                    <p className="text-xs text-muted-foreground">Call or text</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide font-medium">Based In</p>
                    <p className="text-foreground font-semibold">West Bend, WI</p>
                    <p className="text-xs text-muted-foreground">Serving 5 Wisconsin counties</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide font-medium">Availability</p>
                    <p className="text-foreground font-semibold">Monday – Saturday</p>
                    <p className="text-xs text-muted-foreground">Call for scheduling</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/40 border border-accent rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-3">Service Area</h3>
              <ul className="space-y-1.5">
                {[
                  "Washington County",
                  "Ozaukee County",
                  "Fond du Lac County",
                  "Sheboygan County",
                  "Waukesha County",
                ].map((county) => (
                  <li key={county} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {county}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-3 text-sm">What to Expect</h3>
              <ul className="space-y-2.5">
                {[
                  "Free estimate — no obligation",
                  "Pricing confirmed before work begins",
                  "We price by load, not by hour",
                  "Licensed, insured, local crew",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

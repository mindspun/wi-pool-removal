import { useEffect } from "react";
import { Phone, ExternalLink, MapPin, Clock, MessageSquare } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact WI Furniture Disposal | Schedule a Pickup";
  }, []);

  return (
    <Layout>
      <div className="bg-muted/50 border-b border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">Ready to schedule a pickup or want a quick quote? Reach out — we respond fast.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white border border-border rounded p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Schedule a Pickup Online</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">Use our online request form to describe your job and pick a time. We'll follow up quickly to confirm and discuss pricing.</p>
              <a
                href="https://clienthub.getjobber.com/hubs/70ad09c0-29e5-4b3f-b648-6642ff3dff80/public/requests/4351309/new"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-bold py-3.5 rounded hover:bg-primary/90 transition-colors text-base"
              >
                Open Online Request Form
                <ExternalLink className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-muted-foreground mt-3">Powered by Jobber — our scheduling platform</p>
            </div>

            <div className="bg-white border border-border rounded p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-4">Call or Text Us Directly</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">Prefer to talk? Call or text with your location and what needs to go — we'll give you a price right away and get it on the schedule.</p>
              <a
                href="tel:2626990100"
                className="flex items-center justify-center gap-2 w-full bg-foreground text-white font-bold py-3.5 rounded hover:bg-foreground/90 transition-colors text-base"
              >
                <Phone className="w-5 h-5" />262-699-0100
              </a>
              <div className="flex items-center justify-center gap-1.5 mt-3">
                <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">Call or text — both work</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white border border-border rounded p-6 shadow-sm">
              <h3 className="font-bold text-foreground mb-5">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide font-medium">Phone</p>
                    <a href="tel:2626990100" className="text-foreground font-semibold hover:text-primary transition-colors">262-699-0100</a>
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

            <div className="bg-accent/40 border border-accent rounded p-6">
              <h3 className="font-bold text-foreground mb-3">Service Counties</h3>
              <ul className="space-y-1.5">
                {["Washington County", "Ozaukee County", "Fond du Lac County", "Sheboygan County", "Waukesha County"].map((county) => (
                  <li key={county} className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />{county}
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

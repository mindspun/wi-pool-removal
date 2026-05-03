import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumb from "@/components/Breadcrumb";
import CtaBanner from "@/components/CtaBanner";
import { counties } from "@/data/serviceAreas";

export default function ServiceAreas() {
  useEffect(() => {
    document.title = "Service Areas | WI Appliance Disposal - Wisconsin Appliance Removal";
  }, []);

  return (
    <Layout>
      <div className="bg-muted/40 border-b border-border py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Service Areas" }]} />
          <h1 className="text-4xl font-extrabold text-foreground mb-4">Service Areas</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            WI Appliance Disposal serves five Wisconsin counties from West Bend. Click a county to see the cities we cover and get more details.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <div className="space-y-8">
          {counties.map((county) => (
            <div key={county.slug} data-testid={`county-section-${county.slug}`} className="bg-white border border-border rounded-xl overflow-hidden shadow-sm">
              <div className="flex items-center justify-between px-6 py-5 border-b border-border bg-muted/20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-foreground">{county.name}</h2>
                    <p className="text-xs text-muted-foreground">Wisconsin</p>
                  </div>
                </div>
                <Link
                  href={`/service-areas/${county.slug}`}
                  data-testid={`county-page-link-${county.slug}`}
                  className="flex items-center gap-1 text-sm text-primary font-semibold hover:underline"
                >
                  View county page <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="px-6 py-4">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{county.description}</p>
                <div className="flex flex-wrap gap-2">
                  {county.cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${county.slug}/${city.slug}`}
                      data-testid={`city-tag-${city.slug}`}
                      className="inline-flex items-center gap-1 bg-muted/50 hover:bg-accent hover:text-accent-foreground text-sm text-foreground/80 px-3 py-1.5 rounded-full border border-border hover:border-primary/30 transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-muted/40 border border-border rounded-xl p-6 text-center">
          <p className="text-foreground font-semibold mb-2">Don't see your city?</p>
          <p className="text-sm text-muted-foreground mb-4">We serve many communities throughout these counties. Call us and ask — chances are we cover your area.</p>
          <a href="tel:2626990100" data-testid="areas-call-button" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-sm">
            262-699-0100
          </a>
        </div>
      </div>

      <CtaBanner heading="Serving 5 Wisconsin Counties" subtext="Licensed, insured, and locally owned. Call or text for a fast quote." />
    </Layout>
  );
}

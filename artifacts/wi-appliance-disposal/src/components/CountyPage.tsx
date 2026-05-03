import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "./Layout";
import Breadcrumb from "./Breadcrumb";
import CtaBanner from "./CtaBanner";
import type { County } from "@/data/serviceAreas";

export default function CountyPage({ county }: { county: County }) {
  useEffect(() => {
    document.title = `${county.name} Appliance Disposal & Pickup | WI Appliance Disposal`;
  }, [county.name]);

  return (
    <Layout>
      <div className="bg-muted/40 border-b border-border py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas" },
              { label: county.name },
            ]}
          />
          <div className="flex items-start gap-3">
            <MapPin className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                {county.name} Appliance Disposal &amp; Pickup
              </h1>
              <p className="text-muted-foreground text-lg">Serving all of {county.name}, Wisconsin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-foreground/80 text-lg leading-relaxed mb-4">{county.description}</p>
        <p className="text-foreground/80 leading-relaxed mb-10">
          WI Appliance Disposal is locally owned and operated out of West Bend, WI. We are licensed for solid waste removal and fully insured. Pricing is based on your location and the items being removed — contact us for a quick quote before we schedule your pickup.
        </p>

        <h2 className="text-xl font-bold text-foreground mb-5">Cities We Serve in {county.name}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {county.cities.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${county.slug}/${city.slug}`}
              data-testid={`city-link-${city.slug}`}
              className="group flex items-center justify-between bg-white border border-border rounded-lg px-5 py-4 hover:border-primary hover:shadow-sm transition-all"
            >
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">{city.name}</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>

        <div className="bg-accent/50 border border-accent rounded-xl p-6">
          <h2 className="text-lg font-bold text-foreground mb-4">Appliances We Remove in {county.name}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Refrigerators & freezers",
              "Washers & dryers",
              "Stoves & ovens",
              "Dishwashers",
              "HVAC units & air conditioners",
              "Water heaters",
              "Commercial kitchen equipment",
              "Any other household appliance",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CtaBanner
        heading={`Appliance Pickup in ${county.name}`}
        subtext="Call or text for a quick quote. Pricing based on location and items."
      />
    </Layout>
  );
}

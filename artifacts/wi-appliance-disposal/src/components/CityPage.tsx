import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, CheckCircle2 } from "lucide-react";
import Layout from "./Layout";
import Breadcrumb from "./Breadcrumb";
import CtaBanner from "./CtaBanner";
import type { County, City } from "@/data/serviceAreas";

const applianceList = [
  "Refrigerators & freezers",
  "Washers & dryers",
  "Stoves, ranges & ovens",
  "Dishwashers",
  "Microwaves",
  "HVAC units & window air conditioners",
  "Water heaters",
  "Commercial kitchen equipment",
  "Any other household appliance",
];

export default function CityPage({ county, city }: { county: County; city: City }) {
  useEffect(() => {
    document.title = `${city.name} Appliance Disposal & Pickup | WI Appliance Disposal`;
  }, [city.name]);

  return (
    <Layout>
      <div className="bg-muted/40 border-b border-border py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas" },
              { label: county.name, href: `/service-areas/${county.slug}` },
              { label: city.name },
            ]}
          />
          <div className="flex items-start gap-3">
            <MapPin className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Appliance Disposal &amp; Pickup in {city.name}, WI
              </h1>
              <p className="text-muted-foreground text-lg">
                Serving {city.name} and surrounding {county.name} communities
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">{city.blurb}</p>
            <p className="text-foreground/80 leading-relaxed">
              WI Appliance Disposal is locally owned and operated out of nearby West Bend. We are licensed for solid waste removal in Wisconsin and fully insured. Pricing is based on your location and the items being removed — call or text for a quick quote, and we'll schedule around your timeline.
            </p>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Appliances We Remove in {city.name}</h2>
              <ul className="space-y-2.5">
                {applianceList.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white border border-border rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-foreground mb-4">Get a Quick Quote</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Pricing based on location and items. Call or text us and we'll give you a number fast.
              </p>
              <a
                href="tel:2626990100"
                data-testid="city-cta-call"
                className="block w-full text-center bg-primary text-primary-foreground font-semibold py-2.5 rounded-lg hover:bg-primary/90 transition-colors mb-3"
              >
                Call or Text Us
              </a>
              <p className="text-center text-sm font-medium text-foreground">262-699-0100</p>
            </div>

            <div className="bg-muted/50 border border-border rounded-xl p-5">
              <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                Also Serving {county.name}
              </h3>
              <ul className="space-y-1.5">
                {county.cities.filter((c) => c.slug !== city.slug).map((otherCity) => (
                  <li key={otherCity.slug}>
                    <Link
                      href={`/service-areas/${county.slug}/${otherCity.slug}`}
                      data-testid={`nearby-city-${otherCity.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {otherCity.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/service-areas/${county.slug}`}
                data-testid="back-to-county"
                className="block mt-3 text-sm text-primary font-medium hover:underline"
              >
                All of {county.name} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaBanner
        heading={`Serving ${city.name}, WI`}
        subtext="Licensed, insured, locally owned. Call or text for a quick quote."
      />
    </Layout>
  );
}

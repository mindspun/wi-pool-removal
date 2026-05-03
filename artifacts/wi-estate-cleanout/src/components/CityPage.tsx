import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, CheckCircle2 } from "lucide-react";
import Layout from "./Layout";
import Breadcrumb from "./Breadcrumb";
import CtaBanner from "./CtaBanner";
import type { County, City } from "@/data/serviceAreas";

interface CityPageProps {
  county: County;
  city: City;
}

const services = [
  "Full estate cleanouts",
  "Junk and furniture removal",
  "Garage and shed clearing",
  "Basement and attic cleanouts",
  "Hoarding situation cleanup",
  "Appliance removal and hauling",
  "Donation coordination with local charities",
  "Responsible recycling and disposal",
];

export default function CityPage({ county, city }: CityPageProps) {
  useEffect(() => {
    document.title = `${city.name} Estate Cleanout & Junk Removal | WI Estate Cleanout`;
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
                Estate Cleanout &amp; Junk Removal in {city.name}, WI
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
              WI Estate Cleanout is locally owned and operated out of nearby West Bend. We are
              licensed for solid waste removal in Wisconsin and fully insured. Every job we take in{" "}
              {city.name} follows our donation-first approach — we contact local charities and
              donation centers before anything goes to a landfill. We price by load size with no
              hidden fees, and we always give you a free estimate before we start.
            </p>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">
                Our Services in {city.name}
              </h2>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service} className="flex items-center gap-2.5 text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white border border-border rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-foreground mb-4">Get a Free Estimate</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                No obligation. We price by load size — you only pay for what we haul.
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
                {county.cities
                  .filter((c) => c.slug !== city.slug)
                  .map((otherCity) => (
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
        subtext="Call or text anytime for a free estimate. Locally owned, fully insured, donation-first."
      />
    </Layout>
  );
}

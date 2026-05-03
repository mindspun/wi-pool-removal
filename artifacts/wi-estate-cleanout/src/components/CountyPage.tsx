import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "./Layout";
import Breadcrumb from "./Breadcrumb";
import CtaBanner from "./CtaBanner";
import type { County } from "@/data/serviceAreas";

interface CountyPageProps {
  county: County;
}

export default function CountyPage({ county }: CountyPageProps) {
  useEffect(() => {
    document.title = `${county.name} Estate Cleanout & Junk Removal | WI Estate Cleanout`;
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
                {county.name} Estate Cleanout &amp; Junk Removal
              </h1>
              <p className="text-muted-foreground text-lg">
                Serving all of {county.name}, Wisconsin
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="prose prose-lg max-w-none mb-10">
          <p className="text-foreground/80 text-lg leading-relaxed">{county.description}</p>
          <p className="text-foreground/80 leading-relaxed">
            WI Estate Cleanout is locally owned and operated out of West Bend, WI. We are licensed
            for solid waste removal and fully insured. Our approach is always donation first — we
            work with local charities and recyclers to ensure as little as possible ends up in a
            landfill. We price by load size, so you only pay for what we take, and we always provide
            a free estimate before we begin.
          </p>
        </div>

        <h2 className="text-xl font-bold text-foreground mb-5">
          Cities We Serve in {county.name}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {county.cities.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${county.slug}/${city.slug}`}
              data-testid={`city-link-${city.slug}`}
              className="group flex items-center justify-between bg-white border border-border rounded-lg px-5 py-4 hover:border-primary hover:shadow-sm transition-all"
            >
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {city.name}
              </span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>

        <div className="bg-accent/50 border border-accent rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-foreground mb-2">Our Services in {county.name}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
            {[
              "Full estate cleanouts",
              "Junk and furniture removal",
              "Garage and basement clearing",
              "Attic cleanouts",
              "Hoarding situation cleanup",
              "Donation coordination",
              "Appliance removal",
              "Yard and shed cleanouts",
            ].map((service) => (
              <li key={service} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CtaBanner
        heading={`Need a cleanout in ${county.name}?`}
        subtext="Call or text for a free, no-obligation estimate. We price by load size — fair and transparent."
      />
    </Layout>
  );
}

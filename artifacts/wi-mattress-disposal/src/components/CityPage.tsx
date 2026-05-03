import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, CheckCircle2 } from "lucide-react";
import Layout from "./Layout";
import Breadcrumb from "./Breadcrumb";
import CtaBanner from "./CtaBanner";
import type { County, City } from "@/data/serviceAreas";

const mattressList = [
  "Twin & twin XL mattresses", "Full size mattresses", "Queen mattresses",
  "King & California king mattresses", "Box springs (any size)", "Futon mattresses",
  "Memory foam & foam mattresses", "Pillow top mattresses", "Commercial/hotel mattresses",
];

export default function CityPage({ county, city }: { county: County; city: City }) {
  useEffect(() => {
    document.title = `${city.name} Mattress Disposal & Pickup | WI Mattress Disposal`;
  }, [city.name]);

  return (
    <Layout>
      <div className="bg-gradient-to-br from-muted/60 to-accent/20 border-b border-border py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas" }, { label: county.name, href: `/service-areas/${county.slug}` }, { label: city.name }]} />
          <div className="flex items-start gap-3">
            <MapPin className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Mattress Disposal &amp; Pickup in {city.name}, WI</h1>
              <p className="text-muted-foreground text-lg">Serving {city.name} and surrounding {county.name} communities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">{city.blurb}</p>
            <p className="text-foreground/80 leading-relaxed">WI Mattress Disposal is locally owned and operated from nearby West Bend. We are licensed for solid waste removal in Wisconsin and fully insured. Pricing is based on your location and the number of pieces — call or text for a quick quote and we'll schedule around your timeline.</p>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Mattresses We Remove in {city.name}</h2>
              <ul className="space-y-2.5">
                {mattressList.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-white border-2 border-primary rounded-2xl p-5 shadow-md">
              <h3 className="font-bold text-foreground mb-3">Get a Quick Quote</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">Tell us your city and how many mattresses. We give you a price fast — no waiting around.</p>
              <a href="tel:2626990100" className="block w-full text-center bg-primary text-primary-foreground font-bold py-2.5 rounded-xl hover:bg-primary/90 transition-colors mb-3">
                Call or Text Us
              </a>
              <p className="text-center text-sm font-semibold text-foreground">262-699-0100</p>
            </div>

            <div className="bg-muted/40 border border-border rounded-2xl p-5">
              <h3 className="font-semibold text-muted-foreground mb-3 text-xs uppercase tracking-widest">Also Serving {county.name}</h3>
              <ul className="space-y-1.5">
                {county.cities.filter((c) => c.slug !== city.slug).map((otherCity) => (
                  <li key={otherCity.slug}>
                    <Link href={`/service-areas/${county.slug}/${otherCity.slug}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {otherCity.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={`/service-areas/${county.slug}`} className="block mt-3 text-sm text-primary font-medium hover:underline">
                All of {county.name} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CtaBanner heading={`Serving ${city.name}, WI`} subtext="Licensed, insured, locally owned. Call or text for a quick quote." />
    </Layout>
  );
}

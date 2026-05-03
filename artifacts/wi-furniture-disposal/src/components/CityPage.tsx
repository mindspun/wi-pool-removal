import { useEffect } from "react";
import { Link } from "wouter";
import { MapPin, CheckCircle2 } from "lucide-react";
import Layout from "./Layout";
import Breadcrumb from "./Breadcrumb";
import CtaBanner from "./CtaBanner";
import type { County, City } from "@/data/serviceAreas";

const furnitureList = [
  "Sofas, sectionals & loveseats", "Beds, frames & headboards", "Dressers, armoires & wardrobes",
  "Dining tables & chairs", "Desks & office chairs", "Recliners & accent chairs",
  "Bookcases & shelving units", "Mattresses & box springs", "Any other household furniture",
];

export default function CityPage({ county, city }: { county: County; city: City }) {
  useEffect(() => {
    document.title = `${city.name} Furniture Disposal & Pickup | WI Furniture Disposal`;
  }, [city.name]);

  return (
    <Layout>
      {/* Hero with diagonal accent */}
      <div className="relative bg-muted/50 border-b border-border py-10 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-full bg-accent/30 skew-x-12 translate-x-32 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Service Areas", href: "/service-areas" }, { label: county.name, href: `/service-areas/${county.slug}` }, { label: city.name }]} />
          <div className="flex items-start gap-3">
            <MapPin className="w-7 h-7 text-primary mt-1 flex-shrink-0" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Furniture Disposal &amp; Pickup in {city.name}, WI</h1>
              <p className="text-muted-foreground text-lg">Serving {city.name} and surrounding {county.name} communities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-foreground/80 text-lg leading-relaxed">{city.blurb}</p>
            <p className="text-foreground/80 leading-relaxed">WI Furniture Disposal is locally owned and operated from nearby West Bend. We are licensed for solid waste removal in Wisconsin and fully insured. Pricing is based on your location and the items being removed — call or text for a quick quote and we'll schedule around your timeline.</p>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Furniture We Remove in {city.name}</h2>
              <ul className="grid grid-cols-1 gap-2.5">
                {furnitureList.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-primary text-primary-foreground rounded p-5 shadow-md">
              <h3 className="font-bold mb-3">Get a Quick Quote</h3>
              <p className="text-primary-foreground/80 text-sm mb-4 leading-relaxed">Tell us your location and what needs to go. We'll give you a price fast — no waiting.</p>
              <a href="tel:2626990100" className="block w-full text-center bg-white text-primary font-bold py-2.5 rounded hover:bg-white/90 transition-colors mb-2">
                Call or Text Us
              </a>
              <p className="text-center text-sm font-semibold text-primary-foreground/90">262-699-0100</p>
            </div>

            <div className="bg-white border border-border rounded p-5">
              <h3 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide text-muted-foreground">Also Serving {county.name}</h3>
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

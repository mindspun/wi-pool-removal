export interface City {
  name: string;
  slug: string;
  blurb: string;
}

export interface County {
  name: string;
  slug: string;
  description: string;
  cities: City[];
}

export const counties: County[] = [
  {
    name: "Washington County",
    slug: "washington-county",
    description: "Washington County is our home base. We remove furniture from homes, apartments, offices, and rental properties throughout the county — fast, fairly priced, and fully insured.",
    cities: [
      { name: "West Bend", slug: "west-bend", blurb: "West Bend is where we're based. When you need furniture hauled out — couches, beds, dressers, dining sets — we're the local crew that shows up ready to work. No fees hidden at the end." },
      { name: "Germantown", slug: "germantown", blurb: "Germantown homeowners and property managers call us for straightforward furniture removal. We take everything from single pieces to full-room clearouts, priced honestly by the job." },
      { name: "Hartford", slug: "hartford", blurb: "Hartford residents trust WI Furniture Disposal for reliable pickup. We handle all furniture types — upholstered, wood, metal, modular — and price every job before we schedule." },
      { name: "Slinger", slug: "slinger", blurb: "Slinger homeowners call us when furniture needs to go and they don't want the hassle of hauling it themselves. We show up, we lift it, we load it, done." },
      { name: "Jackson", slug: "jackson", blurb: "Jackson residents depend on us for honest, on-time furniture removal. Locally owned, licensed for solid waste, fully insured on every job." },
      { name: "Kewaskum", slug: "kewaskum", blurb: "Kewaskum homeowners and rental property owners use us for quick, affordable furniture pickup. We serve the whole area and price based on what you have and where you are." },
      { name: "Richfield", slug: "richfield", blurb: "Richfield properties — residential and rural — get the same dependable furniture removal service. We haul out whatever you don't want and dispose of it responsibly." },
    ],
  },
  {
    name: "Ozaukee County",
    slug: "ozaukee-county",
    description: "We serve all of Ozaukee County — from lakeside Mequon to the historic streets of Cedarburg — with the same professional, fairly priced furniture disposal service.",
    cities: [
      { name: "Cedarburg", slug: "cedarburg", blurb: "Cedarburg's mix of older homes and newer builds keeps furniture moving. We pick up all of it — estate pieces, modern sectionals, office furniture — and charge by the job, not by the hour." },
      { name: "Port Washington", slug: "port-washington", blurb: "Port Washington homeowners and businesses call us for furniture pickup that's on-time and priced right. We haul out anything you need gone, from a single chair to a full office clearout." },
      { name: "Grafton", slug: "grafton", blurb: "Grafton residents trust us with furniture removal from homes, apartments, and commercial spaces. We're local, licensed, insured, and always upfront about cost." },
      { name: "Mequon", slug: "mequon", blurb: "Mequon's larger homes and active real estate market create steady demand for furniture removal. We handle single pickups and full-property clearouts with the same efficiency and honest pricing." },
      { name: "Thiensville", slug: "thiensville", blurb: "Thiensville residents choose WI Furniture Disposal for no-fuss pickup. We discuss price before scheduling, arrive on time, and leave your space clean." },
      { name: "Saukville", slug: "saukville", blurb: "Saukville homeowners and landlords call us when furniture needs to go. We serve the full area with the same reliable, fairly priced service we bring to every job." },
      { name: "Fredonia", slug: "fredonia", blurb: "Fredonia residents have a local option for furniture pickup that's affordable and dependable. Call or text for a quick quote and we'll get on the schedule." },
    ],
  },
  {
    name: "Fond du Lac County",
    slug: "fond-du-lac-county",
    description: "We make the drive to Fond du Lac County for furniture removal jobs across the county. Household or commercial, single piece or full property — same price-by-the-job approach.",
    cities: [
      { name: "Fond du Lac", slug: "fond-du-lac", blurb: "Fond du Lac homeowners and businesses rely on us for efficient, honest furniture removal. We price before we schedule and show up prepared to haul everything out in one trip when possible." },
      { name: "Ripon", slug: "ripon", blurb: "Ripon residents call WI Furniture Disposal for pickup that's on-time and transparent. We take sofas, beds, desks, dressers, dining sets, and more — all for a price discussed before we arrive." },
      { name: "Waupun", slug: "waupun", blurb: "We serve Waupun with dependable furniture removal at fair prices. Call or text with your address and what needs to go — we'll give you a number quickly." },
      { name: "Mayville", slug: "mayville", blurb: "Mayville homeowners use us for convenient, honest furniture pickup. We haul out all types and sizes, dispose of everything properly, and always confirm pricing upfront." },
      { name: "Campbellsport", slug: "campbellsport", blurb: "Campbellsport residents choose us for reliable furniture removal. We're licensed, insured, and priced by the job — so you know exactly what you're paying before we start." },
      { name: "North Fond du Lac", slug: "north-fond-du-lac", blurb: "North Fond du Lac homeowners get the same efficient, honest furniture removal as everyone else in our service area. Call for a fast quote and we'll get on the schedule." },
      { name: "Lomira", slug: "lomira", blurb: "Lomira residents trust us to remove furniture quickly and responsibly. One piece or a whole house — we price it fairly and handle everything from pickup to disposal." },
    ],
  },
  {
    name: "Sheboygan County",
    slug: "sheboygan-county",
    description: "Sheboygan County's diverse residential and commercial landscape keeps us busy with furniture removal of all types. We serve the entire county with licensed, insured pickup and disposal.",
    cities: [
      { name: "Sheboygan", slug: "sheboygan", blurb: "Sheboygan's neighborhoods and commercial district generate consistent furniture removal demand. We serve residential and business clients throughout the city — any furniture, any quantity, priced honestly." },
      { name: "Sheboygan Falls", slug: "sheboygan-falls", blurb: "Sheboygan Falls homeowners and property managers call us for reliable, on-schedule furniture pickup. We haul out single pieces to full-room sets, always with upfront pricing." },
      { name: "Plymouth", slug: "plymouth", blurb: "Plymouth residents count on us for no-nonsense furniture removal. Licensed, insured, locally owned — and price confirmed before we set a time." },
      { name: "Kohler", slug: "kohler", blurb: "Kohler homeowners trust us with furniture disposal. High-end or everyday, we handle it with care and charge based on the job, not an inflated hourly rate." },
      { name: "Elkhart Lake", slug: "elkhart-lake", blurb: "Elkhart Lake seasonal and year-round residents call us for furniture removal at vacation properties and full-time homes. Flexible scheduling, honest pricing." },
      { name: "Oostburg", slug: "oostburg", blurb: "Oostburg residents have a dependable local option for furniture pickup. We serve the area regularly and are ready to schedule around your availability." },
      { name: "Random Lake", slug: "random-lake", blurb: "Random Lake homeowners call us for furniture removal that's straightforward and fairly priced. We handle the heavy lifting so you don't have to." },
    ],
  },
  {
    name: "Waukesha County",
    slug: "waukesha-county",
    description: "Waukesha County is our busiest service area, and we're fully equipped for the volume. Any furniture, any property type, anywhere in the county — same dependable, fairly priced service.",
    cities: [
      { name: "Waukesha", slug: "waukesha", blurb: "Waukesha's residential and commercial real estate market creates steady demand for furniture pickup. We serve the whole city — any piece, any quantity, priced by the job." },
      { name: "Brookfield", slug: "brookfield", blurb: "Brookfield homeowners and commercial clients trust us to remove furniture quickly and responsibly. We show up on time, do the lifting, and price every job transparently." },
      { name: "Pewaukee", slug: "pewaukee", blurb: "Pewaukee residents call us for furniture disposal that's fast, fair, and hassle-free. Lakeside homes, subdivisions, commercial spaces — we handle them all." },
      { name: "Oconomowoc", slug: "oconomowoc", blurb: "Oconomowoc's lake country properties require a removal partner that shows up prepared. We do exactly that — for any furniture, at any property, with pricing confirmed before we start." },
      { name: "Menomonee Falls", slug: "menomonee-falls", blurb: "Menomonee Falls is one of Waukesha County's largest communities and we're well-prepared to serve it. Single-piece pickups to full commercial clearouts — same professional, fairly priced approach." },
      { name: "New Berlin", slug: "new-berlin", blurb: "New Berlin homeowners and businesses rely on us for efficient furniture removal. Call or text for a quote and we'll schedule around your timeline." },
      { name: "Mukwonago", slug: "mukwonago", blurb: "Mukwonago residents choose WI Furniture Disposal for honest, on-time furniture pickup. We price by the job, arrive when we say we will, and dispose of everything responsibly." },
    ],
  },
];

export function getCounty(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}

export function getCity(countySlug: string, citySlug: string): { county: County; city: City } | undefined {
  const county = getCounty(countySlug);
  if (!county) return undefined;
  const city = county.cities.find((c) => c.slug === citySlug);
  if (!city) return undefined;
  return { county, city };
}

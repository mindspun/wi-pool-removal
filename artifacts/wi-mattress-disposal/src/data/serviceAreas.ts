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
    description: "Washington County is our home base. We pick up mattresses from homes, apartments, rentals, and hotels throughout the county — any size, any condition, disposed of responsibly.",
    cities: [
      { name: "West Bend", slug: "west-bend", blurb: "West Bend is where we operate from. When you need a mattress hauled away — twin, full, queen, king, or box spring — we're the local call. We price by the job, show up on time, and take it away the right way." },
      { name: "Germantown", slug: "germantown", blurb: "Germantown residents call us for mattress pickup that's fast, fair, and hassle-free. One mattress or a whole property's worth — we handle everything and tell you the price before we schedule." },
      { name: "Hartford", slug: "hartford", blurb: "Hartford homeowners trust WI Mattress Disposal for reliable, responsible pickup. All sizes, any condition, pricing confirmed before we arrive." },
      { name: "Slinger", slug: "slinger", blurb: "Slinger residents use us when the mattress needs to go and they'd rather not deal with it themselves. We haul it out, we dispose of it properly, and we charge a fair price." },
      { name: "Jackson", slug: "jackson", blurb: "Jackson homeowners call us for straightforward mattress removal. Locally owned, licensed for solid waste, fully insured — and always honest about cost." },
      { name: "Kewaskum", slug: "kewaskum", blurb: "Kewaskum residents have a dependable local option for mattress disposal. Call or text for a quick quote and we'll get you on the schedule." },
      { name: "Richfield", slug: "richfield", blurb: "Richfield homeowners trust us to remove mattresses promptly and responsibly. We serve the full area with fair, upfront pricing on every job." },
    ],
  },
  {
    name: "Ozaukee County",
    slug: "ozaukee-county",
    description: "We serve all of Ozaukee County with prompt, professional mattress pickup and disposal. Household and commercial — from a single bedroom to a full hotel property.",
    cities: [
      { name: "Cedarburg", slug: "cedarburg", blurb: "Cedarburg homeowners and rental property owners call us for mattress pickup that's on-time and honestly priced. We take all sizes and conditions — no prep needed on your end." },
      { name: "Port Washington", slug: "port-washington", blurb: "Port Washington residents trust us for straightforward mattress removal. We haul out any size, any condition, and always discuss price before we put anything on the schedule." },
      { name: "Grafton", slug: "grafton", blurb: "Grafton homeowners and property managers rely on WI Mattress Disposal for dependable pickup. Licensed, insured, and priced fairly — every time." },
      { name: "Mequon", slug: "mequon", blurb: "Mequon's active real estate market and larger homes create consistent mattress disposal needs. We handle single units and full-property clearouts with the same honest, efficient approach." },
      { name: "Thiensville", slug: "thiensville", blurb: "Thiensville residents choose us for no-fuss mattress removal. We confirm price, show up on time, and leave your space clear." },
      { name: "Saukville", slug: "saukville", blurb: "Saukville homeowners call us for dependable mattress pickup. We serve the whole area with fair pricing and reliable scheduling." },
      { name: "Fredonia", slug: "fredonia", blurb: "Fredonia residents have a trustworthy local option for mattress disposal. Call or text and we'll get you a price fast." },
    ],
  },
  {
    name: "Fond du Lac County",
    slug: "fond-du-lac-county",
    description: "We make the trip to Fond du Lac County for mattress removal jobs of all sizes. Residential and commercial, priced by the job based on your location and what you need removed.",
    cities: [
      { name: "Fond du Lac", slug: "fond-du-lac", blurb: "Fond du Lac residents and businesses rely on us for efficient, honest mattress removal. We price before we schedule and arrive ready to handle everything ourselves." },
      { name: "Ripon", slug: "ripon", blurb: "Ripon homeowners call WI Mattress Disposal for pickup that's on-time and transparent. All sizes accepted — price confirmed before we come." },
      { name: "Waupun", slug: "waupun", blurb: "We serve Waupun with dependable mattress removal at fair prices. Call with your address and what you have — we'll quote you quickly." },
      { name: "Mayville", slug: "mayville", blurb: "Mayville residents use us for convenient, honest mattress pickup. We haul out all sizes, dispose of everything properly, and always confirm pricing upfront." },
      { name: "Campbellsport", slug: "campbellsport", blurb: "Campbellsport residents trust us for reliable mattress disposal. Licensed, insured, and priced fairly on every job." },
      { name: "North Fond du Lac", slug: "north-fond-du-lac", blurb: "North Fond du Lac homeowners get the same efficient, honest mattress removal as everywhere else in our service area." },
      { name: "Lomira", slug: "lomira", blurb: "Lomira residents call us to remove mattresses quickly and responsibly. One unit or several — we price it fairly and handle disposal the right way." },
    ],
  },
  {
    name: "Sheboygan County",
    slug: "sheboygan-county",
    description: "Sheboygan County residential and commercial properties trust us for mattress pickup and disposal. Hotels, apartments, single-family homes — we handle them all.",
    cities: [
      { name: "Sheboygan", slug: "sheboygan", blurb: "Sheboygan's residential neighborhoods and commercial properties create consistent mattress disposal demand. We serve the whole city with honest pricing and reliable scheduling." },
      { name: "Sheboygan Falls", slug: "sheboygan-falls", blurb: "Sheboygan Falls homeowners and property managers call us for on-time, upfront-priced mattress pickup. All sizes, any condition." },
      { name: "Plymouth", slug: "plymouth", blurb: "Plymouth residents count on us for no-nonsense mattress removal. We're local, licensed, and insured — and price is confirmed before we set a time." },
      { name: "Kohler", slug: "kohler", blurb: "Kohler homeowners trust us for responsible mattress disposal. We handle every pickup with care and charge a price discussed before we arrive." },
      { name: "Elkhart Lake", slug: "elkhart-lake", blurb: "Elkhart Lake seasonal and year-round residents call us for mattress removal. Flexible scheduling, honest pricing, responsible disposal." },
      { name: "Oostburg", slug: "oostburg", blurb: "Oostburg residents have a dependable local option for mattress pickup. We serve the area regularly and schedule around your availability." },
      { name: "Random Lake", slug: "random-lake", blurb: "Random Lake homeowners call us for mattress removal that's straightforward and fairly priced. We handle the lifting so you don't have to." },
    ],
  },
  {
    name: "Waukesha County",
    slug: "waukesha-county",
    description: "Waukesha County is one of our most active service areas. We remove mattresses from homes, apartments, hotels, and commercial properties throughout the county.",
    cities: [
      { name: "Waukesha", slug: "waukesha", blurb: "Waukesha's busy residential and rental market creates steady mattress disposal demand. We serve the whole city — any size, any quantity, priced honestly by the job." },
      { name: "Brookfield", slug: "brookfield", blurb: "Brookfield homeowners and property managers trust us for efficient, responsible mattress removal. On-time, upfront pricing, every time." },
      { name: "Pewaukee", slug: "pewaukee", blurb: "Pewaukee residents call us for mattress disposal that's fast and hassle-free. Homes, lakeside properties, commercial spaces — we handle them all." },
      { name: "Oconomowoc", slug: "oconomowoc", blurb: "Oconomowoc's lake country homes and rental properties need reliable mattress removal. We show up prepared, price the job upfront, and dispose of everything the right way." },
      { name: "Menomonee Falls", slug: "menomonee-falls", blurb: "Menomonee Falls is one of Waukesha County's largest communities and we serve it well. Single mattress or full property clearout — same professional, fairly priced approach." },
      { name: "New Berlin", slug: "new-berlin", blurb: "New Berlin homeowners and businesses rely on us for efficient mattress removal. Call or text for a quote and we'll schedule around your timeline." },
      { name: "Mukwonago", slug: "mukwonago", blurb: "Mukwonago residents trust WI Mattress Disposal for honest, on-time pickup. We price by the job, arrive when we say, and dispose of everything responsibly." },
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

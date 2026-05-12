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
      { name: "Barton", slug: "barton", blurb: "Barton residents get the same dependable mattress pickup as our customers throughout Washington County. Call us for a quick quote and we'll get on the schedule promptly." },
      { name: "Newburg", slug: "newburg", blurb: "Newburg homeowners use us for straightforward mattress disposal. We serve the area regularly with fair prices and dependable scheduling — any size, any condition." },
      { name: "Allenton", slug: "allenton", blurb: "Allenton residents trust us for quick, responsible mattress pickup. Any size, any condition — call for a fast quote and we'll handle the rest." },
      { name: "Erin", slug: "erin", blurb: "Erin homeowners use us for responsible mattress disposal. We serve the area and always price the job before we put it on the schedule." },
      { name: "Addison", slug: "addison", blurb: "Addison homeowners call us for mattress pickup that's simple and fairly priced. We handle all sizes and take care of disposal the right way." },
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
      { name: "Saukville", slug: "saukville", blurb: "Saukville homeowners call us for dependable mattress pickup. We serve the whole area with fair pricing and reliable scheduling for all sizes." },
      { name: "Fredonia", slug: "fredonia", blurb: "Fredonia residents have a trustworthy local option for mattress disposal. Call or text and we'll get you a price fast — no waiting, no guessing." },
      { name: "Belgium", slug: "belgium", blurb: "Belgium residents use us for dependable mattress disposal. We serve Lake Michigan communities throughout Ozaukee County with fair, upfront pricing on every job." },
      { name: "River Hills", slug: "river-hills", blurb: "River Hills homeowners use us for straightforward mattress pickup. We price the job upfront and handle everything from removal to responsible disposal." },
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
      { name: "Oakfield", slug: "oakfield", blurb: "Oakfield residents use us for dependable mattress pickup at fair prices. We cover this area of Fond du Lac County regularly and price every job upfront." },
      { name: "Rosendale", slug: "rosendale", blurb: "Rosendale residents trust us for responsible mattress disposal at fair prices. Call or text for a quick quote and we'll get you scheduled." },
      { name: "Brandon", slug: "brandon", blurb: "Brandon homeowners use us for simple, fairly priced mattress pickup. We handle everything from a single unit to a full property clearout." },
      { name: "Eden", slug: "eden", blurb: "Eden residents call us for straightforward mattress disposal at fair prices. Any size, any condition — we handle it responsibly." },
      { name: "Brownsville", slug: "brownsville", blurb: "Brownsville residents trust us for dependable mattress pickup. Call or text for a quick quote and we'll get you on the schedule." },
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
      { name: "Cedar Grove", slug: "cedar-grove", blurb: "Cedar Grove homeowners use us for reliable mattress removal. We cover this part of Sheboygan County and price jobs upfront — no surprises." },
      { name: "Kiel", slug: "kiel", blurb: "Kiel homeowners trust us for same-day or next-day mattress pickup at honest prices. Call for a quick quote and we'll get on the schedule fast." },
      { name: "Howards Grove", slug: "howards-grove", blurb: "Howards Grove residents use us for straightforward mattress pickup. Any size, any condition — we handle it responsibly and price it upfront." },
      { name: "Waldo", slug: "waldo", blurb: "Waldo homeowners use us for dependable mattress disposal at honest prices. We serve the area and always discuss price before scheduling." },
      { name: "Cascade", slug: "cascade", blurb: "Cascade residents trust us for mattress removal at fair prices. Call with your address and we'll give you a quick quote." },
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
      { name: "Muskego", slug: "muskego", blurb: "Muskego homeowners use us for straightforward mattress disposal. We serve this part of Waukesha County and always price upfront — no surprises." },
      { name: "Mukwonago", slug: "mukwonago", blurb: "Mukwonago residents trust WI Mattress Disposal for honest, on-time pickup. We price by the job, arrive when we say, and dispose of everything responsibly." },
      { name: "Sussex", slug: "sussex", blurb: "Sussex homeowners use us for dependable mattress disposal. Any size, any condition — we cover the area and price jobs upfront." },
      { name: "Delafield", slug: "delafield", blurb: "Delafield homeowners use us for reliable mattress pickup from residential and vacation properties. We cover the area and always quote the job upfront." },
      { name: "Wales", slug: "wales", blurb: "Wales homeowners use us for dependable mattress disposal at honest prices. Call or text for a fast quote and we'll get you scheduled." },
      { name: "Hartland", slug: "hartland", blurb: "Hartland homeowners trust us for efficient mattress disposal at fair prices. We serve the area and always confirm pricing before scheduling." },
      { name: "Elm Grove", slug: "elm-grove", blurb: "Elm Grove homeowners use us for straightforward mattress pickup. We cover the area and always discuss price before putting a job on the schedule." },
      { name: "Dousman", slug: "dousman", blurb: "Dousman residents use us for dependable mattress disposal at fair prices. Call or text for a quick quote and we'll get you on the schedule." },
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

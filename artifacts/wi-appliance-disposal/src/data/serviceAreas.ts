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
    description:
      "Washington County is home to our base of operations in West Bend. We regularly serve homeowners and businesses throughout the county with prompt, responsible appliance disposal and pickup.",
    cities: [
      {
        name: "West Bend",
        slug: "west-bend",
        blurb:
          "West Bend is our home base. When West Bend residents need an old refrigerator, washer, dryer, or any other appliance hauled away, we're the local call. We know the area and we show up on time — no hassle, no hidden fees.",
      },
      {
        name: "Germantown",
        slug: "germantown",
        blurb:
          "We handle appliance pickup and disposal throughout Germantown regularly. From single appliances to full-kitchen removal, our crew arrives ready to haul everything out safely and responsibly.",
      },
      {
        name: "Hartford",
        slug: "hartford",
        blurb:
          "Hartford homeowners and businesses trust WI Appliance Disposal for fast, reliable pickup. Whether it's one unit or a dozen, we price fairly and dispose of everything according to Wisconsin environmental standards.",
      },
      {
        name: "Slinger",
        slug: "slinger",
        blurb:
          "Slinger residents can count on us for quick, dependable appliance removal. We take refrigerators, stoves, washers, dryers, dishwashers, and commercial equipment — and we price by the job, not by the hour.",
      },
      {
        name: "Jackson",
        slug: "jackson",
        blurb:
          "Jackson homeowners call us when they need appliances hauled away the right way. We're licensed, insured, and based nearby — so when you need it gone, we're ready to go.",
      },
      {
        name: "Kewaskum",
        slug: "kewaskum",
        blurb:
          "Kewaskum residents count on us for straightforward appliance pickup. Refrigerators, washers, dryers, stoves — we haul it all out safely and responsibly, with pricing confirmed before we schedule.",
      },
      {
        name: "Richfield",
        slug: "richfield",
        blurb:
          "Richfield homeowners call us when appliances need to go. We serve rural and residential properties throughout the area with licensed, insured appliance disposal at fair, upfront prices.",
      },
      {
        name: "Barton",
        slug: "barton",
        blurb:
          "Barton residents have a local option for appliance removal that's fast and fairly priced. We cover this area regularly and are ready to pick up whatever you need gone — refrigerators, washers, dryers, and more.",
      },
      {
        name: "Newburg",
        slug: "newburg",
        blurb:
          "Newburg homeowners trust us for reliable appliance pickup. One unit or several — we price the job upfront and haul everything out promptly and responsibly.",
      },
      {
        name: "Allenton",
        slug: "allenton",
        blurb:
          "Allenton residents have a reliable local option for appliance removal. We cover the area regularly and make the process as easy as a phone call — fair pricing, responsible disposal.",
      },
      {
        name: "Erin",
        slug: "erin",
        blurb:
          "Erin homeowners call us for appliance removal at rural and residential properties. We're licensed, insured, and priced by the job — ready to schedule around your availability.",
      },
      {
        name: "Addison",
        slug: "addison",
        blurb:
          "Addison homeowners and property owners call us for reliable appliance pickup. We serve the area regularly and handle all makes, models, and conditions — pricing confirmed before we arrive.",
      },
    ],
  },
  {
    name: "Ozaukee County",
    slug: "ozaukee-county",
    description:
      "Ozaukee County's lakeside communities and inland towns all fall within our regular service area. We handle household and commercial appliance disposal for Ozaukee County residents with the same care and efficiency we bring to every job.",
    cities: [
      {
        name: "Cedarburg",
        slug: "cedarburg",
        blurb:
          "Cedarburg residents and business owners call us when appliances need to go. Our crew handles all types — from vintage refrigerators in older homes to commercial kitchen equipment — pricing everything honestly by the job.",
      },
      {
        name: "Port Washington",
        slug: "port-washington",
        blurb:
          "We serve Port Washington regularly, picking up appliances from homes and businesses throughout the area. Lakeside properties, older homes, apartments — we've done it all and we price fairly for every situation.",
      },
      {
        name: "Grafton",
        slug: "grafton",
        blurb:
          "Grafton homeowners trust us to remove appliances quickly and responsibly. We haul away refrigerators, freezers, washers, dryers, stoves, and more — leaving your space clear and billing you honestly.",
      },
      {
        name: "Mequon",
        slug: "mequon",
        blurb:
          "Mequon's larger properties and active real estate market create steady demand for appliance removal. We handle single pickups and full-property appliance clearouts efficiently, with upfront pricing before we start.",
      },
      {
        name: "Thiensville",
        slug: "thiensville",
        blurb:
          "Thiensville residents call us for honest, no-fuss appliance disposal. We're locally owned, nearby, and committed to handling every pickup in a way that's responsible to the environment and respectful of your property.",
      },
      {
        name: "Saukville",
        slug: "saukville",
        blurb:
          "Saukville residents call us for no-nonsense appliance disposal. We serve this area regularly with honest pricing and reliable scheduling — ready to haul out whatever you need gone.",
      },
      {
        name: "Fredonia",
        slug: "fredonia",
        blurb:
          "Fredonia homeowners and businesses call us for fast, fair appliance removal. We take all types and sizes and price every job before we schedule.",
      },
      {
        name: "Belgium",
        slug: "belgium",
        blurb:
          "Belgium residents trust us for prompt, responsible appliance pickup. We cover this area and are ready to haul out refrigerators, washers, dryers, and more at fair, upfront prices.",
      },
      {
        name: "River Hills",
        slug: "river-hills",
        blurb:
          "River Hills homeowners call us for efficient appliance removal from homes of all sizes. We're licensed, insured, and always upfront about what the job will cost before we put it on the schedule.",
      },
    ],
  },
  {
    name: "Fond du Lac County",
    slug: "fond-du-lac-county",
    description:
      "We serve Fond du Lac County from West Bend, providing household and commercial appliance disposal across the county. Whether you're in the city of Fond du Lac or a smaller community, we can schedule a pickup and get it done right.",
    cities: [
      {
        name: "Fond du Lac",
        slug: "fond-du-lac",
        blurb:
          "Fond du Lac homeowners and businesses rely on us for straightforward appliance removal. We handle all sizes and types — from single units to commercial kitchen equipment — with transparent pricing and reliable scheduling.",
      },
      {
        name: "Ripon",
        slug: "ripon",
        blurb:
          "Ripon residents trust WI Appliance Disposal for prompt, professional appliance pickup. We price by the job, show up when we say we will, and dispose of everything in compliance with Wisconsin regulations.",
      },
      {
        name: "Waupun",
        slug: "waupun",
        blurb:
          "We serve Waupun with the same dependable appliance disposal service we bring to every community in our area. Call or text for a quick estimate — we'll schedule around your timeline.",
      },
      {
        name: "Mayville",
        slug: "mayville",
        blurb:
          "Mayville homeowners call us when appliances need to leave. We handle refrigerators, stoves, washers, dryers, dishwashers, HVAC units, and commercial appliances — always with fair, upfront pricing.",
      },
      {
        name: "Campbellsport",
        slug: "campbellsport",
        blurb:
          "Campbellsport residents have a local, reliable option for appliance removal. We're licensed for solid waste and fully insured — ready to pick up whatever you need gone and handle disposal the right way.",
      },
      {
        name: "North Fond du Lac",
        slug: "north-fond-du-lac",
        blurb:
          "North Fond du Lac homeowners call us for reliable appliance pickup. We serve the village regularly with the same licensed, insured, fairly priced service we bring throughout Fond du Lac County.",
      },
      {
        name: "Lomira",
        slug: "lomira",
        blurb:
          "Lomira homeowners have a reliable appliance removal option. We cover this part of Fond du Lac County regularly and are ready to pick up whatever you need hauled away at fair, upfront prices.",
      },
      {
        name: "Oakfield",
        slug: "oakfield",
        blurb:
          "Oakfield residents call us for appliance disposal that's straightforward and fairly priced. We serve the area with licensed, insured pickup for all household and commercial appliances.",
      },
      {
        name: "Rosendale",
        slug: "rosendale",
        blurb:
          "Rosendale residents have a reliable local option for appliance removal. We serve the area with fair, upfront pricing and responsible disposal — ready to schedule around your availability.",
      },
      {
        name: "Brandon",
        slug: "brandon",
        blurb:
          "Brandon homeowners call us for reliable appliance pickup. We serve this part of Fond du Lac County with the same honest, professional service we bring everywhere in our coverage area.",
      },
      {
        name: "Eden",
        slug: "eden",
        blurb:
          "Eden residents have a dependable option for appliance removal. We cover this part of Fond du Lac County with licensed, insured service and honest pricing on every job.",
      },
      {
        name: "Brownsville",
        slug: "brownsville",
        blurb:
          "Brownsville residents have a reliable appliance disposal option. We cover the area with licensed, insured service and always price the job before we schedule.",
      },
    ],
  },
  {
    name: "Sheboygan County",
    slug: "sheboygan-county",
    description:
      "Sheboygan County's diverse mix of residential and commercial properties keeps us busy with appliance pickups of all kinds. We serve the entire county with licensed, insured appliance disposal — household and commercial, any size.",
    cities: [
      {
        name: "Sheboygan",
        slug: "sheboygan",
        blurb:
          "Sheboygan's residential neighborhoods and active commercial sector generate consistent demand for appliance removal. WI Appliance Disposal serves the whole city — from single refrigerator pickups to full commercial kitchen clearouts.",
      },
      {
        name: "Sheboygan Falls",
        slug: "sheboygan-falls",
        blurb:
          "Sheboygan Falls homeowners and property managers call us for reliable, on-time appliance disposal. We haul out anything from a single washer to a full set of kitchen appliances, pricing everything upfront.",
      },
      {
        name: "Plymouth",
        slug: "plymouth",
        blurb:
          "Plymouth residents count on us for no-nonsense appliance removal. We're licensed, insured, and priced fairly — and we schedule around your availability so the process is as convenient as possible.",
      },
      {
        name: "Kohler",
        slug: "kohler",
        blurb:
          "Kohler homeowners and commercial properties trust us with appliance disposal. Whatever brand, whatever size, whatever condition — we haul it out and dispose of it responsibly, with pricing discussed before we start.",
      },
      {
        name: "Elkhart Lake",
        slug: "elkhart-lake",
        blurb:
          "Elkhart Lake seasonal and permanent residents call us for appliance removal at both vacation properties and year-round homes. We're flexible, reliable, and always upfront about cost before we do any work.",
      },
      {
        name: "Oostburg",
        slug: "oostburg",
        blurb:
          "Oostburg homeowners and businesses trust us for prompt appliance removal. We cover this part of Sheboygan County regularly with honest pricing and responsible disposal on every pickup.",
      },
      {
        name: "Random Lake",
        slug: "random-lake",
        blurb:
          "Random Lake residents have a reliable option for appliance pickup. We cover this area regularly with licensed, insured service and always price the job before we schedule.",
      },
      {
        name: "Cedar Grove",
        slug: "cedar-grove",
        blurb:
          "Cedar Grove homeowners call us for straightforward appliance disposal. We serve the area regularly with fair, upfront pricing and responsible handling of every appliance we haul away.",
      },
      {
        name: "Kiel",
        slug: "kiel",
        blurb:
          "Kiel homeowners and businesses rely on us for no-fuss appliance removal. Licensed, insured, fairly priced — and always transparent about cost before we start any job.",
      },
      {
        name: "Howards Grove",
        slug: "howards-grove",
        blurb:
          "Howards Grove residents have a dependable local option for appliance pickup. We serve the community with honest pricing and reliable scheduling for all appliance types and sizes.",
      },
      {
        name: "Waldo",
        slug: "waldo",
        blurb:
          "Waldo homeowners call us for appliance removal that's simple and fairly priced. We cover this part of Sheboygan County with licensed, insured service and upfront pricing on every job.",
      },
      {
        name: "Cascade",
        slug: "cascade",
        blurb:
          "Cascade residents have a reliable appliance disposal option. We serve this area of Sheboygan County with upfront pricing and responsible handling every time we're called out.",
      },
    ],
  },
  {
    name: "Waukesha County",
    slug: "waukesha-county",
    description:
      "Waukesha County is one of Wisconsin's busiest suburban markets, and we're equipped to handle the volume. From single-appliance pickups to commercial property clearouts, we serve all of Waukesha County with fast, reliable appliance disposal.",
    cities: [
      {
        name: "Waukesha",
        slug: "waukesha",
        blurb:
          "Waukesha's busy residential and commercial real estate market keeps appliance removal in constant demand. WI Appliance Disposal serves the whole city — any appliance, any quantity, priced honestly by the job.",
      },
      {
        name: "Brookfield",
        slug: "brookfield",
        blurb:
          "Brookfield homeowners and commercial clients trust us to remove appliances quickly and responsibly. We show up on time, handle all the heavy lifting, and price every job transparently before we begin.",
      },
      {
        name: "Pewaukee",
        slug: "pewaukee",
        blurb:
          "Pewaukee residents call us for appliance disposal that's fast, fair, and hassle-free. We serve the whole area — lakeside homes, subdivisions, commercial spaces — and we never surprise you with fees after the job.",
      },
      {
        name: "Oconomowoc",
        slug: "oconomowoc",
        blurb:
          "Oconomowoc's lake country homes and commercial properties require a disposal partner that shows up prepared and on schedule. We do exactly that — for any appliance, any property type, at pricing confirmed before we start.",
      },
      {
        name: "Menomonee Falls",
        slug: "menomonee-falls",
        blurb:
          "Menomonee Falls is one of Waukesha County's largest communities and we're well-prepared to serve it. From single unit removal to full commercial appliance clearouts, we bring the same professional, fairly priced service every time.",
      },
      {
        name: "New Berlin",
        slug: "new-berlin",
        blurb:
          "New Berlin homeowners and businesses trust us for appliance removal at any scale. We serve this busy community with fast scheduling, honest pricing, and responsible disposal of every appliance we haul.",
      },
      {
        name: "Muskego",
        slug: "muskego",
        blurb:
          "Muskego homeowners call us for efficient, fairly priced appliance disposal. We handle single units and full-property clearouts with the same professional, on-time approach throughout the community.",
      },
      {
        name: "Mukwonago",
        slug: "mukwonago",
        blurb:
          "Mukwonago homeowners rely on us for dependable appliance removal. We serve the area with licensed, insured pickup and always quote the job before we schedule.",
      },
      {
        name: "Sussex",
        slug: "sussex",
        blurb:
          "Sussex homeowners and businesses call us for prompt, reliable appliance disposal. We cover this part of Waukesha County regularly with fair pricing and responsible handling on every job.",
      },
      {
        name: "Delafield",
        slug: "delafield",
        blurb:
          "Delafield homeowners call us for appliance removal that's efficient and transparent. We cover this part of Waukesha County with licensed, insured service and upfront pricing on every pickup.",
      },
      {
        name: "Wales",
        slug: "wales",
        blurb:
          "Wales homeowners call us for appliance disposal that's straightforward and fairly priced. We cover this area regularly and are ready to schedule around your availability.",
      },
      {
        name: "Hartland",
        slug: "hartland",
        blurb:
          "Hartland homeowners and businesses rely on us for fast, fair appliance removal. We cover the area with licensed, insured service and price every job upfront before we arrive.",
      },
      {
        name: "Elm Grove",
        slug: "elm-grove",
        blurb:
          "Elm Grove homeowners call us for efficient, responsibly handled appliance removal. We serve this Waukesha County community with licensed, insured pickup and upfront pricing on every job.",
      },
      {
        name: "Dousman",
        slug: "dousman",
        blurb:
          "Dousman residents have a reliable local option for appliance disposal. We cover the area with licensed, insured service and always price the job before we put it on the schedule.",
      },
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

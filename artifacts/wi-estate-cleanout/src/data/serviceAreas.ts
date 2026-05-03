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
      "Washington County is home to our base of operations in West Bend. We know every neighborhood here and take pride in serving our own community with honest, thorough estate cleanout service.",
    cities: [
      {
        name: "West Bend",
        slug: "west-bend",
        blurb:
          "West Bend is our home base. As a locally owned company rooted right here in Washington County, we have a personal connection to every job we take on in West Bend. Whether you are clearing a family home near Regner Park or handling a large estate on the outskirts of town, we are your neighbors and we treat your property accordingly.",
      },
      {
        name: "Germantown",
        slug: "germantown",
        blurb:
          "We serve the Germantown area regularly, helping families and property owners clear out estates, garages, and full households. Germantown's mix of older homes and newer subdivisions means every cleanout is different — and we bring the same careful, donation-first approach to every one.",
      },
      {
        name: "Hartford",
        slug: "hartford",
        blurb:
          "Hartford residents trust WI Estate Cleanout to handle sensitive junk removal and estate cleanouts with care and respect. From older farmsteads to in-town properties, we work efficiently and responsibly, donating and recycling as much as possible before anything heads to a landfill.",
      },
      {
        name: "Slinger",
        slug: "slinger",
        blurb:
          "Slinger is a tight-knit community and we're proud to serve it. Whether it's a full estate cleanout after a family transition or a garage cleanout that's gotten out of hand, our crew works quickly, cleanly, and with your community in mind.",
      },
      {
        name: "Jackson",
        slug: "jackson",
        blurb:
          "Jackson homeowners and families call us when they need reliable, transparent junk removal and estate cleanout. We haul away furniture, appliances, and decades of accumulated belongings — coordinating donations to local charities and recycling centers so as little as possible goes to the landfill.",
      },
    ],
  },
  {
    name: "Ozaukee County",
    slug: "ozaukee-county",
    description:
      "Ozaukee County spans beautiful Lake Michigan shoreline communities and charming inland towns. We serve all of Ozaukee County with the same care and commitment to responsible disposal that our Washington County neighbors have come to expect.",
    cities: [
      {
        name: "Cedarburg",
        slug: "cedarburg",
        blurb:
          "Cedarburg's historic homes and limestone buildings hold generations of memories — and sometimes generations of belongings. We approach every Cedarburg estate cleanout with respect for the property and its history, prioritizing donation and preservation of items that still have life in them.",
      },
      {
        name: "Port Washington",
        slug: "port-washington",
        blurb:
          "Port Washington's lakeside character and older housing stock often means estate cleanouts with unique items and full households to sort through. We're experienced in exactly this kind of work — careful sorting, responsible disposal, and honest pricing by load size.",
      },
      {
        name: "Grafton",
        slug: "grafton",
        blurb:
          "Grafton homeowners trust us for straightforward, reliable junk removal and estate cleanout. We handle everything from single-room furniture removal to full property cleanouts, always aiming to donate and recycle before any material reaches a landfill.",
      },
      {
        name: "Mequon",
        slug: "mequon",
        blurb:
          "Mequon properties often involve larger estates and more complex cleanouts. Our team is experienced handling full-property estate sales and cleanouts efficiently, coordinating with donation centers and recyclers to make the most responsible use of every item we haul.",
      },
      {
        name: "Thiensville",
        slug: "thiensville",
        blurb:
          "Thiensville is a small community where reputation matters. We serve Thiensville residents with transparent pricing, reliable scheduling, and a genuine commitment to minimizing landfill use — because we believe every community deserves a cleanup company that actually cares.",
      },
    ],
  },
  {
    name: "Fond du Lac County",
    slug: "fond-du-lac-county",
    description:
      "Fond du Lac County stretches across rich agricultural and lakeside communities in east-central Wisconsin. We travel throughout the county to provide reliable estate cleanout and junk removal service, bringing our same donation-first philosophy to every job.",
    cities: [
      {
        name: "Fond du Lac",
        slug: "fond-du-lac",
        blurb:
          "Fond du Lac is a wonderful city at the foot of Lake Winnebago, and we're glad to serve its residents with thorough, respectful estate cleanout service. From downtown homes to lakeside properties, we handle all sizes of cleanouts and haul everything responsibly.",
      },
      {
        name: "Ripon",
        slug: "ripon",
        blurb:
          "Ripon's strong sense of community is something we respect. When Ripon families need help clearing an estate or removing accumulated junk, we show up on time, work hard, and make sure as much as possible finds a second home through local donations.",
      },
      {
        name: "Waupun",
        slug: "waupun",
        blurb:
          "Waupun residents count on us for dependable cleanout service. Whether you're preparing a property for sale or managing a loved one's estate, we handle every item with care — sorting for donation, recycling what we can, and disposing of the rest responsibly.",
      },
      {
        name: "Mayville",
        slug: "mayville",
        blurb:
          "Mayville is a close community and we take that to heart. Our estate cleanout and junk removal service is built on honest communication, fair pricing, and a real effort to reduce landfill waste — values that matter in smaller communities where word travels fast.",
      },
      {
        name: "Campbellsport",
        slug: "campbellsport",
        blurb:
          "Campbellsport homeowners and families trust us for full estate cleanouts, garage clearing, and general junk removal. We're no-nonsense professionals who price by volume and take pride in leaving every property clean and ready for its next chapter.",
      },
    ],
  },
  {
    name: "Sheboygan County",
    slug: "sheboygan-county",
    description:
      "Sheboygan County is home to a mix of Lake Michigan communities, classic Wisconsin small towns, and historic neighborhoods. We serve the entire county with licensed, insured estate cleanout and junk removal — always with an eye toward donation and recycling first.",
    cities: [
      {
        name: "Sheboygan",
        slug: "sheboygan",
        blurb:
          "Sheboygan's diverse neighborhoods and older housing stock make estate cleanouts a regular need. WI Estate Cleanout brings a professional, respectful approach to every job in Sheboygan — sorting through decades of belongings with care and directing as much as possible to local donation centers.",
      },
      {
        name: "Sheboygan Falls",
        slug: "sheboygan-falls",
        blurb:
          "Sheboygan Falls families call on us when they need reliable estate cleanout help they can count on. We offer transparent, load-based pricing and work efficiently to get your property cleared — donating and recycling everything we can along the way.",
      },
      {
        name: "Plymouth",
        slug: "plymouth",
        blurb:
          "Plymouth is a community we're proud to serve. From small apartment cleanouts to full estate removals, we approach every Plymouth job the same way: honest pricing, hard work, and a commitment to keeping as much as possible out of the landfill.",
      },
      {
        name: "Kohler",
        slug: "kohler",
        blurb:
          "Kohler properties often involve quality furniture and belongings worth preserving. Our donation-first approach means we actively look for items that can be rehomed through local charities and donation centers — a priority that saves resources and helps our community.",
      },
      {
        name: "Elkhart Lake",
        slug: "elkhart-lake",
        blurb:
          "Elkhart Lake's vacation and permanent residences often require cleanouts as families transition between properties. We handle seasonal home cleanouts, full estate removals, and everything in between with professionalism and a genuine respect for your time and your belongings.",
      },
    ],
  },
  {
    name: "Waukesha County",
    slug: "waukesha-county",
    description:
      "Waukesha County is one of the most populated counties in Wisconsin, with thriving suburbs and growing communities. We serve all corners of Waukesha County, offering estate cleanout and junk removal services that put donation and recycling ahead of the landfill.",
    cities: [
      {
        name: "Waukesha",
        slug: "waukesha",
        blurb:
          "Waukesha's older neighborhoods and busy real estate market create a steady need for professional estate cleanout and junk removal. We work with Waukesha families, landlords, and estate executors to clear properties quickly and responsibly — always donation-first.",
      },
      {
        name: "Brookfield",
        slug: "brookfield",
        blurb:
          "Brookfield homeowners trust us to handle their cleanout needs with professionalism and care. Whether you're managing an estate, downsizing, or just clearing out years of accumulated belongings, we price fairly, work efficiently, and minimize waste at every step.",
      },
      {
        name: "Pewaukee",
        slug: "pewaukee",
        blurb:
          "Pewaukee's lakeside homes and residential neighborhoods call for a cleanout company that treats your property with respect. We serve Pewaukee with the same standards we bring to every job: transparent pricing, responsible disposal, and a priority on donation over landfill.",
      },
      {
        name: "Oconomowoc",
        slug: "oconomowoc",
        blurb:
          "Oconomowoc's beautiful lake country homes often hold valuable belongings worth rehoming. Our team identifies items suitable for donation, coordinates with local charities, and ensures the rest is recycled or disposed of responsibly — minimizing your environmental footprint.",
      },
      {
        name: "Menomonee Falls",
        slug: "menomonee-falls",
        blurb:
          "Menomonee Falls is one of Waukesha County's larger communities and we're well-equipped to handle any size cleanout here. From single-room furniture removal to full estate cleanouts across multiple properties, we bring the same honest, efficient, donation-first service every time.",
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

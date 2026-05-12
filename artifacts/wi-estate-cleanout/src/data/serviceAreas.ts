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
      {
        name: "Kewaskum",
        slug: "kewaskum",
        blurb:
          "Kewaskum homeowners and families call us for reliable estate cleanout and junk removal. Whether it's a single-room clear-out or a full property, we bring the same donation-first approach — sorting carefully before anything heads to a landfill.",
      },
      {
        name: "Richfield",
        slug: "richfield",
        blurb:
          "Richfield's mix of rural properties and residential neighborhoods keeps us busy with estate cleanouts of all sizes. We serve Richfield with transparent pricing, reliable scheduling, and a genuine commitment to donating before we dispose.",
      },
      {
        name: "Barton",
        slug: "barton",
        blurb:
          "Barton is a quiet community just outside West Bend, and we're proud to serve our close neighbors here. Whether it's clearing a garage, a basement, or a full estate, we work carefully and price honestly — donation first, landfill last.",
      },
      {
        name: "Newburg",
        slug: "newburg",
        blurb:
          "Newburg's small-town character means neighbors know each other — and they know us. We serve Newburg families with careful, respectful estate cleanout work, prioritizing donation and recycling at every step of the process.",
      },
      {
        name: "Allenton",
        slug: "allenton",
        blurb:
          "Allenton is a small community in Washington County where we regularly help families handle estate cleanouts and property clearing. We price by load, work efficiently, and make sure as much as possible finds a new home through local donation.",
      },
      {
        name: "Erin",
        slug: "erin",
        blurb:
          "Erin's rural character often means larger properties and decades of accumulated belongings. We're experienced handling full estate cleanouts in rural settings — respectful, efficient, and donation-focused every time.",
      },
      {
        name: "Addison",
        slug: "addison",
        blurb:
          "Addison is a small Washington County community where we handle estate cleanouts, garage clearing, and full property removal. We price honestly, work efficiently, and do everything we can to keep items out of the landfill.",
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
      {
        name: "Saukville",
        slug: "saukville",
        blurb:
          "Saukville homeowners and families trust us for dependable estate cleanout and junk removal. We serve the full community with donation-first, transparent-priced service — the same care we bring to every job in Ozaukee County.",
      },
      {
        name: "Fredonia",
        slug: "fredonia",
        blurb:
          "Fredonia's close-knit community deserves a cleanout company that respects the neighborhood and the people in it. We serve Fredonia with transparent pricing, careful sorting, and a real commitment to donation over disposal.",
      },
      {
        name: "Belgium",
        slug: "belgium",
        blurb:
          "Belgium is a small Lake Michigan community and we're glad to serve it. Whether you need a full estate cleanout or help clearing a garage, we bring the same donation-first, honest-pricing approach we use everywhere in our service area.",
      },
      {
        name: "River Hills",
        slug: "river-hills",
        blurb:
          "River Hills properties are distinctive, and we approach every estate cleanout here with the same level of care and professionalism we bring everywhere. We price honestly, sort thoughtfully for donation, and work around your schedule.",
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
      {
        name: "North Fond du Lac",
        slug: "north-fond-du-lac",
        blurb:
          "North Fond du Lac is a quiet village just north of the city, and we serve it with the same care and efficiency we bring to the larger communities nearby. Full estate cleanouts, garage clearing, single-room jobs — all at honest, transparent prices.",
      },
      {
        name: "Lomira",
        slug: "lomira",
        blurb:
          "Lomira residents trust WI Estate Cleanout for dependable junk removal and estate cleanout in a smaller-community setting. We respect the tight-knit nature of Lomira and treat every job with care and honest communication.",
      },
      {
        name: "Oakfield",
        slug: "oakfield",
        blurb:
          "Oakfield is a small Fond du Lac County village and we're proud to serve it. Estate cleanouts, garage clearing, junk removal — we handle it all with the same donation-first, transparent-pricing approach we bring to every community.",
      },
      {
        name: "Rosendale",
        slug: "rosendale",
        blurb:
          "Rosendale homeowners and families call us when an estate needs clearing. We work respectfully and efficiently, sorting items for donation before anything goes to a landfill — because good stuff deserves a second life.",
      },
      {
        name: "Brandon",
        slug: "brandon",
        blurb:
          "Brandon is a small community with a lot of history, and we're glad to help its residents with estate cleanouts and junk removal. We price honestly, sort carefully, and dispose of everything the right way.",
      },
      {
        name: "Eden",
        slug: "eden",
        blurb:
          "Eden is a quiet Fond du Lac County community and we're happy to serve its residents. Whether you need help clearing an estate, a garage, or a whole property, we bring the same careful, donation-first approach.",
      },
      {
        name: "Brownsville",
        slug: "brownsville",
        blurb:
          "Brownsville homeowners trust WI Estate Cleanout for honest, efficient junk removal and estate cleanout. We serve this corner of Fond du Lac County with the same donation-first philosophy we bring to every community we work in.",
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
      {
        name: "Oostburg",
        slug: "oostburg",
        blurb:
          "Oostburg's Dutch heritage and close community ties make it a place where reputation matters. We serve Oostburg with careful, transparent estate cleanout service — respecting your belongings and your community every step of the way.",
      },
      {
        name: "Random Lake",
        slug: "random-lake",
        blurb:
          "Random Lake homeowners and families call us for dependable estate cleanout and junk removal. We serve the community with the same donation-first, honestly-priced service we bring to every job in Sheboygan County.",
      },
      {
        name: "Cedar Grove",
        slug: "cedar-grove",
        blurb:
          "Cedar Grove is a close community in Sheboygan County and we're glad to serve it. From full estate cleanouts to single-room junk removal, we handle every job with care and honest, load-based pricing.",
      },
      {
        name: "Kiel",
        slug: "kiel",
        blurb:
          "Kiel is a welcoming community and we treat every estate cleanout here with the respect it deserves. We sort thoughtfully for donation, recycle what we can, and price every job honestly before we begin.",
      },
      {
        name: "Howards Grove",
        slug: "howards-grove",
        blurb:
          "Howards Grove homeowners and families call us when an estate needs clearing. We work respectfully and efficiently, prioritizing donation before disposal at every step — making sure good belongings find good homes.",
      },
      {
        name: "Waldo",
        slug: "waldo",
        blurb:
          "Waldo is a small Sheboygan County community and we serve it with the same care we bring to every job. Estate cleanouts, garage clearing, junk removal — all at transparent, honest prices with no surprises at the end.",
      },
      {
        name: "Cascade",
        slug: "cascade",
        blurb:
          "Cascade's rural character and tight-knit community make it a place where people value honest, transparent service. We deliver exactly that with every estate cleanout and junk removal job in the area.",
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
      {
        name: "New Berlin",
        slug: "new-berlin",
        blurb:
          "New Berlin is a large, thriving Waukesha County suburb and we're fully equipped to serve it. From apartment cleanouts to full estate removals, we bring efficient, donation-first service to every property in New Berlin.",
      },
      {
        name: "Muskego",
        slug: "muskego",
        blurb:
          "Muskego's lakeside neighborhoods and suburban homes create steady demand for reliable estate cleanout service. We serve Muskego residents with the same donation-first, transparent-pricing approach we bring everywhere in Waukesha County.",
      },
      {
        name: "Mukwonago",
        slug: "mukwonago",
        blurb:
          "Mukwonago's mix of suburban and rural properties means estate cleanouts of all shapes and sizes. We handle them all — garage-to-full-property — with the same donation-first care and honest, volume-based pricing.",
      },
      {
        name: "Sussex",
        slug: "sussex",
        blurb:
          "Sussex is one of Waukesha County's growing communities and we're glad to serve it. From single-room cleanouts to full estate removals, we bring professional service and honest pricing to every Sussex job.",
      },
      {
        name: "Delafield",
        slug: "delafield",
        blurb:
          "Delafield's lake country setting and mix of historic and newer homes call for an estate cleanout company that handles every property with care. We serve Delafield with honest pricing and a real commitment to keeping items out of the landfill.",
      },
      {
        name: "Wales",
        slug: "wales",
        blurb:
          "Wales is a small but growing Waukesha County village and we're well-equipped to serve it. Estate cleanouts, garage clearing, junk removal — all handled with transparency, care, and honest load-based pricing.",
      },
      {
        name: "Hartland",
        slug: "hartland",
        blurb:
          "Hartland's active community and busy real estate market create steady demand for estate cleanout and junk removal. We serve Hartland with the same efficient, donation-first service we bring across Waukesha County.",
      },
      {
        name: "Elm Grove",
        slug: "elm-grove",
        blurb:
          "Elm Grove's established neighborhoods and distinctive homes mean estate cleanouts that often include quality items worth donating and preserving. We approach every Elm Grove job with a donation-first mentality and honest, transparent pricing.",
      },
      {
        name: "Dousman",
        slug: "dousman",
        blurb:
          "Dousman homeowners and families call us for dependable estate cleanout and junk removal. We serve this Waukesha County community with the same donation-first, honest-pricing approach we bring everywhere in our service area.",
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

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
      "Washington County is home to our base of operations in West Bend. Homeowners across the county trust us for fast, professional above ground pool removal — from quiet rural properties to busy residential neighborhoods. We know these roads and communities well, and we take genuine pride in serving our neighbors.",
    cities: [
      {
        name: "West Bend",
        slug: "west-bend",
        blurb:
          "West Bend is our home base, and above ground pool removal is one of our most requested services here. Whether your pool is near Regner Park or on the outskirts of town, we'll handle the full removal — draining, disassembly, hauling, and cleanup — so your yard is clear and ready for whatever comes next. We serve West Bend with same-week scheduling and straight-up pricing. Above ground pools only.",
      },
      {
        name: "Germantown",
        slug: "germantown",
        blurb:
          "Germantown homeowners call us when that aging above ground pool has run its course. Whether the liner has failed, the structure is deteriorating, or you simply want your yard back, we handle the entire removal process from start to finish. Our crew drains the pool, disassembles every component, hauls everything away, and leaves the area clean. Above ground pools only — we do not remove in-ground pools.",
      },
      {
        name: "Hartford",
        slug: "hartford",
        blurb:
          "Hartford residents trust WI Pool Removal to handle above ground pool removal quickly and cleanly. We work on older farmsteads and in-town residential properties alike, adapting to each yard's access and terrain. After we're done, you'll have open, usable space where the pool used to be. We recycle the metal frame components and dispose of the liner and other materials responsibly. Above ground pools only.",
      },
      {
        name: "Slinger",
        slug: "slinger",
        blurb:
          "Slinger is a tight-knit community, and we're proud to serve it. If your above ground pool has seen better days — or you're just ready to reclaim your backyard — our crew will handle the full removal efficiently and responsibly. We schedule quickly, work cleanly, and make sure the job site is tidy when we leave. Above ground pools only — in-ground pool removal is outside our scope.",
      },
      {
        name: "Jackson",
        slug: "jackson",
        blurb:
          "Jackson homeowners choose WI Pool Removal when they need a reliable, transparent company to remove their above ground pool. We drain the water, break down the frame and liner, haul everything off-site, and clean up the area. The metal frame components are recycled. We price jobs fairly based on pool size, access, and scope — no surprise charges on the day of service. Above ground pools only.",
      },
      {
        name: "Kewaskum",
        slug: "kewaskum",
        blurb:
          "Kewaskum homeowners and families call us for dependable above ground pool removal. Whether you're selling the property, the pool has deteriorated, or you simply want the yard space back, we'll handle everything from the initial drain to the final cleanup. We know the Kewaskum area well and schedule visits promptly. Above ground pools only — we specialize in this specific removal type.",
      },
      {
        name: "Richfield",
        slug: "richfield",
        blurb:
          "Richfield's mix of rural and residential properties keeps us busy with above ground pool removals of all sizes. Larger rural lots often have pools that have been sitting for years, and our crew is experienced handling those situations — assessing the condition, draining carefully, and breaking everything down safely. We haul away all materials and leave a clean site behind. Above ground pools only.",
      },
      {
        name: "Newburg",
        slug: "newburg",
        blurb:
          "Newburg's small-town character means neighbors know each other — and they know us. We serve Newburg families with prompt, respectful above ground pool removal. From initial contact to final site cleanup, we communicate clearly, work efficiently, and make sure you're satisfied before we leave. The metal frame is recycled; all other materials are responsibly disposed of. Above ground pools only.",
      },
      {
        name: "Allenton",
        slug: "allenton",
        blurb:
          "Allenton is a small community in Washington County where we regularly help homeowners remove aging above ground pools. Whether the pool is still standing or partially collapsed, our team handles the full scope — draining, disassembly, hauling, and site cleanup. We price jobs by scope, not by the hour, so you know what to expect before we begin. Above ground pools only.",
      },
      {
        name: "Barton",
        slug: "barton",
        blurb:
          "Barton is a quiet community just outside West Bend, and we're proud to serve our close neighbors. Above ground pool removal in Barton is something we handle regularly — from pools that are still functional to structures that have deteriorated significantly. We drain, disassemble, haul, and clean up completely. Metal components are recycled. Above ground pools only — no in-ground pool work.",
      },
    ],
  },
  {
    name: "Ozaukee County",
    slug: "ozaukee-county",
    description:
      "Ozaukee County spans beautiful Lake Michigan shoreline communities and charming inland towns. We serve homeowners throughout Ozaukee County with professional above ground pool removal — handling the full process from draining to cleanup, recycling metal components, and leaving every job site clean and ready for use.",
    cities: [
      {
        name: "Cedarburg",
        slug: "cedarburg",
        blurb:
          "Cedarburg's distinctive homes and historic character attract homeowners who value quality service. When it's time to remove your above ground pool, WI Pool Removal handles everything professionally — full drain, complete disassembly of the frame and liner, responsible hauling, and a clean finish. We work around your schedule and communicate at every step. Above ground pools only.",
      },
      {
        name: "Port Washington",
        slug: "port-washington",
        blurb:
          "Port Washington's lakeside setting and mix of property types means we regularly handle above ground pool removals in a variety of yard sizes and access conditions. Our crew is experienced working in tighter spaces and navigating gates or fences when needed. We drain, disassemble, haul, and clean up — leaving your yard ready for the next chapter. Above ground pools only.",
      },
      {
        name: "Grafton",
        slug: "grafton",
        blurb:
          "Grafton homeowners trust WI Pool Removal for straightforward, reliable above ground pool removal. We show up on time, do the work thoroughly, and leave the job site clean. The steel and aluminum frame components are recycled. Liner, hardware, and other materials are disposed of responsibly. There are no hidden fees — we quote the full job before we start. Above ground pools only.",
      },
      {
        name: "Mequon",
        slug: "mequon",
        blurb:
          "Mequon properties often feature spacious yards with above ground pools that are ready for removal after years of use. Our team handles these jobs efficiently and professionally — full drain, complete breakdown, hauling all materials, and final site cleanup. We're experienced with larger pools and complex access situations. Pricing is based on scope, quoted upfront. Above ground pools only.",
      },
      {
        name: "Thiensville",
        slug: "thiensville",
        blurb:
          "Thiensville is a small, close community where reputation matters. We serve Thiensville residents with honest, professional above ground pool removal — transparent pricing, reliable scheduling, and clean work from start to finish. We recycle metal frame components and handle all materials responsibly. When we leave, your yard is clear and ready for use. Above ground pools only.",
      },
      {
        name: "Saukville",
        slug: "saukville",
        blurb:
          "Saukville homeowners and families call us when their above ground pool needs to go. Whether the structure is still intact or has seen better days, we assess the job, provide an honest quote, and handle everything from drain to site cleanup. Our crew works efficiently and respectfully on your property. Above ground pools only — we do not handle in-ground pool removal.",
      },
      {
        name: "Fredonia",
        slug: "fredonia",
        blurb:
          "Fredonia's close-knit community deserves a pool removal company that shows up, does the job right, and treats your property with care. WI Pool Removal handles the full above ground pool removal process — draining, disassembly, hauling, and cleanup — with no surprises on the final invoice. Metal components are recycled. Above ground pools only.",
      },
      {
        name: "Belgium",
        slug: "belgium",
        blurb:
          "Belgium is a small Lake Michigan community and we're glad to serve its homeowners. If your above ground pool is past its prime or you simply want the yard space back, we'll handle the complete removal process quickly and cleanly. We price jobs honestly based on pool size and site access, and we provide a full quote before starting. Above ground pools only.",
      },
      {
        name: "Ozaukee",
        slug: "ozaukee",
        blurb:
          "Ozaukee homeowners trust WI Pool Removal for professional above ground pool removal throughout the area. We handle every aspect of the job — draining the pool, breaking down the structure, removing all materials, and cleaning the site. Metal frame components are recycled. We schedule promptly and communicate clearly throughout the process. Above ground pools only.",
      },
      {
        name: "Waubeka",
        slug: "waubeka",
        blurb:
          "Waubeka is a quiet community in Ozaukee County, and we serve it with the same professionalism we bring everywhere in our service area. Above ground pool removal in Waubeka means a full-scope job — drain, disassemble, haul, and clean up — at a fair, upfront price. Above ground pools only — in-ground pool removal is not a service we offer.",
      },
    ],
  },
  {
    name: "Fond du Lac County",
    slug: "fond-du-lac-county",
    description:
      "Fond du Lac County stretches across rich agricultural and lakeside communities in east-central Wisconsin. We travel throughout the county to provide reliable above ground pool removal — draining, disassembling, hauling, and cleaning up every job site so homeowners can reclaim their yard space.",
    cities: [
      {
        name: "Fond du Lac",
        slug: "fond-du-lac",
        blurb:
          "Fond du Lac homeowners call us when their above ground pool has reached the end of its life or they simply want to free up the yard. We handle the full removal — drain the water, take apart the frame and liner, haul everything away, and clean the site. Metal components are recycled. We serve all neighborhoods in Fond du Lac with prompt scheduling and clear pricing. Above ground pools only.",
      },
      {
        name: "Ripon",
        slug: "ripon",
        blurb:
          "Ripon's strong sense of community is something we respect. When Ripon homeowners need their above ground pool removed, we show up prepared and ready to work. Full drain, full disassembly, full haul-out — we don't leave anything behind except a clean, open yard. We recycle the metal frame and handle the rest responsibly. Above ground pools only.",
      },
      {
        name: "Waupun",
        slug: "waupun",
        blurb:
          "Waupun residents count on WI Pool Removal for dependable above ground pool removal. Whether you're preparing a property for sale, the pool has deteriorated, or you just want the space back, we handle the full scope of the job. Drain, disassemble, haul, and clean up — all included in our upfront quote. Metal is recycled. Above ground pools only.",
      },
      {
        name: "Mayville",
        slug: "mayville",
        blurb:
          "Mayville is a close community and we take that to heart. Our above ground pool removal service is built on clear communication, honest pricing, and reliable execution. We drain the pool, disassemble the frame and liner, haul everything away, and leave your yard clean and ready. We recycle metal components and dispose of everything else responsibly. Above ground pools only.",
      },
      {
        name: "Campbellsport",
        slug: "campbellsport",
        blurb:
          "Campbellsport homeowners and families trust us for complete above ground pool removal. We bring the right equipment and crew to every job, handle the full process from drain to cleanup, and price jobs fairly based on pool size and site conditions. No hidden fees, no surprises. Metal frame components are recycled. Above ground pools only.",
      },
      {
        name: "North Fond du Lac",
        slug: "north-fond-du-lac",
        blurb:
          "North Fond du Lac is a quiet village just north of the city, and we serve it with the same care and efficiency we bring to larger communities. Above ground pool removal here follows our standard full-service process — drain, disassemble, haul, and clean up — at an honest, upfront price. Above ground pools only.",
      },
      {
        name: "Lomira",
        slug: "lomira",
        blurb:
          "Lomira residents trust WI Pool Removal for reliable above ground pool removal in a smaller-community setting. We respect the character of Lomira and work professionally on every job. Drain, full disassembly, complete haul-out, and site cleanup are all included. Metal frame components are recycled. Above ground pools only — in-ground work is outside our scope.",
      },
      {
        name: "Oakfield",
        slug: "oakfield",
        blurb:
          "Oakfield is a small Fond du Lac County village and we're proud to serve it. Above ground pool removal in Oakfield means a complete job — we drain, disassemble, haul away all materials, and clean up the site. The steel or aluminum frame is recycled. We provide honest pricing before starting any work. Above ground pools only.",
      },
      {
        name: "Rosendale",
        slug: "rosendale",
        blurb:
          "Rosendale homeowners call us when it's time to remove an above ground pool. We handle the entire process — draining the water, breaking down the frame and liner, hauling everything off the property, and restoring the area to a clean, open state. Metal components are recycled. We serve Rosendale with fast scheduling and fair prices. Above ground pools only.",
      },
      {
        name: "Brandon",
        slug: "brandon",
        blurb:
          "Brandon is a small community with a lot of character, and we're glad to help its homeowners with above ground pool removal. We bring a professional crew, handle every step of the job, and leave the yard clean and ready for use. Metal from the frame is recycled. Pricing is clear and quoted before we begin. Above ground pools only.",
      },
    ],
  },
  {
    name: "Sheboygan County",
    slug: "sheboygan-county",
    description:
      "Sheboygan County is home to a mix of Lake Michigan communities, classic Wisconsin small towns, and historic neighborhoods. We serve the entire county with above ground pool removal — a specialized, full-service process that covers draining, disassembly, hauling, recycling metal components, and complete site cleanup.",
    cities: [
      {
        name: "Sheboygan",
        slug: "sheboygan",
        blurb:
          "Sheboygan's diverse neighborhoods and busy real estate market make above ground pool removal a common need. WI Pool Removal handles the full scope — drain, disassemble the frame and liner, haul away all materials, and clean up the job site. We serve all parts of Sheboygan with same-week scheduling and honest, upfront pricing. Metal components are recycled. Above ground pools only.",
      },
      {
        name: "Sheboygan Falls",
        slug: "sheboygan-falls",
        blurb:
          "Sheboygan Falls families call us when they need above ground pool removal done right. We show up on schedule, handle the complete removal process — drain, disassemble, haul, and clean — and provide a detailed quote before any work begins. There are no surprise charges. Metal frame components are recycled. Above ground pools only — we don't remove in-ground pools.",
      },
      {
        name: "Plymouth",
        slug: "plymouth",
        blurb:
          "Plymouth is a community we're proud to serve. From small pools to large ones with extensive decking, we approach every above ground pool removal the same way: honest pricing, professional execution, and a clean finish. The entire structure is removed, metal is recycled, and the area is left ready for landscaping or other use. Above ground pools only.",
      },
      {
        name: "Kohler",
        slug: "kohler",
        blurb:
          "Kohler properties are well-maintained and homeowners here expect professional service. WI Pool Removal delivers exactly that — precise, professional above ground pool removal with clear communication throughout the process. We drain, disassemble, haul all materials, and leave the site completely clean. Metal frame components are recycled. Above ground pools only.",
      },
      {
        name: "Elkhart Lake",
        slug: "elkhart-lake",
        blurb:
          "Elkhart Lake's vacation and permanent residences often need above ground pool removal as families transition between properties or prepare to sell. We handle seasonal property removals, full-time residence pools, and everything in between. Our team works efficiently, communicates clearly, and leaves the yard clean. Metal is recycled. Above ground pools only.",
      },
      {
        name: "Oostburg",
        slug: "oostburg",
        blurb:
          "Oostburg's close community ties make it a place where people value honest, straightforward service. WI Pool Removal delivers that on every above ground pool removal job — clear pricing, professional work, and a clean finish. We drain, disassemble, haul everything away, and recycle the metal frame. Above ground pools only — in-ground pool removal is not in our scope.",
      },
      {
        name: "Random Lake",
        slug: "random-lake",
        blurb:
          "Random Lake homeowners and families call us for dependable above ground pool removal. We serve this Sheboygan County community with the same full-service process we use everywhere — drain, disassemble, haul all materials, clean the site, and recycle metal components. Pricing is upfront and fair. Above ground pools only.",
      },
      {
        name: "Cedar Grove",
        slug: "cedar-grove",
        blurb:
          "Cedar Grove is a close community in Sheboygan County and we're glad to serve its homeowners. Above ground pool removal here means a complete, professional job — from draining the water to final site cleanup. All materials are removed, metal is recycled, and the area is left clean and ready. We quote all jobs before starting. Above ground pools only.",
      },
      {
        name: "Kiel",
        slug: "kiel",
        blurb:
          "Kiel is a welcoming community and we treat every above ground pool removal job here with the care it deserves. Our crew handles the full process — draining, disassembly, hauling, and site cleanup — efficiently and professionally. Metal frame components are recycled. We provide honest quotes before any work begins. Above ground pools only.",
      },
      {
        name: "Howards Grove",
        slug: "howards-grove",
        blurb:
          "Howards Grove homeowners call us when their above ground pool needs to be removed. We work promptly and efficiently, handling the complete removal — drain, disassemble, haul away all materials, and clean the site. Metal is recycled. We serve Howards Grove with fair, transparent pricing and same-week scheduling when possible. Above ground pools only.",
      },
    ],
  },
  {
    name: "Waukesha County",
    slug: "waukesha-county",
    description:
      "Waukesha County is one of the most populated counties in Wisconsin, with thriving suburbs and growing communities. We serve all corners of Waukesha County with professional above ground pool removal — handling the full process from draining and disassembly through hauling and site cleanup, with metal components recycled at every job.",
    cities: [
      {
        name: "Waukesha",
        slug: "waukesha",
        blurb:
          "Waukesha's older neighborhoods and active real estate market create steady demand for above ground pool removal. WI Pool Removal handles the full scope — drain the water, break down the frame and liner, haul everything off the property, and clean up the site. We serve all areas of Waukesha with prompt scheduling and straightforward pricing. Metal is recycled. Above ground pools only.",
      },
      {
        name: "Brookfield",
        slug: "brookfield",
        blurb:
          "Brookfield homeowners trust WI Pool Removal to handle above ground pool removal with professionalism and care. Whether you're preparing for a home sale, the pool has deteriorated, or you simply want the yard back, we handle everything — drain, disassemble, haul, and clean up. Metal components are recycled. Pricing is clear and quoted upfront. Above ground pools only.",
      },
      {
        name: "Pewaukee",
        slug: "pewaukee",
        blurb:
          "Pewaukee's lakeside neighborhoods and residential areas are great places to live — and sometimes that includes removing an old above ground pool to make the most of the yard. Our crew handles the full removal process: drain, break down the frame, remove the liner and hardware, haul everything away, and leave the area clean. Metal is recycled. Above ground pools only.",
      },
      {
        name: "Oconomowoc",
        slug: "oconomowoc",
        blurb:
          "Oconomowoc's lake country setting means homeowners value their outdoor spaces. When an above ground pool is no longer serving you, WI Pool Removal gets it out efficiently and completely. We drain, disassemble, haul, and clean — leaving open, usable yard space behind. Metal frame components are recycled. We quote jobs upfront with no hidden costs. Above ground pools only.",
      },
      {
        name: "Menomonee Falls",
        slug: "menomonee-falls",
        blurb:
          "Menomonee Falls is one of Waukesha County's larger communities, and we're fully equipped to serve it. From standard above ground pools to larger setups with attached decking, we handle jobs of all scopes. Full removal means drain, disassembly, complete haul-out, and site cleanup — all covered in our upfront quote. Metal is recycled. Above ground pools only.",
      },
      {
        name: "New Berlin",
        slug: "new-berlin",
        blurb:
          "New Berlin is a large, thriving Waukesha County suburb and we serve it with the full WI Pool Removal experience — professional crew, complete above ground pool removal, metal recycling, and a clean final site. We schedule quickly and provide honest quotes before any work begins. Whether the pool is functional or deteriorated, we handle the removal. Above ground pools only.",
      },
      {
        name: "Muskego",
        slug: "muskego",
        blurb:
          "Muskego's lakeside neighborhoods and suburban homes generate steady demand for above ground pool removal. We serve Muskego with the same full-service process we use everywhere — drain, full disassembly, complete haul-out, site cleanup, and metal recycling. Pricing is transparent and quoted upfront. Same-week scheduling when possible. Above ground pools only.",
      },
      {
        name: "Mukwonago",
        slug: "mukwonago",
        blurb:
          "Mukwonago's mix of suburban and rural properties means above ground pool removals of all shapes and sizes. Our crew handles every type — small starter pools, large family pools, pools with attached decking — with the same thorough approach: drain, disassemble, haul, clean up, recycle metal. We quote all jobs before starting. Above ground pools only.",
      },
      {
        name: "Sussex",
        slug: "sussex",
        blurb:
          "Sussex is one of Waukesha County's growing communities and we're glad to serve it. Above ground pool removal in Sussex follows our full-service process — draining the pool, breaking down the structure, removing all materials from the property, and cleaning the site. Metal components are recycled. We provide clear, upfront quotes on every job. Above ground pools only.",
      },
      {
        name: "Delafield",
        slug: "delafield",
        blurb:
          "Delafield's lake country setting and attractive properties call for a removal company that works professionally and leaves no mess behind. WI Pool Removal handles full above ground pool removal in Delafield — drain, complete disassembly, full haul-out, and site cleanup. Metal from the frame is recycled. Pricing is honest and quoted before work begins. Above ground pools only.",
      },
    ],
  },
];

export function getCounty(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}

export function getCity(
  countySlug: string,
  citySlug: string,
): { county: County; city: City } | undefined {
  const county = getCounty(countySlug);
  if (!county) return undefined;
  const city = county.cities.find((c) => c.slug === citySlug);
  if (!city) return undefined;
  return { county, city };
}

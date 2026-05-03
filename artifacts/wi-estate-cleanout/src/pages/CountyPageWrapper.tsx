import { useParams } from "wouter";
import CountyPage from "@/components/CountyPage";
import NotFound from "@/pages/not-found";
import { getCounty } from "@/data/serviceAreas";

export default function CountyPageWrapper() {
  const params = useParams<{ countySlug: string }>();
  const county = getCounty(params.countySlug);

  if (!county) return <NotFound />;

  return <CountyPage county={county} />;
}

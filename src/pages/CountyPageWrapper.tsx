import { useParams } from "wouter";
import CountyPage from "@/components/CountyPage";
import NotFound from "./not-found";
import { getCounty } from "@/data/serviceAreas";

export default function CountyPageWrapper() {
  const { countySlug } = useParams<{ countySlug: string }>();
  const county = getCounty(countySlug ?? "");
  if (!county) return <NotFound />;
  return <CountyPage county={county} />;
}

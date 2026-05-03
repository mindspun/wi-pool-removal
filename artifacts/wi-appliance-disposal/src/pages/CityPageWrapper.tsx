import { useParams } from "wouter";
import CityPage from "@/components/CityPage";
import NotFound from "@/pages/not-found";
import { getCity } from "@/data/serviceAreas";

export default function CityPageWrapper() {
  const params = useParams<{ countySlug: string; citySlug: string }>();
  const result = getCity(params.countySlug, params.citySlug);
  if (!result) return <NotFound />;
  return <CityPage county={result.county} city={result.city} />;
}

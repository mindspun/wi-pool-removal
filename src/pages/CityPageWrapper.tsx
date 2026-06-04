import { useParams } from "wouter";
import CityPage from "@/components/CityPage";
import NotFound from "./not-found";
import { getCity } from "@/data/serviceAreas";

export default function CityPageWrapper() {
  const { countySlug, citySlug } = useParams<{ countySlug: string; citySlug: string }>();
  const result = getCity(countySlug ?? "", citySlug ?? "");
  if (!result) return <NotFound />;
  return <CityPage county={result.county} city={result.city} />;
}

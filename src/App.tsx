import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Pricing from "@/pages/Pricing";
import HowItWorks from "@/pages/HowItWorks";
import Contact from "@/pages/Contact";
import ServiceAreas from "@/pages/ServiceAreas";
import FAQ from "@/pages/FAQ";
import PoolRemovalGuide from "@/pages/PoolRemovalGuide";
import NotFound from "@/pages/not-found";
import CountyPageWrapper from "@/pages/CountyPageWrapper";
import CityPageWrapper from "@/pages/CityPageWrapper";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/pool-removal-guide" component={PoolRemovalGuide} />
      <Route path="/service-areas" component={ServiceAreas} />
      <Route path="/service-areas/:countySlug" component={CountyPageWrapper} />
      <Route path="/service-areas/:countySlug/:citySlug" component={CityPageWrapper} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;

import { useEffect } from "react";

function App() {
  useEffect(() => {
    const base = import.meta.env.BASE_URL;
    const path = window.location.pathname;
    const basePath = base.replace(/\/$/, "");
    const relativePath = path.replace(basePath, "") || "/";

    // If already on a .html page, do nothing — static server served it directly
    if (relativePath.endsWith(".html")) return;

    const pageMap: Record<string, string> = {
      "": "home.html",
      "/": "home.html",
      "/home": "home.html",
      "/home/": "home.html",
      "/pricing": "pricing.html",
      "/pricing/": "pricing.html",
      "/about-us": "about-us.html",
      "/about-us/": "about-us.html",
      "/faq": "faq.html",
      "/faq/": "faq.html",
      "/contact": "contact.html",
      "/contact/": "contact.html",
      "/legal/terms-and-conditions": "terms-and-conditions.html",
      "/legal/terms-and-conditions/": "terms-and-conditions.html",
      "/legal/privacy-policy": "privacy-policy.html",
      "/legal/privacy-policy/": "privacy-policy.html",
    };

    const target = pageMap[relativePath] ?? "home.html";
    window.location.replace(`${basePath}/${target}`);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <p>Loading…</p>
    </div>
  );
}

export default App;

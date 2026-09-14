const base = "https://aiso-development-innovation.com";
const routes = ["","capabilities","sectors","product-development","formulation-development","industrial-problem-solving","product-improvement","technology-transfer","technology-licensing","industrial-partnerships","technology-portfolio","about","knowledge","contact","start-project","privacy","terms","cookies","disclaimer","development-terms","confidential-information"];
export default function sitemap() {
  return ["en","ar"].flatMap((locale) => routes.map((route) => ({
    url: `${base}/${locale}/${route ? route + "/" : ""}`,
    lastModified: new Date(),
    changeFrequency: route === "knowledge" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.75,
    alternates: { languages: { en: `${base}/en/${route ? route + "/" : ""}`, ar: `${base}/ar/${route ? route + "/" : ""}`, "x-default": `${base}/en/${route ? route + "/" : ""}` } }
  })));
}

import SiteShell from "@/src/components/SiteShell";
import { routes, getContent } from "@/src/data/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return ["en","ar"].flatMap((locale) =>
    routes.map((route) => ({ locale, slug: route ? [route] : [] }))
  );
}

export function generateMetadata({ params }) {
  const locale = params.locale === "ar" ? "ar" : "en";
  const slug = params.slug?.[0] || "";
  const t = getContent(locale);
  const page = slug ? t.pages[slug] : null;
  const title = page?.title || t.brand;
  const description = page?.lead || t.heroText;
  const path = slug ? `${slug}/` : "";
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/${path}`,
      languages: { en: `/en/${path}`, ar: `/ar/${path}`, "x-default": `/en/${path}` }
    },
    openGraph: { title, description, locale: locale === "ar" ? "ar_SA" : "en_SA" }
  };
}

function StructuredData({ locale, slug }) {
  const t = getContent(locale);
  const base = "https://aiso-development-innovation.com";
  const serviceSlugs = ["capabilities","product-development","formulation-development","industrial-problem-solving","product-improvement","technology-transfer","technology-licensing"];
  const graph = [{
    "@type":"Organization",
    "@id":`${base}/#organization`,
    name: locale === "ar" ? "أيزو للتطوير والابتكار" : "AISO Development & Innovation",
    url:`${base}/${locale}/`,
    areaServed:{ "@type":"Country", name:"Saudi Arabia" },
    description:t.heroText
  },{
    "@type":"WebSite",
    "@id":`${base}/#website`,
    url:base,
    name:t.brand,
    inLanguage:locale
  }];
  if(serviceSlugs.includes(slug)) graph.push({
    "@type":"Service",
    name:t.pages[slug]?.title,
    description:t.pages[slug]?.lead,
    provider:{ "@id":`${base}/#organization` },
    areaServed:{ "@type":"Country", name:"Saudi Arabia" }
  });
  if(slug === "knowledge") graph.push({
    "@type":"Blog",
    name:t.pages.knowledge.title,
    description:t.pages.knowledge.lead,
    inLanguage:locale,
    publisher:{ "@id":`${base}/#organization` }
  });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":graph})}}/>;
}

export default function LocalePage({ params }) {
  const locale = params.locale === "ar" ? "ar" : "en";
  const slug = params.slug?.[0] || "";
  return <><StructuredData locale={locale} slug={slug}/><SiteShell locale={locale} slug={slug}/></>;
}

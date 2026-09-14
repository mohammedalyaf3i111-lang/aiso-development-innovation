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

export default function LocalePage({ params }) {
  const locale = params.locale === "ar" ? "ar" : "en";
  const slug = params.slug?.[0] || "";
  return <SiteShell locale={locale} slug={slug}/>;
}

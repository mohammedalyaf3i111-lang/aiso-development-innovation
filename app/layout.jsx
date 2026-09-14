import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://aiso-development-innovation.com"),
  title: { default: "AISO Development & Innovation", template: "%s | AISO Development & Innovation" },
  description: "Applied industrial product development, formulation engineering and technology transfer in Saudi Arabia.",
  robots: { index: true, follow: true },
  openGraph: { type: "website", locale: "en_SA", alternateLocale: "ar_SA", siteName: "AISO Development & Innovation" },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}

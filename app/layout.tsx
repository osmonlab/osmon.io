import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const sans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const serif = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "optional",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://osmon.io"),
  title: {
    default: "osmon — software, written by software",
    template: "%s · osmon",
  },
  description:
    "osmon is a studio building agentic software for engineering teams. Sky-high ceiling, ground-level execution.",
  applicationName: "osmon",
  alternates: { canonical: "/" },
  keywords: [
    "agentic software",
    "AI engineering",
    "developer tools",
    "osmon",
    "osmon lab",
  ],
  authors: [{ name: "osmon lab" }],
  openGraph: {
    title: "osmon — software, written by software",
    description:
      "A studio building agentic software for engineering teams.",
    url: "https://osmon.io",
    siteName: "osmon",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "osmon — software, written by software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "osmon — software, written by software",
    description: "A studio building agentic software for engineering teams.",
  },
  robots: { index: true, follow: true },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://osmon.io/#org",
      name: "osmon",
      alternateName: "osmon lab",
      url: "https://osmon.io",
      email: "hello@osmon.io",
      logo: "https://osmon.io/icon",
      sameAs: [
        "https://github.com/osmonlab",
        "https://x.com/osmonlab",
        "https://linkedin.com/company/osmonlab",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tashkent",
        addressCountry: "UZ",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://osmon.io/#site",
      url: "https://osmon.io",
      name: "osmon",
      description:
        "A studio building agentic software for engineering teams.",
      publisher: { "@id": "https://osmon.io/#org" },
      inLanguage: "en",
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-canvas text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-canvas"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}

import { Ubuntu } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

import { METADATA } from "@/common/constant/metadata";
import Layout from "@/components/layouts";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const siteUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.DOMAIN ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Real Estate",
    template: "%s | Real Estate",
  },

  description: METADATA.description,

  keywords: METADATA.keyword,

  authors: [
    {
      name: METADATA.authors.name,
      url: METADATA.authors.url,
    },
  ],

  creator: METADATA.creator,

  openGraph: {
    type: "website",
    url: siteUrl,
    title: METADATA.openGraph.title,
    locale: METADATA.openGraph.locale,
    siteName: METADATA.openGraph.siteName,
    description: METADATA.openGraph.description,

    images: [
      {
        url: METADATA.openGraph.images.url,
        width: 1200,
        height: 630,
        alt: METADATA.openGraph.images.alt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: METADATA.title,
    description: METADATA.description,
    images: [`${siteUrl}/og.png`],
    creator: "@abdurrozaqf_",
  },

  manifest: METADATA.manifest,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <head />
      <body className={ubuntu.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

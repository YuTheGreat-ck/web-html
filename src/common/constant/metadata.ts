export const METADATA = {
  title: "Real Estate",
  authors: {
    name: "Abdur Rozaq Fakhruddin",
    url: process.env.DOMAIN || "https://realestate-landingpage.vercel.app/",
  },
  creator: "Abdur Rozaq F",
  // 描述可以增加更多覆盖全球市场的术语
  description:
    "Global real estate portal featuring residential, commercial, industrial, raw land, and special use properties.",
  // 关键词已调整为更广泛的全球搜索意图
  keywords: [
    "real estate for sale",
    "international property listings",
    "buy residential property",
    "commercial real estate",
    "industrial land for sale",
    "global property market",
    "investment properties",
  ],
  openGraph: {
    type: "website",
    // 改为全球通用的语言代码
    locale: "en_US", 
    title: "Real Estate",
    siteName: "Real Estate",
    url: "https://realestate-landingpage.vercel.app/",
    description:
      "Global real estate portal featuring residential, commercial, industrial, raw land, and special use properties.",
    images: {
      url: `https://realestate-landingpage.vercel.app/og.png`,
      width: 1200,
      height: 630,
      alt: "Real Estate",
    },
  },
  siteUrl: "https://realestate-landingpage.vercel.app/",
  // 建议在网页头部添加 <link rel="alternate" hreflang="x-default" ... /> 
  // 以更好地支持全球多语言/区域部署
  manifest: "https://realestate-landingpage.vercel.app/site.webmanifest",
};

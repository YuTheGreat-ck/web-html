// src/common/constant/metadata.ts
export const METADATA = {
  title: "山东胜德源环保 | 高性能环保工业吸油绵专家",
  authors: {
    name: "UIXSHUVO Team",
    url: process.env.DOMAIN || "https://example.com", 
  },
  creator: "山东胜德源环保",
  description: "山东胜德源环保提供高性能工业吸油绵，专注于工业泄漏应急处理。我们的产品具有卓越的吸附能力，助力工厂车间实现安全环保管理，符合国际安全合规标准。",
  keywords: [
    "工业吸油绵",
    "泄漏应急处理",
    "工业环保材料",
    "车间作业安全",
    "溢油清理",
    "工业吸附垫",
    "环保合规",
  ],
  openGraph: {
    type: "website",
    locale: "zh_CN", 
    title: "山东胜德源环保 | 工业环保泄漏解决方案",
    siteName: "山东胜德源环保",
    url: process.env.DOMAIN || "https://example.com",
    description: "高性能工业吸油绵，企业环保首选。让工厂车间无惧泄漏，提升作业安全效率。",
    images: {
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: "UIXSHUVO Industrial Absorbent",
    },
  },
  siteUrl: process.env.DOMAIN || "https://example.com",
  manifest: "/manifest.json",
};

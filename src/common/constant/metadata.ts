export const METADATA = {
  title: "UIXSHUVO | 高性能工业吸油绵专家",
  authors: {
    name: "UIXSHUVO Team",
    url: process.env.DOMAIN || "https://your-domain.com/", // 请替换为你真实的网站域名
  },
  creator: "UIXSHUVO",
  // 描述已更新为工业环保核心业务
  description:
    "UIXSHUVO提供高性能工业吸油绵，专注于工业泄漏应急处理。我们的产品具有卓越的吸附能力，助力工厂车间实现安全环保管理，符合国际安全合规标准。",
  // 关键词已调整为工业环保搜索意图
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
    title: "UIXSHUVO | 工业环保泄漏解决方案",
    siteName: "UIXSHUVO",
    url: process.env.DOMAIN || "https://your-domain.com/",
    description:
      "高性能工业吸油绵，企业环保首选。让工厂车间无惧泄漏，提升作业安全效率。",
    images: {
      url: `/og.png`, // 确保 public 目录下有这张图
      width: 1200,
      height: 630,
      alt: "UIXSHUVO Industrial Absorbent",
    },
  },
  siteUrl: process.env.DOMAIN || "https://your-domain.com/",
  manifest: "/manifest.json",
};

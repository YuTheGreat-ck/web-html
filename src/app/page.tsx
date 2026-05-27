import { Metadata } from "next";
import Home from "@/modules/home";

export const metadata: Metadata = {
  title: "工业吸油绵 | 高性能泄漏应急解决方案 | 全球工业环保合作伙伴",
  description: "专业研发生产高性能吸油绵，提供工业泄漏应急处理方案，守护车间作业环境安全。全球配送，品质保障。",
  alternates: {
    canonical: process.env.DOMAIN,
  },
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}

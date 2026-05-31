"use client";

import React, { lazy, Suspense } from "react";

// 懒加载组件
const Headline = lazy(() => import("@/components/sections/Headline"));
const Products = lazy(() => import("@/components/sections/ProductGrid"));
const Solutions = lazy(() => import("@/components/sections/Customers"));
const About = lazy(() => import("@/components/sections/About"));

// 简单的加载占位符，避免内容跳动
const SectionLoader = () => (
  <div className="w-full py-20 flex justify-center text-neutral-400">
    加载中...
  </div>
);

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Suspense fallback={<SectionLoader />}>
        <Headline />
        <Products />
        <Solutions />
        <About />
      </Suspense>
    </main>
  );
}

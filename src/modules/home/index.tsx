"use client";

import React, { lazy, Suspense } from "react";

const Headline = lazy(() => import("@/components/sections/Headline"));
const Products = lazy(() => import("@/components/sections/ProductGrid"));
const About = lazy(() => import("@/components/sections/About"));

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Suspense fallback={<div className="py-20 text-center">加载中...</div>}>
        <Headline />
        <Products />
        <About />
      </Suspense>
    </main>
  );
}
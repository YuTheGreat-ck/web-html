import React, { lazy } from "react";

// 引入我们刚才修改过的各个工业主题模块
const Headline = lazy(() => import("./Headline"));
const Products = lazy(() => import("./Rent"));      // 如果你重命名了 Rent.tsx 为 Products.tsx
const Solutions = lazy(() => import("./Customers")); // 如果你重命名了 Customers.tsx 为 Solutions.tsx
const About = lazy(() => import("./About"));
const VideoPlayer = lazy(() => import("./VideoPlayer"));
const Contact = lazy(() => import("./Contact"));

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Headline />
      <Products />
      <Solutions />
      <About />
      <VideoPlayer />
      <Contact />
    </main>
  );
}

import React, { lazy } from "react";

import VideoPlayer from "./VideoPlayer";
import Contact from "./Contact";
import About from "./About";

// 建议将组件重命名为符合业务逻辑的名字，或者保持原样但确保顺序合理
const Customers = lazy(() => import("./Customers")); // 行业方案
const Headline = lazy(() => import("./Headline"));   // 首页横幅
const Rent = lazy(() => import("./Rent"));           // 产品中心

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <>
      <Headline />      {/* 首页大标题 */}
      <Rent />          {/* 产品中心 (原 Rent) */}
      <Customers />     {/* 行业方案 (原 Customers) */}
      <About />         {/* 公司介绍 */}
      <VideoPlayer />   {/* 场景演示视频 */}
      <Contact />       {/* 联系我们/询盘表单 */}
    </>
  );
}

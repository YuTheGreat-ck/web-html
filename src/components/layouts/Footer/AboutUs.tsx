import Link from "next/link";
import React from "react";
import { MenuFooter } from "@/common/types/menu";

type AboutUsProps = {
  data: MenuFooter[];
};

export default function AboutUs({ data }: AboutUsProps) {
  return (
    <nav aria-label="关于我们导航">
      {/* 1. 语义化：将 h1 改为 h3，符合页脚层级 */}
      <h3 className="font-medium text-base xl:text-lg mb-4 lg:mb-8 text-white">
        关于我们
      </h3>
      
      {/* 2. 移除 capitalize，避免中文排版错位；增加过渡效果 */}
      <div className="grid grid-cols-1 gap-y-2 lg:gap-y-6 text-[14px] xl:text-base text-neutral-300">
        {data.map((item) => (
          <Link 
            // 3. 使用 item.href 作为唯一 Key，避免索引带来的潜在渲染问题
            key={item.href} 
            href={item.href}
            className="hover:text-blue-400 transition-colors duration-200"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}

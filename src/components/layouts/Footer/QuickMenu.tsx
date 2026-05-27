import Link from "next/link";
import React from "react";
import { MenuFooter } from "@/common/types/menu";

interface QuickMenuProps {
  data: MenuFooter[];
}

export default function QuickMenu({ data }: QuickMenuProps) {
  return (
    <nav aria-label="快捷菜单">
      {/* 1. 语义化：将 h1 改为 h3，符合页脚层级 */}
      <h3 className="font-medium text-base xl:text-lg mb-4 lg:mb-8 text-white">
        快捷菜单
      </h3>
      
      {/* 2. 增加过渡效果，提升交互体验 */}
      <div className="grid grid-cols-1 gap-y-2 lg:gap-y-6 text-[14px] xl:text-base text-neutral-300">
        {data.map((item) => (
          <Link 
            // 3. 使用唯一标识 href 作为 Key
            key={item.href} 
            href={item.href}
            aria-label={item.title}
            className="hover:text-blue-400 transition-colors duration-200"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}

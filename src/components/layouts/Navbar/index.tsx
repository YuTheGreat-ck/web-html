import React from "react";
import MenuItem from "@/components/header/MenuItem";
import Auth from "@/components/header/Auth";
import { MENU_ITEMS } from "@/common/constant/menu";

export default function Navbar() {
  return (
    // 使用 sticky + z-50 确保导航栏始终悬浮在页面最顶层
    <header className="w-full sticky top-0 z-50 bg-[#F4F7FC]/80 backdrop-blur-md border-b border-white/20 transition-all duration-300">
      <div className="container mx-auto px-6 lg:px-10 xl:px-36 py-4 xl:py-6 flex items-center justify-between">
        
        {/* 导航菜单区域：MenuItem 内部已处理了移动端/桌面端显示逻辑 */}
        <div className="flex-1">
          <MenuItem items={MENU_ITEMS} />
        </div>

        {/* 桌面端特有的 Auth 区域：放在这里以保持布局整洁 */}
        <div className="hidden lg:block">
          <Auth />
        </div>
        
      </div>
    </header>
  );
}

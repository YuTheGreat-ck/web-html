import React from "react";
import { MENU_ABOUT_US, MENU_CONTACT_INFO, MENU_QUICK } from "@/common/constant/menu";
import ContactInfo from "./ContactInfo";
import QuickMenu from "./QuickMenu";
import AboutUs from "./AboutUs";
import Tagline from "./Tagline";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white">
      {/* 限制最大宽度，防止超宽屏下排版散乱 */}
      <div className="max-w-[1440px] mx-auto px-6 py-12 lg:px-20 xl:px-36">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          
          {/* 品牌与订阅部分 */}
          <div className="lg:w-1/3">
            <Tagline />
          </div>
          
          {/* 导航菜单区域：使用 nav 语义化包裹 */}
          <nav className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:ml-12 xl:ml-24">
            <QuickMenu data={MENU_QUICK} />
            <AboutUs data={MENU_ABOUT_US} />
            <ContactInfo data={MENU_CONTACT_INFO} />
          </nav>
        </div>

        <hr className="my-10 border-neutral-800" />
        
        {/* 版权与合规 */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p>© {currentYear} UIXSHUVO Industrial. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-500 transition-colors">隐私政策</a>
            <a href="#" className="hover:text-blue-500 transition-colors">合规声明</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from "react";
import { MENU_ABOUT_US, MENU_CONTACT_INFO, MENU_QUICK } from "@/common/constant/menu";

import ContactInfo from "./ContactInfo";
import QuickMenu from "./QuickMenu";
import AboutUs from "./AboutUs";
import Tagline from "./Tagline";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 py-12 lg:px-20 xl:px-36 bg-black text-white">
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
        {/* 品牌与订阅部分 */}
        <div className="lg:w-1/3">
          <Tagline />
        </div>
        
        {/* 导航菜单区域 */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:ml-12 xl:ml-24">
          <QuickMenu data={MENU_QUICK} />
          <AboutUs data={MENU_ABOUT_US} />
          <ContactInfo data={MENU_CONTACT_INFO} />
        </div>
      </div>

      <hr className="my-10 border-neutral-800" />
      
      <div className="text-center text-sm text-neutral-400">
        © {currentYear} UIXSHUVO. All Rights Reserved.
      </div>
    </footer>
  );
}

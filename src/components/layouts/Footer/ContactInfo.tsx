import React from "react";
import { MenuFooter } from "@/common/types/menu";

interface ContactInfoProps {
  data: MenuFooter[];
}

export default function ContactInfo({ data }: ContactInfoProps) {
  return (
    <div className="w-full md:w-[280px]">
      <h3 className="font-semibold text-lg mb-4 lg:mb-8 text-white">联系我们</h3>
      <div className="flex flex-col gap-y-4 text-neutral-300 text-[14px] xl:text-base">
        {data.map((item, index) => {
          // 自动适配电话拨号
          if (item.title.includes("+86") || item.title.includes("400")) {
            return (
              <a key={index} href={`tel:${item.title.replace(/\s/g, '')}`} className="hover:text-blue-400 transition-colors">
                {item.title}
              </a>
            );
          }
          // 自动适配邮箱唤起
          if (item.title.includes("@")) {
            return (
              <a key={index} href={`mailto:${item.title}`} className="hover:text-blue-400 transition-colors">
                {item.title}
              </a>
            );
          }
          // 纯文本地址
          return <p key={index} className="leading-relaxed">{item.title}</p>;
        })}
      </div>
    </div>
  );
}
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";

import { toggleValue, selectToggleValue } from "@/utils/toggleSlice";
import { MenuItems } from "@/common/types/menu";

interface MenuItemProps {
  items: MenuItems[];
}

export default function MenuItem({ items }: MenuItemProps) {
  const dispatch = useDispatch();
  const toggleState = useSelector(selectToggleValue);
  const handleToggle = () => dispatch(toggleValue());

  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
      {/* 顶部 Logo 与 汉堡菜单按钮 */}
      <div className="flex justify-between items-center w-full lg:w-auto">
        <Link href="/" aria-label="返回首页">
          <Image
            src="/logo.png"
            alt="UIXSHUVO Logo"
            width={120}
            height={40}
            className="w-[120px] h-auto"
            priority
          />
        </Link>
        <button
          onClick={handleToggle}
          className="lg:hidden p-2 text-2xl"
          aria-label="切换菜单"
        >
          {toggleState ? <AiOutlineClose /> : <AiOutlineAlignRight />}
        </button>
      </div>

      {/* 桌面端导航 (始终显示) */}
      <div className="hidden lg:flex gap-x-12 tracking-wide">
        {items.map((item) => (
          <Link key={item.title} href={item.href} className="font-medium text-neutral-700 hover:text-blue-600 transition-colors">
            {item.title}
          </Link>
        ))}
      </div>

      {/* 移动端菜单 (仅在 toggleState 为 true 时显示) */}
      <div className={`lg:hidden ${toggleState ? 'flex' : 'hidden'} flex-col gap-y-6 pt-6 pb-4 border-t mt-4`}>
        {items.map((item) => (
          <Link key={item.title} href={item.href} onClick={handleToggle} className="font-medium text-neutral-700">
            {item.title}
          </Link>
        ))}
        <div className="flex flex-col gap-y-3 pt-2">
          <Button type="text" className="text-lg">登录</Button>
          <Button className="bg-black text-white rounded-xl py-5">获取报价</Button>
        </div>
      </div>
    </div>
  );
}

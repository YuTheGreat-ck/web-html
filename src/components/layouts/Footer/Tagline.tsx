import { Button, Input } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Tagline() {
  return (
    <div className="flex flex-col gap-y-6">
      {/* 品牌 Logo */}
      <Link href="/" aria-label="返回首页">
        <Image
          src="/logo-2.png"
          alt="UIXSHUVO Logo"
          width={180}
          height={60}
          className="w-[180px] h-auto"
          priority
        />
      </Link>

      {/* 品牌口号：针对工业吸油产品进行调整 */}
      <h2 className="text-base xl:text-lg text-neutral-300 leading-relaxed">
        UIXSHUVO 工业环保专家 <br /> 
        守护每一次生产安全与环境承诺
      </h2>

      {/* 订阅区块：优化了输入框的交互性 */}
      <div className="border border-neutral-700 rounded-xl overflow-hidden flex items-center justify-between p-1 bg-neutral-800">
        <Input
          placeholder="请输入您的企业邮箱"
          variant="borderless"
          className="w-full text-white placeholder:text-neutral-500"
        />
        <Button
          type="primary"
          aria-label="订阅动态"
          className="h-auto rounded-lg font-medium py-2 px-4 bg-[#4B73FF] hover:bg-[#3b60e0] border-none"
        >
          订阅
        </Button>
      </div>
    </div>
  );
}

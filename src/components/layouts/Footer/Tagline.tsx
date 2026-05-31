import { Button, Input, message } from "antd"; // 引入 message 用于交互反馈
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Tagline() {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = () => {
    setLoading(true);
    // 模拟异步订阅请求
    setTimeout(() => {
      message.success("感谢订阅，我们将为您提供最新的工业环保方案动态。");
      setLoading(false);
    }, 1000);
  };

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

      {/* 品牌口号 */}
      <h2 className="text-base xl:text-lg text-neutral-300 leading-relaxed">
        UIXSHUVO 工业环保专家 <br /> 
        守护每一次生产安全与环境承诺
      </h2>

      {/* 订阅区块 */}
      <div className="flex flex-col gap-y-2">
        <div className="border border-neutral-700 rounded-xl overflow-hidden flex items-center justify-between p-1 bg-neutral-800">
          <Input
            placeholder="请输入您的企业邮箱"
            variant="borderless"
            className="w-full text-white placeholder:text-neutral-500"
          />
          <Button
            type="primary"
            loading={loading}
            onClick={handleSubscribe}
            aria-label="订阅动态"
            className="h-auto rounded-lg font-medium py-2 px-4 bg-[#4B73FF] hover:bg-[#3b60e0] border-none"
          >
            订阅
          </Button>
        </div>
        {/* 隐私提示：增加企业用户信任度 */}
        <p className="text-[12px] text-neutral-500 px-1">
          我们尊重您的隐私，仅发送工业安全解决方案资讯。
        </p>
      </div>
    </div>
  );
}
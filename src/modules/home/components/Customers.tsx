import { MENU_CUSTOMER } from "@/common/mocks/customer";
import CardCustomer from "@/components/elements/CardCustomer";
import React from "react";

export default function Customers() {
  return (
    <section
      id="solutions"
      className="w-full flex flex-col gap-y-16 items-center px-6 md:px-16 2xl:px-48 py-28 bg-neutral-50"
    >
      {/* 标题部分：更具专业感的层级 */}
      <div className="space-y-4 text-center">
        <h2 className="font-bold text-3xl md:text-4xl xl:text-5xl text-neutral-900">
          行业应用场景与 <br className="hidden md:block" /> 客户信任之选
        </h2>
        <p className="text-neutral-500 max-w-2xl mx-auto">
          我们的吸油产品已广泛应用于石化、制造、物流等多个关键领域，助力企业实现绿色生产。
        </p>
      </div>

      {/* 卡片网格：移除 overflow-auto，使用标准的 Responsive Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MENU_CUSTOMER.map((item) => (
          <CardCustomer 
            // 建议：使用 item.id 或唯一标识符作为 key，如果数据结构中有
            key={item.title} 
            data={item} 
          />
        ))}
      </div>
      
      {/* 增加一个“查看所有案例”的 CTA 引导 */}
      <button className="text-blue-600 font-medium hover:underline transition-all">
        查看完整解决方案案例 →
      </button>
    </section>
  );
}

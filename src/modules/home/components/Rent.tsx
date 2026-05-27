import CardRent from "@/components/elements/CardRent"; // 建议重命名为 CardProduct
import { MENU_RENT } from "@/common/mocks/rent";
import { Button } from "antd";

export default function ProductGrid() {
  return (
    <section
      id="products"
      className="w-full bg-white px-6 md:px-16 2xl:px-48 py-24 flex flex-col items-center gap-y-16"
    >
      {/* 标题与描述区：优化了字体层级 */}
      <div className="w-full flex flex-col items-center text-center">
        <h2 className="font-bold text-3xl md:text-4xl xl:text-5xl mb-6 text-neutral-900">
          工业级高效吸油产品系列
        </h2>
        <p className="text-sm md:text-base xl:text-lg lg:max-w-3xl text-neutral-600 leading-relaxed">
          针对工业生产、设备维修及危化品存储场景，提供高性能吸油材料。
          从应急处理到常态维护，全方位助力工厂实现安全、绿色生产。
        </p>
      </div>

      {/* 产品展示网格：使用标准的 3 列布局 */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {MENU_RENT.map((item) => (
          <div key={item.title} className="transition-transform duration-300 hover:-translate-y-2">
            <CardRent data={item} />
          </div>
        ))}
      </div>

      {/* 动作引导 */}
      <Button
        type="primary"
        size="large"
        aria-label="查看所有产品"
        className="h-auto px-10 py-4 font-medium text-base rounded-xl bg-black text-white hover:bg-neutral-800 border-none"
      >
        查看所有产品系列 →
      </Button>
    </section>
  );
}

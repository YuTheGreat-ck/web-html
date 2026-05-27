import { Button } from "antd";

interface HeadlineProps {}

export default function Headline({}: HeadlineProps) {
  return (
    <section
      id="home"
      className="w-full h-auto bg-[#F4F7FC] px-4 lg:px-20 pt-8 pb-20"
    >
      <div className="h-[720px] rounded-2xl flex flex-col gap-y-4 md:gap-y-8 items-center relative image-headline">
        <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl xl:text-6xl flex flex-col items-center text-center mt-28">
          工业泄漏，瞬时解决 <br /> 专业吸油绵，企业环保首选
        </h1>
        <p className="text-center text-sm md:text-lg w-[260px] md:w-[460px] lg:w-[600px]">
          高性能工业吸油材料，超强吸附能力，拒绝二次污染。
          助力工厂车间实现快速清理，提升作业安全性，符合环保合规要求。
        </p>
        <Button
          aria-label="Get-Started"
          className="h-auto px-8 py-3 border border-black rounded-lg font-bold mt-10 hover:bg-black hover:text-white transition-all"
        >
          <p className="text-base lg:text-lg">申请免费试样</p>
        </Button>
        
        {/* 底部功能栏，展示吸油绵的核心卖点 */}
        <div className="hidden lg:block absolute w-full -bottom-10 px-14 2xl:px-28">
          <div className="flex justify-between bg-white rounded-xl px-12 py-6 shadow-lg">
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-lg">20倍吸附量</h1>
              <p className="font-light text-sm">高效处理溢出油污</p>
            </div>
            <div className="border-r border-gray-300" />
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-lg">环保材质</h1>
              <p className="font-light text-sm">方便回收与处置</p>
            </div>
            <div className="border-r border-gray-300" />
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-lg">快速清理</h1>
              <p className="font-light text-sm">大幅提升车间效率</p>
            </div>
            
            <Button
              type="primary"
              aria-label="Contact-Us"
              className="h-auto bg-[#4C73FF] rounded-xl px-10 py-3 text-white font-medium text-base hover:bg-blue-600"
            >
              联系销售报价
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

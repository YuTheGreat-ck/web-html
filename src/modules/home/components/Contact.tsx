import { Button } from "antd";
import Image from "next/image";

interface ContactProps {}

export default function Contact({}: ContactProps) {
  const certificates = ["ISO 9001 质量认证", "CE 安全认证", "环保生产达标", "国家专利技术", "行业推荐品牌"];

  return (
    <section id="contact" className="w-full h-auto px-6 md:px-20 py-20 bg-white">
      {/* 资质认证条：使用 flex-wrap 确保在平板端不会溢出 */}
      <div className="w-full hidden lg:flex justify-between mb-16 border-b border-gray-100 pb-12 flex-wrap gap-6">
        {certificates.map((text) => (
          <div key={text} className="text-sm font-semibold text-gray-500 flex items-center gap-2">
            <span className="text-blue-600 bg-blue-50 p-1 rounded-full">✓</span> {text}
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-y-20 items-center justify-around">
        {/* 左侧文案区 */}
        <div className="w-full lg:w-[460px] 2xl:w-[500px]">
          <h2 className="font-bold text-3xl lg:text-5xl mb-6 leading-tight">
            全方位工业泄漏 <br /> 
            <span className="text-blue-600">应急处理专家</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-10 leading-relaxed">
            我们为大型制造工厂、物流中心及石化企业提供高标准的吸油材料解决方案。
            拥有行业内完善的库存储备与快速响应物流体系，确保在泄漏发生时，
            能在最短时间内助您恢复生产环境安全。
          </p>
          <Button
            type="primary"
            size="large"
            className="h-auto bg-black rounded-xl py-4 px-12 text-white text-base font-medium hover:bg-gray-800 border-none"
          >
            联系获取报价
          </Button>
        </div>

        {/* 右侧展示区 */}
        <div className="relative">
          <Image
            src="/images/absorbent-application.jpg" 
            alt="工业吸油产品现场应用"
            priority
            width={500}
            height={580}
            className="w-full lg:w-[500px] h-[400px] lg:h-[580px] object-cover rounded-3xl shadow-lg"
          />
          
          {/* 悬浮数据卡片：增加一点动效增强视觉焦点 */}
          <div className="absolute z-[1] bottom-16 -left-12 lg:-left-24 bg-white rounded-xl px-8 py-6 shadow-2xl hidden lg:block border-l-4 border-blue-600">
            <div className="text-3xl text-blue-600 font-black mb-1">20倍</div>
            <p className="text-sm font-bold text-gray-800">超高吸油倍率</p>
            <p className="text-[10px] text-gray-400 mt-1">吸收自身重量20倍油污</p>
          </div>
        </div>
      </div>
    </section>
  );
}

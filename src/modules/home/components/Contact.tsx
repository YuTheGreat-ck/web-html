import { Button } from "antd";
import Image from "next/image";

interface ContactProps {}

export default function Contact({}: ContactProps) {
  return (
    <section id="contact" className="w-full h-auto px-4 md:px-20 py-20 bg-white">
      {/* 合作企业 Logo 区，可换成你合作的物流或工业品牌 */}
      <div className="w-full hidden lg:flex justify-between mb-16 opacity-50">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div key={index} className="text-xl font-bold italic text-gray-400">PARTNER LOGO</div>
        ))}
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-y-20 items-center justify-around">
        <div className="w-full lg:w-[460px] 2xl:w-[500px]">
          <h1 className="font-bold text-3xl lg:text-4xl 2xl:text-5xl mb-6 leading-tight">
            全方位工业泄漏 <br /> 应急处理专家
          </h1>
          <p className="text-[12px] md:text-base lg:text-[14px] mb-8 lg:mb-16 text-gray-600">
            我们为大型制造工厂、物流中心及石化企业提供高标准的吸油材料解决方案。
            拥有行业内完善的库存储备与快速响应物流体系，确保在泄漏发生时，
            能在最短时间内助您恢复生产环境安全。
          </p>
          <Button
            type="primary"
            aria-label="Contact Us"
            className="h-auto bg-black rounded-xl py-4 px-12 text-white text-base font-medium hover:bg-gray-800"
          >
            联系获取报价
          </Button>
        </div>

        <div className="relative">
          {/* 将图片路径换成你的产品实拍图，如 public/images/oil-absorbent.jpg */}
          <Image
            src={"/images/image-2.jpg"} 
            alt="工业吸油产品现场应用"
            priority
            width={500}
            height={580}
            className="w-auto h-[480px] xl:h-[580px] object-cover rounded-3xl"
          />
          
          {/* 浮窗统计，改为体现业务能力 */}
          <div className="w-[200px] absolute z-[1] bottom-16 xl:bottom-40 -left-24 bg-white rounded-xl px-8 py-4 shadow-xl hidden lg:block">
            <h1 className="text-3xl text-blue-600 font-black mb-2">500+</h1>
            <p className="text-sm font-medium">长期合作工业客户</p>
          </div>
        </div>
      </div>
    </section>
  );
}

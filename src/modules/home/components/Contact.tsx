// ... 其他引入不变
export default function Contact({}: ContactProps) {
  return (
    <section id="contact" className="w-full h-auto px-4 md:px-20 py-20 bg-white">
      
      {/* 优化建议2：将 Logo 循环改为“资质/认证”展示 */}
      <div className="w-full hidden lg:flex justify-between mb-16 border-b border-gray-100 pb-12">
        {["ISO 9001 质量认证", "CE 安全认证", "环保生产达标", "国家专利技术", "行业推荐品牌"].map((text, index) => (
          <div key={index} className="text-sm font-semibold text-gray-500 flex items-center gap-2">
             <span className="text-blue-600">✓</span> {text}
          </div>
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
            className="h-auto bg-black rounded-xl py-4 px-12 text-white text-base font-medium hover:bg-gray-800"
          >
            联系获取报价
          </Button>
        </div>

        <div className="relative">
          {/* 优化建议1：替换路径为你的实拍图 */}
          <Image
            src="/images/absorbent-application.jpg" 
            alt="工业吸油产品现场应用"
            priority
            width={500}
            height={580}
            className="w-auto h-[480px] xl:h-[580px] object-cover rounded-3xl"
          />
          
          {/* 优化建议3：数据锚点改为硬核指标 */}
          <div className="w-[220px] absolute z-[1] bottom-16 xl:bottom-40 -left-24 bg-white rounded-xl px-8 py-6 shadow-2xl hidden lg:block">
            <h1 className="text-3xl text-blue-600 font-black mb-1">20倍</h1>
            <p className="text-sm font-bold text-gray-800">超高吸油倍率</p>
            <p className="text-[10px] text-gray-400 mt-1">吸收自身重量20倍油污</p>
          </div>
        </div>
      </div>
    </section>
  );
}

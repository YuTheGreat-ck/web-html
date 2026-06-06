export default function Headline() {
  const features = [
    { title: "快速清理", desc: "大幅提升车间效率" },
    { title: "环保材质", desc: "方便安全回收与处置" },
    { title: "20倍吸附量", desc: "快速高效处理溢出油污" },
  ];

  const partners = ["石油化工", "航空航运", "港口物流", "环境保护", "汽车工程", "机械设备"];

  return (
    <section id="home" className="w-full bg-[#F4F7FC] px-6 pt-8 pb-24">
      <div className="relative rounded-3xl flex flex-col lg:flex-row items-center bg-white/50 border border-white shadow-sm overflow-hidden p-10 lg:p-20">
        
        {/* 左侧内容区 */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-neutral-900 mb-6">
            工业泄漏，瞬时解决 <br />
            <span className="text-blue-600">专业吸油绵，企业环保首选</span>
          </h1>

          <p className="text-neutral-600 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            高性能工业吸油材料，超强吸附能力，拒绝二次污染。
            助力工厂车间实现快速清理，提升作业安全性，符合环保合规要求。
          </p>

          {/* 核心指标列表：使用 index 确保唯一 key */}
          <div className="flex flex-col gap-6 mb-16 items-center lg:items-start">
            {features.map((item, index) => (
              <div key={`feature-${index}`} className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-4 text-left">
                <span className="text-[28px] text-blue-600 font-bold whitespace-nowrap">{item.title}</span>
                <span className="hidden lg:block text-neutral-300 text-2xl font-light">|</span>
                <span className="text-[22px] text-neutral-600 font-medium">{item.desc}</span>
              </div>
            ))}
          </div>

          {/* 行业适用领域：蓝色醒目标题 */}
          <div className="pt-8 border-t border-neutral-200">
            <p className="text-[28px] text-blue-700 mb-6 uppercase tracking-[0.2em] font-extrabold">行业适用领域</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {partners.map((p, index) => (
                <span key={`partner-${index}`} className="px-6 py-3 bg-white border border-neutral-200 rounded-lg text-[26px] text-neutral-800 font-semibold shadow-sm">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 右侧图片区 */}
        <div className="flex-1 w-full lg:pl-10 mt-12 lg:mt-0">
          <img 
            src="/images/image-1.jpg" 
            alt="工业吸油演示" 
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
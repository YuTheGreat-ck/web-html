export default function Headline() {
  const features = [
    { title: "快速清理", desc: "大幅提升车间效率" },
    { title: "环保材质", desc: "方便安全回收与处置" },
    { title: "20倍吸附量", desc: "快速高效处理溢出油污" },
  ];

  const partners = ["石油化工", "航空航运", "港口物流", "环境保护", "汽车工程", "机械设备"];

  return (
    <section id="home" className="w-full bg-[#F4F7FC] px-4 py-12 lg:py-24">
      <div className="max-w-7xl mx-auto rounded-3xl flex flex-col lg:flex-row items-center bg-white/60 border border-white shadow-lg overflow-hidden p-6 md:p-12 lg:p-20">
        
        <div className="flex-1 text-center lg:text-left w-full">
          {/* 核心标题：一行显示，醒目蓝色 */}
          <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-blue-600 mb-8 leading-tight whitespace-nowrap">
            工业泄漏，瞬时解决
          </h1>

          <p className="text-neutral-600 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed mx-auto lg:mx-0">
            面对工业泄漏，我们提供专业级的应急吸附解决方案。
            通过高性能环保吸油材料，实现瞬时吸附与快速清理，
            助力制造企业高效保障作业环境安全。
          </p>

          <div className="flex flex-col gap-4 mb-12 items-center lg:items-start">
            {features.map((item, index) => (
              <div key={`feat-${index}`} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-center md:text-left">
                <span className="text-xl md:text-2xl text-blue-600 font-bold whitespace-nowrap">{item.title}</span>
                <span className="hidden md:block text-neutral-300 font-light">|</span>
                <span className="text-base md:text-lg text-neutral-600 font-medium">{item.desc}</span>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-neutral-200">
            <p className="text-xl md:text-2xl text-blue-700 mb-6 uppercase tracking-widest font-extrabold">行业适用领域</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {partners.map((p, index) => (
                <span key={`part-${index}`} className="px-4 py-2 bg-white border border-neutral-100 rounded-lg text-sm md:text-base text-neutral-700 font-semibold shadow-sm hover:border-blue-200 transition-colors">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 w-full lg:pl-12 mt-12 lg:mt-0">
          <img 
            src="/images/image-1.jpg" 
            alt="工业吸油演示" 
            className="rounded-3xl shadow-xl w-full h-auto object-cover border border-white"
          />
        </div>
      </div>
    </section>
  );
}
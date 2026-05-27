interface Feature {
  count: string;
  desc: string;
}

export default function About() {
  const features: Feature[] = [
    { count: "20x", desc: "超高吸附率，吸收自身重量20倍油污" },
    { count: "0.5s", desc: "瞬时锁定，防止油污大面积扩散" },
    { count: "100%", desc: "环保材质，安全焚烧无残留" },
  ];

  return (
    <section id="about" className="w-full bg-[#0D0C1E] text-white px-8 lg:px-20 2xl:px-48 py-28">
      {/* 优势展示区 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((item) => (
          <div key={item.count} className="flex flex-col lg:flex-row items-center gap-x-6">
            <span className="font-black text-4xl 2xl:text-6xl text-blue-400">{item.count}</span>
            <p className="text-neutral-300 xl:w-[200px] text-center lg:text-left">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <hr className="my-16 lg:my-24 border-neutral-700" />
      
      {/* 方案说明区 */}
      <div className="w-full flex flex-col lg:flex-row gap-8">
        <h2 className="flex-1 font-medium text-3xl xl:text-4xl leading-tight">
          工业环保方案 <br />
          让车间环境焕然一新
        </h2>
        <p className="flex-1 text-[14px] xl:text-base leading-loose text-neutral-300">
          我们专注于高性能吸油材料的研发与生产。针对工业生产、设备维修及危化品存储场景，提供专业的泄漏应急处理方案。我们的产品不仅帮助企业降低环境污染风险，更能通过高效清理，显著提升车间作业的安全性与合规性。
        </p>
      </div>
    </section>
  );
}

interface AboutProps {}

export default function About({}: AboutProps) {
  // 你可以直接在这里定义数据，省去修改 mocks 文件的麻烦
  const features = [
    { count: "20x", desc: "超高吸附率，吸收自身重量20倍油污" },
    { count: "0.5s", desc: "瞬时锁定，防止油污大面积扩散" },
    { count: "100%", desc: "环保材质，安全焚烧无残留" },
  ];

  return (
    <section
      id="about"
      className="w-full bg-[#0D0C1E] text-white px-8 lg:px-20 2xl:px-48 py-28"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-x-8"
          >
            <h1 className="font-black text-4xl 2xl:text-6xl text-blue-400">{item.count}</h1>
            <p className="text-neutral-300 w-auto xl:w-[200px] text-center lg:text-left">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <hr className="my-16 lg:my-24 border-neutral-700" />
      
      <div className="w-full flex flex-col lg:flex-row gap-y-4 justify-between px-0 md:px-16 lg:px-0">
        <h1 className="flex-1 font-medium text-3xl xl:text-4xl leading-normal lg:leading-[1.8] xl:leading-normal">
          工业环保方案 <br />
          让车间环境焕然一新
        </h1>
        <p className="flex-1 text-[14px] xl:text-base leading-[2] xl:leading-loose text-neutral-300">
          我们专注于高性能吸油材料的研发与生产。针对工业生产、设备维修及危化品存储场景，提供专业的泄漏应急处理方案。我们的产品不仅帮助企业降低环境污染风险，更能通过高效清理，显著提升车间作业的安全性与合规性。
        </p>
      </div>
    </section>
  );
}

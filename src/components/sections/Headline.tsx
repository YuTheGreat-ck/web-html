export default function Headline() {
  const products = [
    { name: '高倍吸附片', desc: '三层复合，极强疏水亲油，吸附速提40%。' },
    { name: '工业围油栏', desc: '抗紫外线，强拉力接头，复杂水域首选。' },
    { name: '轻量吸油条', desc: '高柔韧性，精准覆盖设备溢油点。' }
  ];

  return (
    <section className="py-20 bg-gray-50 text-center px-4">
      {/* 核心品牌区 */}
      <h1 className="text-5xl font-extrabold text-industrial-blue mb-6 tracking-tight">
        高性能工业吸油绵 - 溢油治理的专业利器
      </h1>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
        采用尖端聚丙烯熔喷技术，提供高达自身重量20倍的超强吸附能力。
        助力全球化工厂与港口实现高效安全治理。
      </p>

      {/* 快捷导航区 */}
      <div className="flex justify-center gap-4 mb-16">
        <button className="bg-industrial-blue text-white px-8 py-3 rounded shadow-lg hover:bg-blue-700 transition">申请样品测试</button>
        <button className="border border-industrial-blue text-industrial-blue px-8 py-3 rounded hover:bg-blue-50 transition">查看技术参数</button>
      </div>

      {/* 嵌入式产品概览 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((p) => (
          <div key={p.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-lg font-bold text-blue-900 mb-2">{p.name}</h3>
            <p className="text-sm text-gray-500">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

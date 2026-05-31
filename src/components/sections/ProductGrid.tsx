export default function ProductGrid() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">产品规格</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {['高吸附棉片', '吸油围油栏', '工业吸油条'].map((item) => (
          <div key={item} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-industrial-blue">{item}</h3>
            <p className="mt-2 text-gray-500">专为严苛工业环境设计，吸附量大，处理快速。</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import Image from "next/image";

export default function About() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <Image
            src="/images/image-2.jpg"
            alt="工业环保解决方案"
            width={800}
            height={600}
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-industrial-blue mb-6">
            关于我们
          </h2>

          <p className="text-gray-700 leading-relaxed">
            我们深耕工业吸油领域多年，
            致力于提供专业吸油绵产品和工业泄漏应急解决方案，
            帮助企业实现安全生产与环保合规。
          </p>
        </div>

      </div>
    </section>
  );
}

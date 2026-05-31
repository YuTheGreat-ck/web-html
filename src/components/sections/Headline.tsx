import Image from "next/image";

export default function Headline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-5xl font-bold text-industrial-blue mb-6">
            高效吸油绵 - 工业环保首选
          </h1>

          <p className="text-xl text-gray-600">
            针对工业溢油治理提供高性能、高吸附率的解决方案。
          </p>
        </div>

        <div>
          <Image
            src="/images/image-1.jpg"
            alt="工业吸油绵"
            width={800}
            height={600}
            className="rounded-xl shadow-lg w-full"
            priority
          />
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";

const products = [
  {
    title: "车辆工程",
    image: "/images/default-profile-2.jpg",
  },
  {
    title: "环保吸油绵",
    image: "/images/image-5.jpg",
  },
  {
    title: "工业吸油条",
    image: "/images/image-6.jpg",
  },
  {
    title: "工业围油栏",
    image: "/images/default-profile-1.jpg",
  },
  {
    title: "工业吸油绵",
    image: "/images/image-8.jpg",
  },
  {
    title: "工业吸附材料",
    image: "/images/image-9.jpg",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          产品展示
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Card } from "antd";
import { 
  MdOutlineLayers, 
  MdOutlineInventory2, 
  MdOutlineStraighten 
} from "react-icons/md";
import { PiDropFill } from "react-icons/pi";

import { formatCurrency } from "@/utils/formatter";
import { Product } from "@/common/types/response"; // 假设你已更新接口

interface CardProductProps {
  data: Product;
}

export default function CardProduct({ data }: CardProductProps) {
  return (
    <Card
      cover={
        <Image
          alt={data.title}
          src={data.image}
          priority
          width={600}
          height={400}
          className="w-full h-[250px] xl:h-[300px] object-cover"
        />
      }
      className="rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="px-1 py-2">
        <h2 className="text-[#4B73FF] font-bold text-xl lg:text-2xl mb-1">
          {typeof data.price === 'number' ? formatCurrency(data.price) : data.price}
        </h2>
        <h3 className="font-semibold text-lg lg:text-xl text-gray-800 mb-4">
          {data.title}
        </h3>

        <div className="border-t pt-4 text-[13px] text-gray-600">
          <div className="grid grid-cols-2 gap-y-3">
            <span className="flex items-center gap-x-2">
              <PiDropFill className="text-blue-500" /> {data.specs.absorption}
            </span>
            <span className="flex items-center gap-x-2">
              <MdOutlineLayers className="text-blue-500" /> {data.specs.material}
            </span>
            <span className="flex items-center gap-x-2">
              <MdOutlineStraighten className="text-blue-500" /> {data.specs.dimension}
            </span>
            <span className="flex items-center gap-x-2">
              <MdOutlineInventory2 className="text-blue-500" /> {data.location}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

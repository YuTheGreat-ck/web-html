import { Product } from "../types/response"; // 建议将 Rent 改为 Product

export const PRODUCT_LIST: Product[] = [
  {
    id: "1",
    title: "重型工业吸油卷 (HD-Series)",
    price: 1200, // 建议单价或起售价
    location: "库存：现货充足", // 改为库存状态或产地
    image: "/images/image-1.jpg",
    specs: {
      absorption: "200L/卷",
      material: "聚丙烯",
      dimension: "40cm x 50m",
    },
  },
  {
    id: "2",
    title: "高分子吸油片 (Premium-Pad)",
    price: 850,
    location: "库存：500包",
    image: "/images/image-2.jpg",
    specs: {
      absorption: "1.2L/片",
      material: "高密度纤维",
      dimension: "40cm x 50cm",
    },
  },
  // ... 其他产品
];

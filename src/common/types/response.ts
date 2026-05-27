// 1. 将 Rent 改为 Product，使其更通用
export interface Product {
  id: string;               // 增加唯一标识符
  title: string;
  price: number;
  category: string;         // 新增：区分产品类型（如：吸油卷、吸油片、吸油枕）
  image: string;
  description: string;      // 新增：产品简短描述
  specs: {                  // 将 rooms 结构修改为更符合工业产品的参数
    absorption: string;     // 吸附能力 (例如: "200L/卷")
    material: string;       // 材质 (例如: "聚丙烯")
    size: string;           // 尺寸 (例如: "40cm x 50m")
  };
}

// 2. 优化 Customer 接口
export interface Customer {
  id: string;               // 增加唯一标识符
  name: string;
  image: string;
  position: string;
  company: string;          // 新增：将公司名从 position 中拆分出来，结构更清晰
  message: string;
  rating?: number;          // 新增：可选的评分字段
}

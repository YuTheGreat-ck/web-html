// 1. 导航菜单项 (通常用于 Header/Navbar)
export interface NavItem {
  title: string;
  href: string;
  isActive?: boolean; // 可选：用于标记当前页面高亮
}

// 2. 标题区组件 (如 Hero Section 或 Section Header)
export interface SectionHeader {
  title: string;
  subtitle: string;
  description?: string; // 可选：增加描述性文字，提升 UI 灵活性
}

// 3. 页脚菜单项 (通常用于 Footer，与 NavItem 高度相似)
// 建议直接复用 NavItem，或者明确区分用途
export interface FooterItem {
  title: string;
  href: string;
  target?: "_blank" | "_self"; // 可选：Footer 常需跳转外部链接
}

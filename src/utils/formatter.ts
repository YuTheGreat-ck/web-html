/**
 * 工业吸油产品价格格式化工具
 * 提供了价格格式化、空值处理及货币转换支持
 */

/**
 * 格式化货币函数
 * @param price - 价格数值
 * @param currency - 货币代码，默认为 USD
 * @param locale - 地区格式，默认为 en-US
 * @param fractionDigits - 小数位数，默认为 2
 */
export function formatCurrency(
  price: number | undefined | null,
  currency: string = "USD",
  locale: string = "en-US",
  fractionDigits: number = 2
): string {
  // 1. 数据防御性编程：防止传入非法数值导致崩溃
  if (price === undefined || price === null || typeof price !== 'number' || isNaN(price)) {
    return "咨询报价"; // 工业场景下，未定价或缺失价格通常显示为咨询
  }

  try {
    // 2. 使用标准 Intl.NumberFormat 进行本地化处理
    const formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    });

    return formatter.format(price);
  } catch (error) {
    // 3. 错误降级处理：防止货币代码输入错误导致报错
    console.warn(`Format currency error:`, error);
    return `${currency} ${price.toFixed(fractionDigits)}`;
  }
}

/**
 * 格式化大数值（如：吸油量/库存量）
 * @param value - 数值
 * @param unit - 单位，如 "kg" 或 "m²"
 */
export function formatNumber(value: number, unit: string = ""): string {
  if (isNaN(value)) return "0" + unit;
  return `${value.toLocaleString()}${unit ? " " + unit : ""}`;
}
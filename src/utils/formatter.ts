/**
 * 格式化货币函数
 * @param price - 价格数值
 * @param currency - 货币代码，默认为 USD
 * @param locale - 地区格式，默认为 en-US
 */
export function formatCurrency(
  price: number, 
  currency: string = "USD", 
  locale: string = "en-US"
): string {
  // 使用 Intl 构造函数
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    // 对于工业产品，有时可能需要精确到 0 或 2 位小数
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(price);
}

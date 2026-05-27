/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // 强制 Next.js 输出为纯静态 HTML
  images: {
    unoptimized: true,   // 静态导出时必须禁用内置图片优化
  },
}

module.exports = nextConfig

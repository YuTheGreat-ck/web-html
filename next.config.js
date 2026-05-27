/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 增加下面这行，防止构建时的路径异常
  trailingSlash: true,
}

module.exports = nextConfig

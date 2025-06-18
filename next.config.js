/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages用の設定
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  basePath: process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : '',
  // 静的エクスポート用の設定（Next.js 14+）
  output: 'export'
}

module.exports = nextConfig

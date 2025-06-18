/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // GitHub Pages のベースパスを設定
  // リポジトリ名が 'quiz-game-nextjs' の場合は '/quiz-game-nextjs' を設定
  // ユーザーページ（username.github.io）の場合は空文字列 '' を設定
  basePath: '/quiz-game-nextjs',
  assetPrefix: '/quiz-game-nextjs',
  // 静的エクスポートを有効化
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

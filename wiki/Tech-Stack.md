# 技術スタック選定

## 🛠️ 選定した技術スタック

### フロントエンド

#### Next.js 15.3.3
**選定理由:**
- 最新の React 19 サポート
- 静的サイト生成 (SSG) 対応
- GitHub Pages との親和性
- TypeScript ネイティブサポート

**主要機能:**
```javascript
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  output: 'export', // 静的エクスポート
  turbopack: {
    // Turbopack最適化
  }
}
```

#### TypeScript
**選定理由:**
- 型安全性の確保
- 開発効率の向上
- IDE サポートの充実
- バグの早期発見

**型定義例:**
```typescript
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  links?: {
    title: string;
    url: string;
  }[];
}
```

### スタイリング

#### Custom CSS + CSS Modules
**選定理由:**
- 軽量で高速
- 細かいカスタマイズが可能
- Next.js との統合が良好
- 学習コストが低い

**主要スタイル:**
```css
/* グローバルスタイル */
:root {
  --primary-color: #FF9900;
  --secondary-color: #232F3E;
  --text-color: #ffffff;
  --millionaire-gold: #FFD700;
  --millionaire-silver: #C0C0C0;
}

/* レスポンシブデザイン */
@media screen and (max-width: 768px) {
  .quiz-container {
    height: calc(100vh - 160px);
    padding: 0.8rem;
  }
}
```

### データ管理

#### TypeScript + Static Data
**選定理由:**
- シンプルな構造
- 型安全性
- ビルド時最適化
- 外部依存なし

**データ構造:**
```typescript
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Amazon S3のコンソールURLは？",
    options: [
      "https://s3.amazon.com/",
      "https://console.aws.amazon.com/s3/",
      "https://s3.aws.amazon.com/",
      "https://aws.amazon.com/s3/"
    ],
    correctAnswer: 1,
    explanation: "Amazon S3のコンソールページは..."
  }
];
```

## 🚀 デプロイメント

### GitHub Pages
**選定理由:**
- 無料ホスティング
- 自動デプロイ
- カスタムドメイン対応
- HTTPS 標準対応

### GitHub Actions
**CI/CD パイプライン:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v4
    
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: actions/deploy-pages@v4
```

## 🎨 UI/UX ライブラリ

### カスタムアニメーション
**実装例:**
```css
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.quiz-container {
  animation: scaleIn 0.7s ease-out 0.4s both;
}
```

### レスポンシブデザイン
**ブレークポイント:**
- デスクトップ: 1024px+
- タブレット: 768px - 1023px
- スマートフォン: 320px - 767px

## 📱 モバイル対応

### ビューポート設定
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
```

### 動的ビューポート高さ
```javascript
useEffect(() => {
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  setVH();
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', setVH);
}, []);
```

## 🔧 開発ツール

### Amazon Q CLI
**活用場面:**
- コード生成とリファクタリング
- バグ修正とデバッグ
- パフォーマンス最適化
- ベストプラクティス適用

### ESLint + TypeScript
**設定:**
```json
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "prefer-const": "error"
  }
}
```

## 📊 パフォーマンス最適化

### 静的生成 (SSG)
- ビルド時にHTMLを生成
- 高速な初期表示
- SEO最適化

### 画像最適化
```javascript
// next.config.js
images: {
  unoptimized: true // GitHub Pages対応
}
```

### バンドル最適化
- Tree shaking
- Code splitting
- Minification

---

**前のステップ**: [プロジェクト初期化](./Project-Setup.md)  
**次のステップ**: [UI/UX設計](./UI-UX-Design.md)

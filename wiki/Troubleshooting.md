# トラブルシューティング

## 🚨 よくある問題と解決策

### 1. ビルドエラー

#### TypeScript 型エラー
**問題**:
```bash
Type error: Property 'text' does not exist in type '{ title: string; url: string; }'
```

**原因**: インターフェース定義と実装の不一致

**解決策**:
```typescript
// 間違い
links: [{ text: "タイトル", url: "URL" }]

// 正解
links: [{ title: "タイトル", url: "URL" }]
```

#### Next.js 設定エラー
**問題**:
```bash
The config property `experimental.turbo` is deprecated
```

**解決策**:
```javascript
// next.config.js
const nextConfig = {
  // 修正前
  experimental: {
    turbo: {}
  },
  
  // 修正後
  turbopack: {}
}
```

### 2. モバイル表示問題

#### Android Chrome でタイトルが見切れる
**問題**: アドレスバーがタイトルを隠す

**解決策**:
```css
/* 動的ビューポート高さの設定 */
@media screen and (max-width: 768px) {
  .container {
    min-height: calc(var(--vh, 1vh) * 100);
    padding-top: 0.8rem !important;
  }
  
  h1 {
    margin-top: 0.8rem !important;
    font-size: clamp(1rem, 3.5vw, 1.3rem) !important;
  }
}
```

```javascript
// JavaScript での動的調整
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

#### iOS Safari での表示崩れ
**問題**: セーフエリアの考慮不足

**解決策**:
```css
/* セーフエリア対応 */
.container {
  padding-top: max(0.8rem, env(safe-area-inset-top));
  padding-bottom: max(0.5rem, env(safe-area-inset-bottom));
}
```

### 3. デプロイメント問題

#### GitHub Pages でページが表示されない
**問題**: 404 エラーが発生

**解決策**:
1. `.nojekyll` ファイルの確認
```bash
# public/.nojekyll ファイルが存在するか確認
ls -la public/
```

2. GitHub Pages 設定の確認
- Settings > Pages > Source を "GitHub Actions" に設定
- Build and deployment の状態を確認

#### ビルドが失敗する
**問題**: Node.js バージョンの不一致

**解決策**:
```yaml
# .github/workflows/deploy.yml
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '20'  # 最新LTSを指定
    cache: 'npm'
```

### 4. パフォーマンス問題

#### 初期表示が遅い
**問題**: JavaScript バンドルサイズが大きい

**解決策**:
```javascript
// 動的インポートの活用
const Quiz = dynamic(() => import('../components/Quiz'), {
  loading: () => <p>Loading...</p>
});

// 不要なライブラリの削除
npm uninstall unused-package
```

#### アニメーションがカクつく
**問題**: CSS アニメーションの最適化不足

**解決策**:
```css
/* GPU加速の活用 */
.option-button {
  transform: translateZ(0);
  will-change: transform;
}

/* 60fps を維持するアニメーション */
@keyframes smoothFade {
  0% { opacity: 0; transform: translate3d(0, 20px, 0); }
  100% { opacity: 1; transform: translate3d(0, 0, 0); }
}
```

### 5. データ関連問題

#### 問題データの不整合
**問題**: 正解インデックスが間違っている

**解決策**:
```typescript
// データ検証関数
const validateQuizData = () => {
  quizQuestions.forEach((question, index) => {
    if (question.correctAnswer >= question.options.length) {
      console.error(`Question ${index + 1}: Invalid correctAnswer index`);
    }
    
    if (!question.options[question.correctAnswer]) {
      console.error(`Question ${index + 1}: Correct answer is undefined`);
    }
  });
};
```

#### URL の有効性チェック
**問題**: リンク切れのURL

**解決策**:
```typescript
// URL検証スクリプト
const checkUrls = async () => {
  for (const question of quizQuestions) {
    for (const option of question.options) {
      if (option.startsWith('http')) {
        try {
          const response = await fetch(option, { method: 'HEAD' });
          if (!response.ok) {
            console.warn(`Invalid URL in question ${question.id}: ${option}`);
          }
        } catch (error) {
          console.error(`Error checking URL: ${option}`, error);
        }
      }
    }
  }
};
```

## 🔧 デバッグツール

### 1. ブラウザ開発者ツール

#### Console での確認
```javascript
// 現在の問題データを確認
console.log('Current question:', currentQuestion);

// ビューポート情報の確認
console.log('Viewport:', {
  width: window.innerWidth,
  height: window.innerHeight,
  vh: window.innerHeight * 0.01
});
```

#### Network タブでの確認
- 静的ファイルの読み込み状況
- 404エラーの特定
- 読み込み時間の測定

### 2. React Developer Tools

#### Component の状態確認
```javascript
// Quiz コンポーネントの状態
{
  shuffledQuestions: [...],
  currentQuestionIndex: 0,
  score: 0,
  selectedOption: null,
  showResult: false
}
```

### 3. Lighthouse での分析

#### パフォーマンス測定
```bash
# Chrome DevTools > Lighthouse
# または
npm install -g lighthouse
lighthouse https://your-site.github.io/aws-url-quiz/
```

## 📱 デバイス別テスト

### iOS Safari
```css
/* iOS特有の問題対応 */
.option-button {
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}

/* iOS のズーム無効化 */
input, select, textarea {
  font-size: 16px; /* 16px未満だとズームが発生 */
}
```

### Android Chrome
```css
/* Android Chrome のアドレスバー対応 */
@supports (height: 100dvh) {
  .container {
    min-height: 100dvh !important;
  }
}
```

### デスクトップブラウザ
```css
/* Firefox での表示調整 */
@-moz-document url-prefix() {
  .quiz-container {
    /* Firefox特有のスタイル調整 */
  }
}
```

## 🚀 パフォーマンス最適化

### バンドルサイズの確認
```bash
# Next.js Bundle Analyzer
npm install --save-dev @next/bundle-analyzer

# next.config.js に追加
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# 実行
ANALYZE=true npm run build
```

### 画像最適化
```javascript
// next.config.js
const nextConfig = {
  images: {
    unoptimized: true, // GitHub Pages用
    formats: ['image/webp', 'image/avif']
  }
}
```

## 🔍 監視とログ

### エラー追跡
```javascript
// エラーハンドリング
useEffect(() => {
  const handleError = (error) => {
    console.error('Quiz Error:', error);
    // エラー報告サービスに送信（将来実装）
  };
  
  window.addEventListener('error', handleError);
  return () => window.removeEventListener('error', handleError);
}, []);
```

### パフォーマンス監視
```javascript
// Core Web Vitals の測定
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## 📞 サポートとフィードバック

### Issue 報告
GitHub Issues を使用して以下の情報を提供：
- 発生した問題の詳細
- 再現手順
- 使用環境（OS、ブラウザ、デバイス）
- スクリーンショット（可能であれば）

### 改善提案
- 新機能の提案
- UI/UX の改善案
- パフォーマンス最適化の提案
- 新しい問題の追加提案

---

**前のステップ**: [デプロイメント](./Deployment.md)  
**戻る**: [ホーム](./Home.md)

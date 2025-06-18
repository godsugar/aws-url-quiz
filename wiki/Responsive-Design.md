# レスポンシブ対応

## 📱 モバイルファーストアプローチ

### 設計思想
1. **モバイル優先**: 最小画面から設計開始
2. **プログレッシブエンハンスメント**: 大画面で機能追加
3. **タッチフレンドリー**: 指での操作を考慮
4. **パフォーマンス重視**: 軽量で高速な表示

## 🎯 ブレークポイント戦略

### 定義されたブレークポイント
```css
/* スマートフォン (デフォルト) */
/* 320px - 767px */

/* タブレット */
@media screen and (max-width: 768px) {
  /* タブレット専用スタイル */
}

/* 小型スマートフォン */
@media screen and (max-width: 480px) {
  /* 小画面専用スタイル */
}

/* 超小画面 (高さ基準) */
@media screen and (max-height: 600px) {
  /* 縦幅が狭い画面用 */
}
```

### デバイス別最適化

#### デスクトップ (1024px+)
```css
.quiz-container {
  max-width: 1000px;
  height: 75vh;
  padding: 1rem;
  grid-template-rows: auto 180px 140px auto;
}

.option-button {
  font-size: 0.85rem;
  padding: 0.8rem;
  height: 60px;
}
```

#### タブレット (768px - 1023px)
```css
@media screen and (max-width: 768px) {
  .quiz-container {
    height: calc(100vh - 160px);
    min-height: 450px;
    padding: 0.8rem;
    grid-template-rows: auto minmax(140px, 1fr) minmax(110px, auto) auto;
  }
  
  .option-button {
    font-size: 0.8rem;
    padding: 0.7rem;
    height: 55px;
  }
}
```

#### スマートフォン (320px - 767px)
```css
@media screen and (max-width: 480px) {
  .quiz-container {
    padding: 0.6rem;
    grid-gap: 0.6rem;
  }
  
  .option-button {
    font-size: 0.75rem;
    padding: 0.6rem;
    height: 50px;
  }
}
```

## 🔧 Android Chrome特別対応

### 問題: アドレスバーによる表示領域の変動
Android Chromeでは、スクロール時にアドレスバーが表示/非表示になり、ビューポート高さが動的に変化します。

### 解決策: 動的ビューポート高さ計算

#### JavaScript実装
```javascript
useEffect(() => {
  const setVH = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  setVH();
  window.addEventListener('resize', setVH);
  window.addEventListener('orientationchange', setVH);
  
  return () => {
    window.removeEventListener('resize', setVH);
    window.removeEventListener('orientationchange', setVH);
  };
}, []);
```

#### CSS実装
```css
.container {
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
}

@media screen and (max-width: 768px) {
  .container {
    padding-top: 0.8rem !important;
  }
  
  main {
    padding-top: 0.8rem !important;
  }
}
```

### タイトル表示問題の解決

#### 問題
- アドレスバーがタイトルを隠す
- 画面上部の表示が見切れる

#### 解決策
```css
/* 十分な上部余白を確保 */
@media screen and (max-width: 768px) {
  h1 {
    font-size: clamp(1rem, 3.5vw, 1.3rem) !important;
    margin-top: 0.8rem !important;
    margin-bottom: 0.4rem !important;
    padding: 0.4rem 0 !important;
  }
}

/* 超小画面での調整 */
@media screen and (max-height: 600px) {
  .container {
    padding-top: 0.5rem !important;
  }
  
  h1 {
    margin: 0.3rem 0 !important;
    padding: 0.2rem 0 !important;
  }
}
```

## 🎨 レスポンシブタイポグラフィ

### clamp()関数の活用
```css
/* タイトル */
h1 {
  font-size: clamp(1rem, 3.5vw, 1.4rem);
  line-height: 1.1;
}

/* 問題文 */
.question-text {
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  line-height: 1.4;
}

/* 選択肢 */
.option-button {
  font-size: clamp(0.75rem, 2vw, 0.85rem);
}

/* スコア表示 */
.summary p:first-child {
  font-size: clamp(1.6rem, 4vw, 2rem);
}
```

### デバイス別フォントサイズ
```css
/* デスクトップ */
.summary p:first-child { font-size: 2rem; }
.summary p { font-size: 1.6rem; }

/* タブレット */
@media screen and (max-width: 768px) {
  .summary p:first-child { font-size: 1.8rem !important; }
  .summary p { font-size: 1.6rem !important; }
}

/* スマートフォン */
@media screen and (max-width: 480px) {
  .summary p:first-child { font-size: 1.6rem !important; }
  .summary p { font-size: 1.4rem !important; }
}
```

## 🎯 タッチインターフェース最適化

### ボタンサイズ
```css
.option-button {
  min-height: 44px; /* iOS推奨最小タッチサイズ */
  padding: 0.8rem;
  cursor: pointer;
}

/* モバイルでのタッチ最適化 */
@media screen and (max-width: 768px) {
  .option-button {
    min-height: 48px; /* Android推奨サイズ */
    padding: 0.7rem;
  }
}
```

### タッチフィードバック
```css
.option-button {
  transition: all 0.3s ease;
  -webkit-tap-highlight-color: transparent;
}

.option-button:active {
  transform: scale(0.98);
  background: rgba(255, 153, 0, 0.1);
}
```

## 📐 Grid Layout の レスポンシブ対応

### デスクトップレイアウト
```css
.quiz-container {
  display: grid;
  grid-template-rows: auto 180px 140px auto;
  grid-gap: 1rem;
  height: 75vh;
}

.options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
}
```

### モバイルレイアウト
```css
@media screen and (max-width: 768px) {
  .quiz-container {
    grid-template-rows: auto minmax(140px, 1fr) minmax(110px, auto) auto;
    grid-gap: 0.8rem;
  }
  
  .options-grid {
    grid-template-columns: 1fr; /* 1列レイアウト */
    gap: 0.6rem;
  }
}
```

## 🖼️ 画像・アイコンの最適化

### SVG Favicon
```svg
<!-- レスポンシブSVGファビコン -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <!-- 32x32から180x180まで自動スケール -->
</svg>
```

### Apple Touch Icon
```html
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-capable" content="yes" />
```

## 🎪 アニメーションの最適化

### パフォーマンス重視
```css
/* GPU加速を活用 */
.option-button {
  transform: translateZ(0);
  will-change: transform;
}

/* モバイルでのアニメーション軽量化 */
@media screen and (max-width: 768px) {
  .option-button {
    transition: transform 0.2s ease; /* 短縮 */
  }
  
  /* 複雑なアニメーションを無効化 */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
}
```

## 📱 PWA対応準備

### メタタグ設定
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no" />
<meta name="theme-color" content="#232F3E" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
```

### 将来のmanifest.json
```json
{
  "name": "AWS URLクイズ",
  "short_name": "AWS Quiz",
  "description": "AWSサービスのURL知識を試すクイズ",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#232F3E",
  "theme_color": "#FF9900",
  "icons": [
    {
      "src": "/apple-touch-icon.png",
      "sizes": "180x180",
      "type": "image/png"
    }
  ]
}
```

## 🔍 テスト戦略

### デバイステスト
- **iPhone Safari**: iOS 15+
- **Android Chrome**: Android 10+
- **iPad Safari**: iPadOS 15+
- **Desktop Chrome**: 最新版
- **Desktop Firefox**: 最新版

### 画面サイズテスト
- 320px (iPhone SE)
- 375px (iPhone 12)
- 768px (iPad)
- 1024px (Desktop)
- 1920px (Large Desktop)

### 機能テスト
- タッチ操作
- キーボードナビゲーション
- 画面回転
- ズーム操作
- アドレスバー表示/非表示

---

**前のステップ**: [問題データ作成](./Quiz-Data.md)  
**次のステップ**: [デプロイメント](./Deployment.md)

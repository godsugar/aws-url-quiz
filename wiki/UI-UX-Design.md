# UI/UX設計

## 🎨 デザインコンセプト

### テーマ: "AWS Millionaire Style"
- **カラーパレット**: AWS公式カラー + ゴールド/シルバー
- **フォント**: モダンで読みやすいサンセリフ
- **アニメーション**: 滑らかで上品な動き
- **レイアウト**: カード型のクリーンなデザイン

### カラーシステム
```css
:root {
  --primary-color: #FF9900;      /* AWS Orange */
  --secondary-color: #232F3E;    /* AWS Dark Blue */
  --text-color: #ffffff;         /* White Text */
  --millionaire-gold: #FFD700;   /* Gold Accent */
  --millionaire-silver: #C0C0C0; /* Silver Border */
  --correct-color: #4CAF50;      /* Success Green */
  --incorrect-color: #F44336;    /* Error Red */
}
```

## 📱 レスポンシブデザイン

### ブレークポイント戦略
```css
/* デスクトップファースト */
.quiz-container {
  max-width: 1000px;
  height: 75vh;
}

/* タブレット */
@media screen and (max-width: 768px) {
  .quiz-container {
    height: calc(100vh - 160px);
    padding: 0.8rem;
  }
}

/* スマートフォン */
@media screen and (max-width: 480px) {
  .quiz-container {
    min-height: 450px;
    grid-gap: 0.6rem;
  }
}
```

### Android Chrome対応
```javascript
// 動的ビューポート高さ設定
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

## 🎭 アニメーション設計

### ページ遷移アニメーション
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

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
```

### インタラクションアニメーション
```css
.option-button {
  transition: all 0.3s ease;
  transform: translateY(0);
}

.option-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 153, 0, 0.3);
}

.option-button.correct {
  animation: correctPulse 0.6s ease-out;
}

.option-button.incorrect {
  animation: incorrectShake 0.5s ease-out;
}
```

## 🖼️ レイアウト構造

### Grid Layout System
```css
.quiz-container {
  display: grid;
  grid-template-rows: auto 180px 140px auto;
  grid-gap: 1rem;
  height: 75vh;
}

/* モバイル対応 */
@media screen and (max-width: 768px) {
  .quiz-container {
    grid-template-rows: auto minmax(140px, 1fr) minmax(110px, auto) auto;
  }
}
```

### コンポーネント階層
```
Quiz Container
├── Header (問題番号・進捗)
├── Question Display (問題文)
├── Options Grid (選択肢)
└── Controls (解説ボタン・次へ)
```

## 🎯 ユーザビリティ設計

### インタラクション設計
1. **問題表示**: フェードインアニメーション
2. **選択肢クリック**: 即座に色変化
3. **正解表示**: グリーンのパルスアニメーション
4. **不正解表示**: レッドのシェイクアニメーション
5. **解説表示**: モーダルでスムーズに表示

### フィードバック設計
```typescript
const handleOptionClick = (optionIndex: number) => {
  if (selectedOption !== null) return;
  
  setSelectedOption(optionIndex);
  setShowResult(true);
  
  if (optionIndex === currentQuestion.correctAnswer) {
    setScore(score + 1);
    // 正解アニメーション
  } else {
    // 不正解アニメーション
  }
};
```

## 🎨 コンポーネント設計

### Quiz Component
```typescript
interface QuizProps {
  questions: QuizQuestion[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // ... ロジック実装
};
```

### Modal Component
```css
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;
}

.modal-content {
  background: rgba(42, 52, 65, 1.0);
  border-radius: 20px;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  animation: slideInFromBottom 0.4s ease-out;
}
```

## 📊 結果表示設計

### スコア表示
```typescript
// 大きな文字でスコアを強調
<p style={{ 
  fontSize: '2rem', 
  marginBottom: '1rem', 
  fontWeight: 'bold' 
}}>
  あなたのスコア: {score} / {shuffledQuestions.length}
</p>

<p style={{ 
  fontSize: '1.6rem', 
  marginBottom: '2rem', 
  fontWeight: '600' 
}}>
  正答率: {percentage}%
</p>
```

### 満点時の特別演出
```typescript
{score === shuffledQuestions.length ? (
  <p className="perfect-score">
    🎉 満点おめでとうございます！ 🎉<br />
    AWS URLパターンの達人です！
  </p>
) : (
  <p className="encouragement">
    お疲れさまでした！<br />
    さらなる上達を目指しましょう！
  </p>
)}
```

## 🎪 アクセシビリティ

### キーボードナビゲーション
```css
.option-button:focus {
  outline: 2px solid var(--millionaire-gold);
  outline-offset: 2px;
}
```

### スクリーンリーダー対応
```html
<button 
  aria-label={`選択肢${index + 1}: ${option}`}
  role="button"
  tabIndex={0}
>
  {option}
</button>
```

### カラーコントラスト
- 背景とテキストのコントラスト比: 4.5:1以上
- 重要な情報は色だけでなく形状でも区別

## 🎨 ファビコン設計

### SVG Favicon
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <!-- AWS風クラウド -->
  <path d="M6 16c0-2 1.5-3.5 3.5-3.5..." fill="#FF9900"/>
  
  <!-- URL/リンクアイコン -->
  <path d="M18 12c-1.1 0-2 0.9-2 2..." fill="#FFFFFF"/>
  
  <!-- クイズ/質問マーク -->
  <circle cx="24" cy="24" r="4" fill="#FF9900"/>
  <text x="24" y="27.5" fill="#FFFFFF">?</text>
</svg>
```

---

**前のステップ**: [技術スタック選定](./Tech-Stack.md)  
**次のステップ**: [問題データ作成](./Quiz-Data.md)

# 問題データ作成

## 📝 問題データ構造

### TypeScript型定義
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

### 問題カテゴリ

#### 1. コンソールURL系 (基本)
```typescript
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
  explanation: "Amazon S3のコンソールページは https://console.aws.amazon.com/s3/ です。"
}
```

#### 2. ドキュメントURL系
```typescript
{
  id: 15,
  question: "AWS CLIのドキュメントページは？",
  options: [
    "https://docs.aws.amazon.com/cli/",
    "https://cli.aws.amazon.com/",
    "https://aws.amazon.com/cli/docs/",
    "https://docs.aws.amazon.com/aws-cli/"
  ],
  correctAnswer: 0,
  explanation: "AWS CLIのドキュメントページは https://docs.aws.amazon.com/cli/ です。"
}
```

#### 3. サービス紹介ページ系
```typescript
{
  id: 25,
  question: "Amazon EC2のサービス紹介ページは？",
  options: [
    "https://ec2.aws.amazon.com/",
    "https://aws.amazon.com/ec2/",
    "https://amazon.com/ec2/",
    "https://console.aws.amazon.com/ec2/"
  ],
  correctAnswer: 1,
  explanation: "Amazon EC2のサービス紹介ページは https://aws.amazon.com/ec2/ です。"
}
```

## 🎯 問題作成プロセス

### Amazon Q CLIでの問題生成
```
User: "AWS Lambda のコンソールURL問題を作成して"

Amazon Q: 
{
  id: X,
  question: "AWS Lambdaのコンソールページは？",
  options: [
    "https://console.aws.amazon.com/lambda/",
    "https://lambda.aws.amazon.com/",
    "https://aws.amazon.com/lambda/console/",
    "https://console.lambda.aws.amazon.com/"
  ],
  correctAnswer: 0,
  explanation: "AWS Lambdaのコンソールページは https://console.aws.amazon.com/lambda/ です。"
}
```

### 品質チェックプロセス
1. **URL検証**: 実際にアクセスして確認
2. **選択肢の妥当性**: 紛らわしいが明確に間違いの選択肢
3. **解説の充実**: なぜその答えなのかを説明
4. **参考リンクの追加**: 学習を深められるリンク

## 📊 問題統計

### カテゴリ別問題数
- **コンソールURL**: 35問 (67%)
- **ドキュメントURL**: 10問 (19%)
- **サービス紹介**: 7問 (14%)

### 難易度分布
- **基本**: 30問 (58%) - 主要サービスの基本URL
- **中級**: 15問 (29%) - 特殊なサービスやパターン
- **上級**: 7問 (13%) - 紛らわしいURLパターン

## 🔍 問題選定基準

### 含める問題
✅ **現在アクティブなサービス**
✅ **実際に使用頻度の高いURL**
✅ **学習価値の高い内容**
✅ **明確な正解がある問題**

### 除外する問題
❌ **廃止予定のサービス** (例: Amazon Chime)
❌ **アクセスできないURL**
❌ **曖昧な答えの問題**
❌ **学習価値の低い内容**

## 🛠️ データ管理

### ファイル構造
```
data/
└── quizData.ts
    ├── QuizQuestion interface
    ├── quizQuestions array (52問)
    └── export statements
```

### 問題追加プロセス
1. **新問題の作成**
```typescript
const newQuestion: QuizQuestion = {
  id: 53, // 次のID
  question: "新しい問題文",
  options: ["選択肢1", "選択肢2", "選択肢3", "選択肢4"],
  correctAnswer: 0,
  explanation: "解説文",
  links: [
    {
      title: "参考リンクタイトル",
      url: "https://example.com"
    }
  ]
};
```

2. **配列への追加**
```typescript
export const quizQuestions: QuizQuestion[] = [
  // 既存の問題...
  newQuestion
];
```

## 🎨 解説文の書き方

### 基本パターン
```typescript
explanation: "サービス名のページは https://正解URL です。"
```

### 詳細パターン
```typescript
explanation: "サービス名のページは https://正解URL です。このサービスは○○の機能を提供し、××の用途で使用されます。"
```

### 比較パターン
```typescript
explanation: "サービス名のページは https://正解URL です。似たようなサービスBは https://別URL ですが、用途が異なります。"
```

## 🔗 参考リンクの追加

### 公式ドキュメント
```typescript
links: [
  {
    title: "AWS サービス名 公式ドキュメント",
    url: "https://docs.aws.amazon.com/service/"
  }
]
```

### コンソールページ
```typescript
links: [
  {
    title: "AWS サービス名 コンソール",
    url: "https://console.aws.amazon.com/service/"
  }
]
```

### サービス紹介ページ
```typescript
links: [
  {
    title: "AWS サービス名 サービス紹介",
    url: "https://aws.amazon.com/service/"
  }
]
```

## 🧪 問題テスト

### 手動テスト
1. **URL確認**: 全選択肢のURLにアクセス
2. **正解確認**: 正解が実際に正しいか確認
3. **解説確認**: 解説が分かりやすいか確認
4. **リンク確認**: 参考リンクが有効か確認

### 自動テスト (将来実装)
```typescript
// URL有効性チェック
const validateQuizData = async () => {
  for (const question of quizQuestions) {
    for (const option of question.options) {
      if (option.startsWith('http')) {
        const response = await fetch(option);
        if (!response.ok) {
          console.warn(`Invalid URL: ${option}`);
        }
      }
    }
  }
};
```

## 📈 問題品質の向上

### ユーザーフィードバック活用
- 間違いやすい問題の特定
- 解説の改善要望
- 新しい問題の提案

### 定期的な見直し
- AWSサービスの更新に合わせた問題更新
- 廃止サービスの問題削除
- 新サービスの問題追加

---

**前のステップ**: [UI/UX設計](./UI-UX-Design.md)  
**次のステップ**: [レスポンシブ対応](./Responsive-Design.md)

# プロジェクト初期化

## 🚀 プロジェクトの開始

### Amazon Q CLIでの初期設定

```bash
# Next.jsプロジェクトの作成
npx create-next-app@latest aws-url-quiz --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# プロジェクトディレクトリに移動
cd aws-url-quiz
```

### 依存関係の設定

#### package.json
```json
{
  "name": "aws-url-quiz",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "15.3.3",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "eslint": "^9",
    "eslint-config-next": "15.3.3",
    "typescript": "^5"
  }
}
```

### TypeScript設定

#### tsconfig.json
```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 📁 プロジェクト構造

```
aws-url-quiz/
├── components/          # Reactコンポーネント
│   └── Quiz.tsx        # メインクイズコンポーネント
├── data/               # データファイル
│   └── quizData.ts     # クイズ問題データ
├── pages/              # Next.jsページ
│   ├── index.tsx       # ホームページ
│   └── _app.tsx        # アプリケーション設定
├── public/             # 静的ファイル
│   ├── favicon.svg     # ファビコン
│   └── apple-touch-icon.png
├── styles/             # スタイルファイル
│   └── globals.css     # グローバルCSS
├── utils/              # ユーティリティ
│   └── config.ts       # 設定ファイル
├── .github/            # GitHub設定
│   └── workflows/
│       └── deploy.yml  # CI/CD設定
└── wiki/               # ドキュメント
    └── *.md           # Wikiページ
```

## 🎯 初期目標設定

### 機能要件
- [ ] AWSサービスのURL問題を出題
- [ ] ランダムに10問選択
- [ ] 正答率の表示
- [ ] 解説機能
- [ ] レスポンシブデザイン

### 技術要件
- [ ] Next.js 15 + TypeScript
- [ ] GitHub Pages デプロイ
- [ ] モバイル対応
- [ ] PWA対応準備
- [ ] SEO最適化

## 🤖 Amazon Q CLIの活用ポイント

1. **プロジェクト構造の提案**
   - 適切なディレクトリ構成
   - ファイル命名規則
   - TypeScript設定

2. **初期コード生成**
   - ボイラープレートコード
   - 型定義の作成
   - 設定ファイルの最適化

3. **ベストプラクティス適用**
   - Next.js 15の新機能活用
   - パフォーマンス最適化
   - セキュリティ設定

---

**次のステップ**: [技術スタック選定](./Tech-Stack.md)

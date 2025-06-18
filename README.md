# AWS URLクイズ

AWSの各種サービスのURLパターンに関する知識を試すクイズアプリケーションです。

## 🎯 特徴

- 60問以上の豊富な問題プール
- 毎回10問をランダム選択
- 詳細な解説と関連リンク
- レスポンシブデザイン
- X（Twitter）での結果共有機能

## 🚀 デプロイ

このアプリケーションはGitHub Pagesに自動デプロイされます。

### GitHub Pagesの設定

1. GitHubリポジトリの Settings > Pages に移動
2. Source を "GitHub Actions" に設定
3. mainブランチにプッシュすると自動的にデプロイされます

### ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 静的ファイルのエクスポート
npm run export
```

## 🔧 技術スタック

- Next.js
- TypeScript
- React
- CSS

## 📝 カスタマイズ

クイズの問題を変更するには、`data/quizData.ts` ファイルを編集してください。

## ライセンス

MIT

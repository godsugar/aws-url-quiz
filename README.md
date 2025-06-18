# Next.js クイズゲーム

Next.jsのSSG（Static Site Generation）機能を使用して作成したシンプルなクイズゲームです。

## 機能

- 複数の問題と選択肢
- 正解/不正解の即時フィードバック
- スコア計算
- 結果サマリー
- レスポンシブデザイン

## 技術スタック

- Next.js
- TypeScript
- CSS

## 始め方

### 必要条件

- Node.js 14.6.0以上
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install
# または
yarn install
```

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

### ビルド

```bash
npm run build
# または
yarn build
```

### 本番環境での実行

```bash
npm run start
# または
yarn start
```

## カスタマイズ

クイズの問題を変更するには、`data/quizData.ts` ファイルを編集してください。

## ライセンス

MIT

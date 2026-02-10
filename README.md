# University eSports Kansai Creation Manual (UeSK CM)

UeSK CM は [Docusaurus](https://docusaurus.io/) 3 系をベースにしたドキュメンテーションサイトです。**React**と**TypeScript**を活用し、プロジェクトのナレッジやコンテンツを整理・共有することを目的としています。

## ✅ 主な特徴

### テクノロジー
- Docusaurus App Router を活用したモダンなドキュメント構成
- Tailwind 風のユーティリティクラスを組み合わせたカスタムスタイリング
- Markdown/MDX による執筆体験と React コンポーネントの共存

### コンテンツ
- **Welcome**: 新歓・導入ガイド
- **About**: 団体・プロジェクトの概要
- **Credit**: 制作・貢献者クレジット
- **Documents**:
    - **needed-items**: 必要な機材・物品リスト
    - **on-the-day**: 当日の運営マニュアル
    - **preparation**: 事前準備・タスク
    - **pretest**: 事前テスト・検証手順

### ディレクション
- 完全未経験のメンバーが学び取ったものを直接記載
- 先人の知恵をオープンに、業界の発展のために発信
- 簡潔で必要な部分を、適切なタイミングで習得できるように工夫

## 🛠️ セットアップ
1. Node.js 20 以上を用意してください。
2. パッケージマネージャとして `npm` もしくは `yarn` を利用できます。

```bash
# npm
npm install

# yarn
yarn install
```

## ▶️ 開発フロー
- ローカル開発サーバー起動  
  ```bash
  npm run start
  # または
  yarn start
  ```
  ホットリロード対応のサーバーが立ち上がり、変更は即座にブラウザへ反映されます。

- 本番ビルド  
  ```bash
  npm run build
  # または
  yarn build
  ```
  `build/` 以下に静的ファイルが生成され、任意の静的ホスティングサービスで配信できます。

- 静的ファイルのローカル確認  
  ```bash
  npm run serve
  # または
  yarn serve
  ```
  生成済みのビルドをローカルで確認したい場合に利用します。

## 🧪 品質チェック
- Lint: `npm run lint` / `yarn lint`  
  ESLint によるコード規約チェックを実行します。
- 型確認: `npm run typecheck` / `yarn typecheck`  
  TypeScript の型整合性を検証します。

## 🚀 デプロイ

GitHub Pagesを利用する場合、以下の通りに実行することでデプロイが可能です。

`docusaurus.config.ts` の `url` と `baseUrl` を環境に合わせて設定したうえで、以下のコマンドを実行します。

```bash
# GitHub Pages へデプロイ（SSH 利用）
USE_SSH=true npm run deploy

# GitHub Pages へデプロイ（HTTPS 利用）
GIT_USER=<GitHubユーザー名> npm run deploy
```

`yarn` を利用する場合は `npm run` を `yarn` に読み替えてください。コマンドは `gh-pages` ブランチへビルド成果物を push します。

## 📁 主なディレクトリ
- `src/pages/`
    - `index.tsx`: トップページ
    - `about.tsx`: About ページ
    - `credit.tsx`: Credit ページ
    - `welcome.tsx`: Welcome ページ
- `docs/` : ドキュメントルート
    - `needed-items/`: 必要なもの
    - `on-the-day/`: 当日運営
    - `preparation/`: 準備・タスク
    - `pretest/`: 事前テスト
- `src/components/` : 共有 React コンポーネント
- `static/` : 画像やフォントなどの静的アセット
- `docusaurus.config.ts` : グローバル設定

## 🤝 コントリビューション
1. Fork してブランチを作成
2. 変更点をコミット
3. Lint と型チェックを通したうえで Pull Request を作成
4. レビューコメントに応じて修正

## 📝 ライセンス
- Docusaurus に由来する構成ファイル・ビルドスクリプト・テーマ拡張などのソースコードは MIT License（[https://opensource.org/license/mit](https://opensource.org/license/mit)）に従います。
- 上記以外の独自コンポーネント、ドキュメント本文、画像・音声・動画などのクリエイティブアセットは Creative Commons Attribution-NoDerivatives 4.0 International（CC BY-ND 4.0、[https://creativecommons.org/licenses/by-nd/4.0/](https://creativecommons.org/licenses/by-nd/4.0/)）で提供されます。
- 再配布の際はライセンス表記を維持し、CC BY-ND 範囲内での利用をお願いします。
- 詳細はLICENCE.mdを参照してください。

## 🎓 卒業制作展（なわてん）について
本制作物は、大阪電気通信大学 総合情報学部 卒業制作展（なわてん）に出展された卒業制作作品です。
- 出展年度: 2025年度
- バージョン: v1.0

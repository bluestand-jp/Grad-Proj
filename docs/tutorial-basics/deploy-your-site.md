---
sidebar_position: 5
---

# サイトをデプロイする

Docusaurus は **静的サイトジェネレーター**（**[Jamstack](https://jamstack.org/)** とも呼ばれます）です。

サイトはシンプルな **静的 HTML・JavaScript・CSS** ファイルとして生成されます。

## サイトをビルドする

本番想定でビルドします。

```bash
npm run build
```

`build` フォルダーに静的ファイルが生成されます。

## サイトをデプロイする

本番ビルドをローカルでテストします。

```bash
npm run serve
```

これで `build` フォルダーが [http://localhost:3000/](http://localhost:3000/) で配信されます。

`build` フォルダーを使えば、**ほとんどのホスティングサービス**へ簡単にデプロイ可能です。無料または低コストで利用できるサービスも多いので、詳しくは **[デプロイメントガイド](https://docusaurus.io/docs/deployment)** を参照してください。

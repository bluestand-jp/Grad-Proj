---
sidebar_position: 1
draft: true
---

# ドキュメントのバージョン管理

Docusaurus はドキュメントの複数バージョンを管理できます。

## バージョンを作成する

プロジェクトのバージョン 1.0 をリリースします。

```bash
npm run docusaurus docs:version 1.0
```

`docs` フォルダーの内容が `versioned_docs/version-1.0` にコピーされ、`versions.json` が生成されます。

これでドキュメントには次の 2 つのバージョンが揃います。

- `http://localhost:3000/docs/` にバージョン 1.0 のドキュメント
- `http://localhost:3000/docs/next/` に **開発中（最新）のドキュメント**

## バージョンドロップダウンを追加する

バージョン間をスムーズに移動できるよう、ドロップダウンを追加します。

`docusaurus.config.ts` を次のように編集します。

```ts title="docusaurus.config.ts"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

ナビゲーションバーにドキュメントのバージョンドロップダウンが表示されます。

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## 既存バージョンを更新する

各バージョンのフォルダーを直接編集できます。

- `versioned_docs/version-1.0/hello.md` を更新すると `http://localhost:3000/docs/hello` に反映されます。
- `docs/hello.md` を更新すると `http://localhost:3000/docs/next/hello` に反映されます。

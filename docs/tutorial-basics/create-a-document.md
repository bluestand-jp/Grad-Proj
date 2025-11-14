---
sidebar_position: 2
---

# ドキュメントを作成する

ドキュメントは複数のページがまとまり、次の仕組みで関連付けられています。

- **サイドバー**
- **前後ナビゲーション**
- **バージョン管理**

## 最初のドキュメントを作成する

`docs/hello.md` という Markdown ファイルを作成します。

```md title="docs/hello.md"
# Hello

これは初めての **Docusaurus ドキュメント** です！
```

作成したドキュメントは [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello) で確認できます。

## サイドバーを設定する

Docusaurus は `docs` フォルダーの構造から自動的に **サイドバー** を生成します。

サイドバーの表示ラベルや並び順を調整したい場合は、Front Matter にメタデータを追加します。

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

これは初めての **Docusaurus ドキュメント** です！
```

`sidebars.ts` でサイドバーを明示的に定義することも可能です。

```ts title="sidebars.ts"
import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'チュートリアル',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};

export default sidebars;
```

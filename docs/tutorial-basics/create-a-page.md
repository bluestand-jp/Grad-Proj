---
sidebar_position: 1
---

# ページを作成する

`src/pages` に **Markdown または React** のファイルを追加すると、**単独ページ** を作成できます。

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 最初の React ページを作る

`src/pages/my-react-page.js` を作成します。

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>はじめての React ページ</h1>
      <p>これは React で作成したページです</p>
    </Layout>
  );
}
```

新しいページは [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page) で表示できます。

## 最初の Markdown ページを作る

`src/pages/my-markdown-page.md` を作成します。

```mdx title="src/pages/my-markdown-page.md"
# はじめての Markdown ページ

これは Markdown で作成したページです
```

新しいページは [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page) で表示できます。

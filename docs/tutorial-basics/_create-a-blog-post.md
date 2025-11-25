---
sidebar_position: 3
---

# ブログ記事を作成する

Docusaurus は、各ブログ記事ごとに個別ページを生成するだけでなく、**ブログのインデックスページ** や **タグ機能**、**RSS フィード** なども自動的に構築します。

> 📌 **補足**  
> このプロジェクトでは現在ブログ機能を無効化しています。以下の手順は Docusaurus の標準機能を紹介する目的で掲載しています。ブログを利用したい場合は `docusaurus.config.ts` の `blog` オプションを有効化し、必要なディレクトリを再作成してください。

## 最初の記事を作成する

`blog/2021-02-28-greetings.md` というファイルを作成します。

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

これで最初のブログ記事が完成です。

お好みに合わせて内容を編集し、書き心地を試してみてください。
```

記事は [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings) で確認できます。

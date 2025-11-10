---
sidebar_position: 2
---

# サイトを翻訳する

ここでは `docs/intro.md` を例に、フランス語への翻訳手順を紹介します。

## i18n を設定する

`docusaurus.config.ts` を編集し、`fr` ロケールを追加します。

```ts title="docusaurus.config.ts"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## ドキュメントを翻訳する

`docs/intro.md` を `i18n/fr` フォルダーへコピーします。

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

`i18n/fr/docusaurus-plugin-content-docs/current/intro.md` をフランス語へ翻訳します。

## ローカライズ済みサイトを起動する

フランス語ロケールの開発サーバーを起動します。

```bash
npm run start -- --locale fr
```

ローカライズされたサイトは [http://localhost:3000/fr/](http://localhost:3000/fr/) で確認でき、`Getting Started` ページが翻訳済みとして表示されます。

::::caution

開発モードでは一度に 1 つのロケールしか使用できません。

::::

## ロケールドロップダウンを追加する

複数言語を行き来しやすくするため、ロケールドロップダウンを追加します。

`docusaurus.config.ts` を次のように変更します。

```ts title="docusaurus.config.ts"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

ナビゲーションバーにロケールドロップダウンが表示されます。

![Locale Dropdown](./img/localeDropdown.png)

## ローカライズ済みサイトをビルドする

特定ロケール向けにサイトをビルドします。

```bash
npm run build -- --locale fr
```

全ロケールをまとめてビルドする場合は次のコマンドを使います。

```bash
npm run build
```


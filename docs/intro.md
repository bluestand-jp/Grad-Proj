sidebar_position: 1

# チュートリアル概要

ここでは **5分以内で Docusaurus の概要** をつかみましょう。

## はじめに

まずは **新しいサイトを作成** します。

もしくは **[docusaurus.new](https://docusaurus.new)** で **すぐに試す** こともできます。

### 必要なもの

- [Node.js](https://nodejs.org/en/download/) バージョン 20.0 以上  
  - Node.js のインストール時は、依存関係に関するチェックボックスをすべて有効にすることをおすすめします。

## 新しいサイトを作成する

**classic テンプレート** を使って Docusaurus サイトを作成します。

次のコマンドを実行すると、クラシックテンプレートが自動的にプロジェクトへ追加されます。

```bash
npm init docusaurus@latest my-website classic
```

このコマンドは、コマンドプロンプト・PowerShell・Terminal など、任意のターミナルで実行できます。

あわせて Docusaurus の実行に必要な依存関係もインストールされます。

## サイトを起動する

開発サーバーを起動します。

```bash
cd my-website
npm run start
```

`cd` は作業ディレクトリを切り替えるコマンドです。作成した Docusaurus サイトで作業するために、そのディレクトリへ移動してください。

`npm run start` はローカルでサイトをビルドし、開発サーバー経由で配信します。ブラウザで http://localhost:3000/ を開いて確認できます。

`docs/intro.md`（このページ）を開いて数行編集してみてください。サイトは **自動でリロード** され、変更がすぐに反映されます。

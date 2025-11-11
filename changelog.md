# Changelog

## 2025-11-10
- Docusaurus 設定ファイルに JSDoc コメントを追加し、サイト設定の概要と制限事項を明記。
- サイトタイトルおよびナビゲーションバータイトルを仮称「University eSports Kansai」に更新。
- タグラインを「Drive Your Dreams.」に更新。
- Docusaurus プリセットでブログ機能を無効化し、ナビゲーションおよびフッターからブログ関連リンクを削除。
- `blog/` ディレクトリと著作者設定ファイルを削除。
- ナビゲーション（チュートリアル等）とフッター見出し（ドキュメント／コミュニティ／その他）を日本語化。
- `src/pages/index.tsx` のヒーローボタン・メタ説明を日本語化し、JSDoc コメントを追加。
- `src/components/HomepageFeatures/index.tsx` の見出し・説明文を日本語化し、JSDoc コメントを追加。
- `src/pages/markdown-page.md` を日本語に翻訳。
- `docs/intro.md` と `docs/tutorial-basics/create-a-page.md` を日本語に翻訳。
- `docs/tutorial-basics` 配下の残りドキュメント（create-a-document, create-a-blog-post, deploy-your-site, markdown-features, congratulations）を日本語化し、ブログ無効化の注意を追記。
- `docs/tutorial-extras` 配下のガイド（manage-docs-versions, translate-your-site）を日本語化し、設定例を TypeScript 版に合わせて更新。
- `docs/tutorial-basics/_category_.json` と `docs/tutorial-extras/_category_.json` のラベル・説明を日本語化。
- `sidebars.ts` に日本語の JSDoc コメントを追加し、サイドバー設定の説明を更新。
- `sidebars.ts` の重複定義を削除し、`SidebarsConfig` の再宣言エラーを解消。
- `package.json` に `lint` スクリプトを追加し、Docusaurus のリンターをコマンド一つで実行可能にした。
- ESLint と関連プラグインを導入し、`lint` スクリプトを ESLint 実行に切り替え。
- `tsconfig.json` の `extends` パスを `@docusaurus/tsconfig/tsconfig.json` に修正し、設定ファイルが解決できない問題を解消。
- `docs/tutorial-extras copy` ディレクトリを `docs/needed-items` にリネームし、カテゴリー設定を新名称に合わせて更新。
- ホームヒーロー見出しをサイトタグラインの表示に変更し、サブタイトルを自由入力文言「戦え、進め。そこに道ができる。」に更新。
- ヘッダーナビゲーションに「About」タブを追加（Documents と GitHub の間）。
- `src/pages/about.tsx` を作成し、About ページの基本レイアウトを実装。
- サイト全体の配色をキーカラー（#F0F0F0: 白、#172AB6: 青、#0F0F0F: 黒）に基づいて再設計。
  - プライマリカラーを青（#172AB6）に設定し、ナビゲーションバー、リンク、ボタンに適用。
  - 背景色を白（#F0F0F0）に設定し、テキストカラーを黒（#0F0F0F）に設定。
  - フッターを黒（#0F0F0F）背景に白（#F0F0F0）テキストで設定。
  - ダークモードでもキーカラーを基調とした配色を維持。
- ヒーローセクションのタイトル「Drive Your Dreams.」のスタイルを調整。
  - 色を白色（#ffffff）に戻し、フォントサイズを3.5remに拡大、フォントウェイトを700（太字）に設定。
  - レスポンシブ対応として、画面幅996px以下では2.5remに調整。
- ヒーローセクション内のボタンスタイルを更新。
  - ライトモード: 青みがかった白（#E8E8F0）背景に青みがかった黒（#0F0F1F）テキスト（常時）→ ホバー時に青みがかった黒背景に青みがかった白テキストに反転。
  - ダークモード: 青みがかった黒（#0F0F1F）背景に青みがかった白（#E8E8F0）テキスト（常時）→ ホバー時に青みがかった白背景に青みがかった黒テキストに反転。
  - トランジション効果（0.3秒）を追加。
- ナビゲーションバーのロゴアイコンを更新。
  - ライトモード: `uesk-black-icon.svg` を使用。
  - ダークモード: `uesk-white-icon.svg` を使用（`srcDark`プロパティで設定）。
- ロゴアイコンの青バージョン（`uesk-blue-icon.svg`）を作成。
  - キーカラーの青（#172AB6）を使用したSVGファイルを追加。
- サイトのfaviconを青バージョンのアイコン（`uesk-blue-icon.svg`）に設定。

## 2025-11-11
- `docs/tutorial-basics/create-a-blog-post.md` を `_create-a-blog-post.md` にリネームし、Docusaurus のビルドから非表示化（ファイル名の先頭に `_` を付けることで自動的に無視される）。
- ホームヒーロー見出し「Drive Your Dreams.」とサブタイトル「戦え。進め。そこに道ができる。」にタイピング風アニメーションを実装。
- `src/pages/index.tsx` にタイピングアニメーション用のカスタムフックを追加し、ARIA ライブリージョンで読み上げ対応を強化。
- `src/pages/index.module.css` にカーソル点滅アニメーションを含むタイピング用スタイルを追加し、アニメーション完了時にカーソルを非表示化。
- タイピング完了後にヒーローセクションのボタンをフェード＋スライドインで表示し、視覚的な注目度を向上。
- タイピングアニメーションの描画間隔を 50ms に調整し、テンポ良く読み進められるよう改善。
- `static/img` に `uesk-black-symbol-H.svg` と `uesk-black-symbol-V.svg` を追加し、白のみだった `uesk-symbol` シリーズにライトモード用の黒バリエーションを整備。
- ナビゲーションバーのロゴを `uesk-symbol` シリーズ（ライト: `uesk-black-symbol-H.svg` / ダーク: `uesk-white-symbol-H.svg`）に切り替え、ブランドシンボルの視認性を向上。
- `src/css/custom.css` にロゴ専用スタイルを追加し、ナビゲーションバーの高さを変えずにロゴ画像のみ段階的に拡大（PC: 3.5rem／タブレット: 3rem／モバイル: 2.5rem）しつつ、上下バランスをとるため余白を微調整。さらに `--ifm-navbar-height` を 4.25rem に変更し、バー自体もわずかに厚みを持たせた。
- ヒーローセクションの背景に `bg-kobe.svg` を適用し、広がりのあるビジュアルを演出。併せて半透明グラデーションオーバーレイを追加し、テキストの可読性を確保。
- ヒーローセクションの縦幅を `clamp(20rem, 48vh, 34rem)` に再調整し、背景とテキストのバランスをさらにコンパクトに最適化。コンテンツの中央寄せ配置を維持しつつ、視線導線を整備。
- README を全面改訂し、プロジェクト概要・セットアップ手順・品質チェック・ディレクトリ構成を日本語で整理。
- README のライセンス章を更新し、Docusaurus 部分を MIT、独自コンテンツを CC BY-ND へ整理。
- プロジェクト全体のライセンス方針を明文化した `LICENSE.md` を追加。


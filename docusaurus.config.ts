/**
 * @file Docusaurus の設定ファイル。
 * @summary サイト全体のメタ情報や機能設定を集中管理する。
 * @spec 主要仕様: Docusaurus v4 フラグを有効化し、クラシックプリセットを使用してドキュメントとブログを構成する。
 * @limitation 制限事項: i18n 設定は英語のみで、環境固有の URL や認証連携は未設定。
 */
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

/**
 * @description サイト全体の設定を保持する Docusaurus の Config オブジェクト。
 * @type {Config}
 * @spec 主要仕様: サイトタイトルやナビゲーション、テーマ設定を定義し、RSS/Atom フィードやカラーモード設定を含みつつブログ機能を無効化する。
 * @limitation 制限事項: 現状は英語ロケールのみ対応し、外部サービス連携 URL は暫定値。
 */
const config: Config = {
  title: 'University eSports Kansai',
  tagline: 'Drive Your Dreams.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'University eSports Kansai',
      logo: {
        alt: 'サイトロゴ',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'チュートリアル',
        },
        {href: 'https://github.com/facebook/docusaurus', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ドキュメント',
          items: [
            {
              label: 'チュートリアル',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'コミュニティ',
          items: [
            {
              label: 'Stack Overflow',
              href: '#',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/82fJTu9Nws',
            },
            {
              label: 'X（旧Twitter）',
              href: 'https://x.com/UeSK_Official',
            },
          ],
        },
        {
          title: 'その他',
          items: [
            {
              label: 'GitHub',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} University eSports Kansai. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

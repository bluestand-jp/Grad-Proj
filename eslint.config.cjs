/**
 * @file ESLint フラット設定ファイル。
 * @summary TypeScript と React を利用する本プロジェクト向けに静的解析ルールと推奨プリセットを構成する。
 * @limitation 制限事項: 型情報を利用した高度なルールや MDX 専用ルールは未導入。
 */
const js = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const globals = require('globals');

module.exports = [
  /**
   * @description ビルド生成物や依存モジュールを解析対象から除外する。
   */
  {
    ignores: ['build/**', '.docusaurus/**', 'node_modules/**', 'eslint.config.cjs'],
  },
  /**
   * @description ESLint 標準の推奨設定を適用し、基本的な静的解析を有効化する。
   */
  js.configs.recommended,
  /**
   * @description TypeScript プラグインの推奨ルールセットを適用する。
   */
  ...tsPlugin.configs['flat/recommended'],
  /**
   * @description React コンポーネント向けの推奨ルールを適用する。
   */
  reactPlugin.configs.flat.recommended,
  /**
   * @description React Hooks 専用の推奨ルールを有効にする。
   */
  reactHooksPlugin.configs.flat.recommended,
  /**
   * @description アクセシビリティ改善のため JSX a11y ルールを適用する。
   */
  {
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: jsxA11yPlugin.configs.recommended.rules,
  },
  /**
   * @description React のバージョン自動検出設定を共通化する。
   */
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  /**
   * @description プロジェクト特有の調整をまとめ、最新構文や JSX を利用できるようにする。
   */
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      /**
       * @description React 17 以降では JSX で React のインポートが不要なため警告を無効化する。
       */
      'react/react-in-jsx-scope': 'off',
      /**
       * @description 未使用変数を警告しつつ、アンダースコア始まりの識別子は許容する。
       */
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      /**
       * @description Docusaurus の画像読み込みで require を利用するため違反としない。
       */
      '@typescript-eslint/no-require-imports': 'off',
      /**
       * @description TypeScript の型定義で props を管理するため prop-types を必須にしない。
       */
      'react/prop-types': 'off',
    },
  },
];


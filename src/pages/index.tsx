/**
 * @file ホームページのトップレイアウトとヒーローセクションを定義する。
 * @summary サイトタイトル・タグライン・導線ボタンを表示し、特徴セクションへ誘導する。
 * @limitation 制限事項: 文言は固定値で i18n プラグイン未導入、アクセシビリティ検証は簡易。
 */
import type {ReactNode, ReactElement} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/**
 * @constant HERO_SUBTITLE
 * @summary ヒーローセクションのサブタイトル文言を定義する。
 * @limitation 動的生成は行わず、文言の差し替えにはビルドが必要。
 * @type {string}
 */
const HERO_SUBTITLE: string = '戦え。進め。そこに道ができる。';

/**
 * @function HomepageHeader
 * @summary ヒーローセクションのレイアウトと文言を描画する。
 * @return {ReactElement} ヒーローバナーの JSX 要素。
 */
function HomepageHeader(): ReactElement {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.tagline}
        </Heading>
        <p className="hero__subtitle">{HERO_SUBTITLE}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            ５分で概要を掴んでみる ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

/**
 * @function Home
 * @summary ホームページ全体のレイアウトを構築する。
 * @return {ReactNode} トップページの JSX 要素。
 */
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="This is the creation manual of University eSports Kansai">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

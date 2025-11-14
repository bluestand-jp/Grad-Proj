/**
 * @file ホームページのトップレイアウトとヒーローセクションを定義する。
 * @summary サイトタイトル・タグライン・導線ボタンを表示し、特徴セクションへ誘導する。
 * @limitation 制限事項: 文言は固定値で i18n プラグイン未導入、アクセシビリティ検証は簡易。
 */
import {useEffect, useState} from 'react';
import type {ReactNode, ReactElement} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/**
 * @typedef UseTypewriterOptions
 * @summary タイピングアニメーションに必要な設定値を表現するオプション型。
 * @property {string} text 表示したい全文字列。
 * @property {number} [typingInterval] 各文字を描画する間隔（ミリ秒）。
 * @property {number} [startDelay] タイピング開始までの待機時間（ミリ秒）。
 */
type UseTypewriterOptions = {
  text: string;
  typingInterval?: number;
  startDelay?: number;
};

/**
 * @typedef UseTypewriterResult
 * @summary タイピングアニメーションの進行状況を表す戻り値型。
 * @property {string} displayText 現在描画されている文字列。
 * @property {boolean} isCompleted 全文描画が完了したかどうか。
 */
type UseTypewriterResult = {
  displayText: string;
  isCompleted: boolean;
};

/**
 * @constant TYPEWRITER_TYPING_INTERVAL_MS
 * @summary タイピングアニメーションのデフォルト文字間隔（ミリ秒）を定義する。
 * @limitation 各テキストで個別指定する場合はオプションで上書きする必要がある。
 * @type {number}
 */
const TYPEWRITER_TYPING_INTERVAL_MS: number = 50;

/**
 * @constant HERO_SUBTITLE_DELAY_MS
 * @summary サブタイトルのタイピング開始を遅延させる時間（ミリ秒）を定義する。
 * @limitation 見出し完了後の自然な読み順を想定し、固定値としている。
 * @type {number}
 */
const HERO_SUBTITLE_DELAY_MS: number = 1200;

/**
 * @function useTypewriter
 * @summary 指定した文字列を一定間隔で描画し、タイピング風アニメーションを実現するカスタムフック。
 * @param {UseTypewriterOptions} options タイピング対象の文字列と挙動設定。
 * @return {UseTypewriterResult} 描画途中の文字列と完了状態。
 */
function useTypewriter(options: UseTypewriterOptions): UseTypewriterResult {
  const {text, typingInterval = TYPEWRITER_TYPING_INTERVAL_MS, startDelay = 0} = options;
  const [displayText, setDisplayText] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    let currentIndex: number = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;
    const hasNoContent: boolean = text.length === 0;

    setDisplayText('');
    setIsCompleted(hasNoContent);

    const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
      if (hasNoContent) {
        return;
      }
      intervalId = setInterval(() => {
        currentIndex += 1;
        setDisplayText(text.slice(0, currentIndex));
        if (currentIndex >= text.length) {
          setIsCompleted(true);
          if (intervalId) {
            clearInterval(intervalId);
          }
        }
      }, typingInterval);
    }, startDelay);

    return () => {
      setDisplayText('');
      setIsCompleted(false);
      clearTimeout(timeoutId);
      if (intervalId !== undefined) {
        clearInterval(intervalId);
      }
    };
  }, [text, typingInterval, startDelay]);

  return {displayText, isCompleted};
}

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
  const taglineTypewriter: UseTypewriterResult = useTypewriter({
    text: siteConfig.tagline,
  });
  const subtitleTypewriter: UseTypewriterResult = useTypewriter({
    text: HERO_SUBTITLE,
    startDelay: HERO_SUBTITLE_DELAY_MS,
  });
  const shouldShowCallToAction: boolean = subtitleTypewriter.isCompleted;

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <span
            className={clsx(
              styles.typewriter,
              taglineTypewriter.isCompleted && styles.typewriterComplete,
            )}
            aria-live="polite"
          >
            {taglineTypewriter.displayText}
          </span>
        </Heading>
        <p
          className={clsx(
            'hero__subtitle',
            styles.typewriter,
            subtitleTypewriter.isCompleted && styles.typewriterComplete,
          )}
          role="note"
          aria-live="polite"
        >
          {subtitleTypewriter.displayText}
        </p>
        <div
          className={clsx(
            styles.buttons,
            shouldShowCallToAction ? styles.buttonsVisible : styles.buttonsHidden,
          )}
          aria-hidden={!shouldShowCallToAction}
        >
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

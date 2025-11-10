/**
 * @file トップページの特徴紹介セクション。
 * @summary 3つの特徴（導入容易性・本質集中・React拡張性）を表示する。
 * @limitation 制限事項: テキストは固定。多言語切替機能は未実装。
 */
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'かんたん導入',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus は最初から導入しやすさを重視して設計されており、
        すぐにサイトを立ち上げられるよう配慮されています。
      </>
    ),
  },
  {
    title: '本質に集中',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        面倒な作業は Docusaurus に任せて、あなたはドキュメント作成に集中しましょう。
        まずは <code>docs</code> ディレクトリにコンテンツを置くだけです。
      </>
    ),
  },
  {
    title: 'React ベース',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        React を活用してレイアウトを拡張・カスタマイズできます。
        共通のヘッダーやフッターを再利用しつつ柔軟に拡張可能です。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

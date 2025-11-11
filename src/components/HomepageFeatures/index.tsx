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
    title: '誰にでもイベント開催を',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        イベント制作が未経験だったUniversity eSports Kansaiのメンバー。
        我々が培ったイベント制作の手順を、簡潔なマニュアル形式に。
      </>
    ),
  },
  {
    title: '簡潔で必要な部分を中心に',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        必要な部分だけを中心に、冗長な情報は省き、必要な情報だけを伝える。
        これであなたもオーガナイザーです。
      </>
    ),
  },
  {
    title: '先人の知恵をオープンに',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        これまでeスポーツ業界では標準でなかったナレッジのオープンソース化。
        業界の発展には必要不可欠なパーツです。
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

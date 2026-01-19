/**
 * @file About ページのコンポーネント。
 * @summary University eSports Kansai についての情報を表示するページ。
 * @spec 主要仕様: サイトの概要や目的、組織情報などを表示する。
 * @limitation 制限事項: 現時点では基本的なレイアウトのみ実装。
 */
import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Timeline from '@site/src/components/Timeline';

/**
 * @function About
 * @summary About ページのメインコンポーネント。
 * @return {ReactNode} About ページの JSX 要素。
 */
export default function About(): ReactNode {
  return (
    <Layout
      title="About"
      description="University eSports Kansai について">
      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          <Heading as="h1">About</Heading>
          <p>
            University eSports Kansai についての情報をここに記載します。
            <Timeline items={[
              {
                year: '2024/07',
                title: 'University eSports Kansai 始動',
                description: '前身となるOECU esports project(現OECU eSports)の企画としてスタート',
                //image: require('./../../docs/preparation/img/uesk-headers-0208.png').default
              },
              {
                year: '2024/09',
                title: '第一回大会 開催',
                description: '関西の学生eスポーツ文化に火をともす、記念すべき第一回大会。',
              },
              {
                year: '2025/02',
                title: '新たな挑戦へ、第二回大会',
                description: '継続開催へ向けて仕組化を整えた第二回大会。',
              },
              {
                year: '2025/10',
                title: '継続の難易度を思い知る、第三回大会',
                description: '継続開催の難しさを体感しながらも、完遂した第三回大会。',
              },
              {
                year: '2026/02',
                title: '一生記憶に、一生歴史に残る大会を',
                description: '未来へと受け継ぐため、ノウハウ化された大会を開催すべく、第四回を大阪のド真ん中で。',
              }
            ]} />
          </p>
        </div>
      </main>
    </Layout>
  );
}



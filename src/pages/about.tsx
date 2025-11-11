/**
 * @file About ページのコンポーネント。
 * @summary University eSports Kansai についての情報を表示するページ。
 * @spec 主要仕様: サイトの概要や目的、組織情報などを表示する。
 * @limitation 制限事項: 現時点では基本的なレイアウトのみ実装。
 */
import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

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
      <main style={{padding: '2rem 0'}}>
        <div className="container">
          <Heading as="h1">About</Heading>
          <p>
            University eSports Kansai についての情報をここに記載します。
          </p>
        </div>
      </main>
    </Layout>
  );
}


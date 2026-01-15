/**
 * @file Credit ページのコンポーネント。
 * @summary プロジェクトメンバーのクレジットを表示するページ。
 * @spec 主要仕様: 3名のメンバーテンプレートを表示する。
 */
import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './index.module.css';

interface Member {
  name: string;
  role: string;
  description: string;
  imageUrl?: string;
}

const members: Member[] = [
  {
    name: 'Member Name',
    role: 'Role',
    description: 'Description of the member and their contributions.',
  },
  {
    name: 'Member Name',
    role: 'Role',
    description: 'Description of the member and their contributions.',
  },
  {
    name: 'Member Name',
    role: 'Role',
    description: 'Description of the member and their contributions.',
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card margin-bottom--lg">
        <div className="card__header">
          <div className="avatar">
             <div className="avatar__intro">
              <div className="avatar__name">{member.name}</div>
              <small className="avatar__subtitle">{member.role}</small>
            </div>
          </div>
        </div>
        <div className="card__body">
          <p>{member.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Credit(): ReactNode {
  return (
    <Layout
      title="Credit"
      description="Project Credits">
      <main style={{ padding: '2rem 0' }}>
        <div className="container">
          <Heading as="h1" className="margin-bottom--lg">Credit</Heading>
          <div className="row">
            {members.map((member, idx) => (
              <MemberCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

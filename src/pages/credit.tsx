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
  number: string;
  imageUrl?: string;
  xUrl?: string;
  aka?: string;
}

const members: Member[] = [
  {
    name: '晴家 朋也 / Tomoya HARUIE',
    role: 'Project Manager',
    number: 'HW22A110',
    description: 'サイト制作に係る管理や大会運営など',
    xUrl: 'https://x.com/tomu3035', // Placeholder
    aka: 'tomu',
  },
  {
    name: '原田 航輔 / Kosuke HARADA',
    role: 'Producer, Engineer',
    number: 'HW22A109',
    description: '大会の営業やサイトの実制作を担当',
    xUrl: 'https://x.com/y4kum', // Placeholder
    aka: 'Negi',
  },
  {
    name: '大原 汰貴 / Taiki OHARA',
    role: 'Contents Director',
    number: 'HB22A018',
    description: 'UeSKの活動を通じたeスポーツ大会の制作',
    xUrl: 'https://x.com/Delight_Ohara', // Placeholder
    aka: 'cha-han',
  }
];

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor" // Inherit color from parent
      style={{ width: '1em', height: '1em' }}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="card margin-bottom--lg">
        <div className="card__header">
          <div className="avatar">
            <div className="avatar__intro">
              <div className="avatar__name">{member.name}</div>
              {member.aka && <small className="avatar__subtitle" style={{ display: 'block', marginBottom: '0.2rem' }}>aka {member.aka}</small>}
              <small className="avatar__subtitle">{member.role}</small>
            </div>
          </div>
        </div>
        <div className="card__body">
          <p>{member.description}</p>
        </div>
        {member.xUrl && (
          <div className="card__footer">
            <a
              href={member.xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button--secondary button--sm button--block"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              <XIcon />
              <span>X (Twitter)</span>
            </a>
          </div>
        )}
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

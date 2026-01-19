/**
 * @file Welcome ページのコンポーネント。
 * @summary 卒業制作のLPとして、プロジェクトの背景やUeSKの紹介を行う。
 * @spec 主要仕様: 卒業制作の明記、UeSK紹介、制作背景、メインサイトへの誘導を含む。
 */
import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './index.module.css';


interface Member {
    name: string;
    role: string;
    number: string;
    description: string;
}

const members: Member[] = [
    {
        name: '晴家 朋也 / Tomoya HARUIE',
        role: 'Project Manager',
        number: 'HW22A110',
        description: 'サイト制作に係る管理など',
    },
    {
        name: '原田 航輔 / Kosuke HARADA',
        role: 'Engineer',
        number: 'HW22A109',
        description: 'サイト制作の技術面に関与',
    },
    {
        name: '大原 汰貴 / Taiki OHARA',
        role: 'Contents Creator',
        number: 'HB22A018',
        description: 'UeSKの活動を通じたeスポーツ大会の制作に関与',
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
                            <small className="avatar__subtitle">{member.role}</small><small className="avatar__subtitle">{member.number}</small>
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

export default function Welcome(): ReactNode {
    return (
        <Layout
            title="Welcome"
            description="University eSports Kansai Graduation Project">
            <main className="container margin-vert--xl">
                <div className="row">
                    <div className="col col--8 col--offset-2">
                        <div className="text--center margin-bottom--xl">
                            <Heading as="h1" className="hero__title">
                                Graduation Project 2025
                            </Heading>
                            <p className="hero__subtitle">
                                大阪電気通信大学 卒業制作 "なわてん 2025" 出展作品
                            </p>
                            <div className="alert alert--info margin-top--md" role="alert">
                                このサイトは、大学の卒業制作プロジェクトとして開発・運用されているプロトタイプです。
                            </div>
                        </div>

                        <div className="margin-bottom--xl">
                            <Heading as="h2">制作メンバー</Heading>
                            <div className="row">
                                {members.map((member, idx) => (
                                    <MemberCard key={idx} member={member} />
                                ))}
                            </div>
                        </div>

                        <div className="margin-bottom--xl">
                            <Heading as="h2">University eSports Kansai (UeSK) とは</Heading>
                            <p>
                                関西の学生eスポーツシーンを活性化させ、次世代のコミュニティリーダーを育成することを目的とした学生団体です。
                                「Drive Your Dreams.」をスローガンに、学生主体で大会運営やコミュニティ形成を行っています。
                            </p>
                        </div>

                        <div className="margin-bottom--xl">
                            <Heading as="h2">制作の背景</Heading>
                            <p>
                                学生団体の活動は、メンバーの入れ替わりが激しく、ノウハウの継承が困難であるという課題があります。
                                本プロジェクトでは、UeSKの活動を通じて得られた知見や、イベント運営のマニュアル、技術ドキュメントを一元管理し、
                                持続可能な組織運営を支援するためのナレッジベース構築を目指しています。
                            </p>
                            <p>
                                このサイト自体が、Docusaurusを用いたドキュメント管理システムの技術実証であり、
                                後輩たちが容易に情報を更新・活用できる基盤となることを意図しています。
                            </p>
                        </div>
                        <div className="margin-bottom--xl">
                            <Heading as="h2">制作内容</Heading>
                            <p>
                                ・UeSKの活動を通じたeスポーツ大会の制作<br />
                                ・大会制作を通じて手に入れた経験・知識の共有を図るためのナレッジベース構築<br />
                                ・Docusaurusを用いたドキュメント管理システムの技術実証<br />
                            </p>
                        </div>
                        <div className="text--center margin-top--xl" style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <Link
                                className="button button--primary button--lg"
                                to="/">
                                ドキュメントサイトへ移動
                            </Link>
                            <Link
                                className="button button--secondary button--lg"
                                to="/credit">
                                クレジット
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

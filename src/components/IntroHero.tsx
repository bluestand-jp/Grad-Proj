import React from 'react';
import styles from './IntroHero.module.css';

interface IntroHeroProps {
    title: string;
    subtitle?: string;
    description?: string;
}

/**
 * Introページ用のヒーローセクションコンポーネント
 * グラデーション背景と大きなタイトルで印象的な導入を演出
 */
export default function IntroHero({ title, subtitle, description }: IntroHeroProps): React.ReactElement {
    return (
        <div className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.title}>{title}</h1>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                {description && <p className={styles.description}>{description}</p>}
            </div>
            <div className={styles.heroDecoration}>
                <div className={styles.circle1}></div>
                <div className={styles.circle2}></div>
                <div className={styles.circle3}></div>
            </div>
        </div>
    );
}

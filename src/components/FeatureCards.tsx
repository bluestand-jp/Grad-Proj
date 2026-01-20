import React from 'react';
import styles from './FeatureCards.module.css';

export interface FeatureCardItem {
    icon: string;
    title: string;
    description: string;
}

interface FeatureCardsProps {
    items: FeatureCardItem[];
}

/**
 * フィーチャーカードコンポーネント
 * 3カラムのカードレイアウトでポイントを視覚的に表示
 */
export default function FeatureCards({ items }: FeatureCardsProps): React.ReactElement | null {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.grid}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={styles.card}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className={styles.iconWrapper}>
                            <span className={styles.icon}>{item.icon}</span>
                        </div>
                        <h3 className={styles.title}>{item.title}</h3>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

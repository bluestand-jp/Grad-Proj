import React from 'react';
import styles from './Timeline.module.css';
import clsx from 'clsx';

export interface TimelineItem {
    year: string;
    title: string;
    description: string;
    image?: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps): React.ReactElement | null {
    if (!items || items.length === 0) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.timeline}>
                {items.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.content}>
                            {item.image && (
                                <div className={styles.imageContainer}>
                                    <img src={item.image} alt={item.title} className={styles.image} />
                                </div>
                            )}
                            <div className={styles.year}>{item.year}</div>
                            <div className={styles.line} />
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

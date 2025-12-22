import React, { useState } from 'react';
import styles from './Slideshow.module.css';
import clsx from 'clsx';

export type SlideshowImage = string | { src: string; order?: number };

interface SlideshowProps {
    images: SlideshowImage[];
    sortImages?: boolean;
    hasGap?: boolean;
}

export default function Slideshow({ images, sortImages = false, hasGap = true }: SlideshowProps): React.ReactElement | null {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (!images || images.length === 0) {
        return null;
    }

    // Sort images if enabled
    const processedImages = images.map(img =>
        typeof img === 'string' ? { src: img, order: Infinity } : { src: img.src, order: img.order ?? Infinity }
    );

    const displayImages = sortImages
        ? processedImages.sort((a, b) => a.order - b.order)
        : processedImages;


    const openModal = (src: string) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={clsx(styles.scrollContainer, !hasGap && styles.noGap)}>
                    {displayImages.map((item, index) => (
                        <div
                            key={index}
                            className={styles.slide}
                            onClick={() => openModal(item.src)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    openModal(item.src);
                                }
                            }}
                        >
                            <img src={item.src} alt={`Slide ${index + 1}`} className={styles.image} />
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className={styles.modalOverlay}
                    onClick={closeModal}
                    role="dialog"
                    aria-modal="true"
                >
                    <div className={styles.modalContent}>
                        <img src={selectedImage} alt="Enlarged view" className={styles.modalImage} />
                    </div>
                </div>
            )}
        </>
    );
}

import React, { useState } from 'react';
import styles from './Slideshow.module.css';

interface SlideshowProps {
    images: string[];
}

export default function Slideshow({ images }: SlideshowProps): React.ReactElement | null {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (!images || images.length === 0) {
        return null;
    }

    const openModal = (src: string) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.scrollContainer}>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className={styles.slide}
                            onClick={() => openModal(src)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    openModal(src);
                                }
                            }}
                        >
                            <img src={src} alt={`Slide ${index + 1}`} className={styles.image} />
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

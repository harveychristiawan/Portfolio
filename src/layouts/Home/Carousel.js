import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const Carousel = ({ images, alt, onImageChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance slides if there are multiple images
  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      onImageChange && onImageChange(nextIndex);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length, isHovered, onImageChange]);

  // Notify parent component of image change
  useEffect(() => {
    onImageChange && onImageChange(currentIndex);
  }, [currentIndex, onImageChange]);

  return (
    <div
      className={styles.carouselControls}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={styles.arrow}
        onClick={e => {
          e.stopPropagation();
          const nextIndex = (currentIndex - 1 + images.length) % images.length;
          setCurrentIndex(nextIndex);
        }}
      >
        &lt;
      </button>

      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.active : ''
            }`}
            onClick={e => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
          />
        ))}
      </div>

      <button
        className={styles.arrow}
        onClick={e => {
          e.stopPropagation();
          const nextIndex = (currentIndex + 1) % images.length;
          setCurrentIndex(nextIndex);
        }}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;

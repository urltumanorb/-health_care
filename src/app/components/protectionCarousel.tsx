"use client";  // 确保这是一个客户端组件

import { useState, useEffect, useRef } from 'react';
import styles from './protectionCarousel.module.css';

const ProtectionCarousel = () => {
  const slides = [
    {
      icon: "/images/pro1.png", // 示例图标，请替换为实际路径
      title: "Wear Mask",
      description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
    },
    {
      icon: "/images/pro2.png", // 示例图标，请替换为实际路径
      title: "Wash Your Hands",
      description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
    },
    {
      icon: "/images/pro3.png", // 示例图标，请替换为实际路径
      title: "Stay at Home",
      description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef();

  useEffect(() => {
    if (isAnimating) {
      const handleTransitionEnd = () => {
        slideRef.current.style.transition = 'none';
        if (currentSlide >= slides.length) {
          setCurrentSlide(0);
        } else if (currentSlide < 0) {
          setCurrentSlide(slides.length - 1);
        }
        setTimeout(() => {
          setIsAnimating(false);
          slideRef.current.style.transition = 'transform 0.5s ease';
        }, 50);
      };

      slideRef.current.addEventListener('transitionend', handleTransitionEnd);

      return () => {
        slideRef.current.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [currentSlide, isAnimating, slides.length]);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => prev - 1);
  };

  return (
    <div className={styles.carousel}>
      <h2 className={styles.title}>HOW TO PROTECT YOURSELF</h2>
      <p className={styles.subtitle}>
        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
      </p>
      <div className={styles.slidesContent}>
        <div className={styles.slidesWrapper}>
            <div className={styles.slidesContainer} ref={slideRef} style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
            {slides.concat(slides).map((slide, index) => (
                <div key={index} className={styles.slide}>
                <img src={slide.icon} alt={slide.title} className={styles.icon} />
                <h3 className={styles.slideTitle}>{slide.title}</h3>
                <p className={styles.description}>{slide.description}</p>
                <button className={styles.button}>READ MORE</button>
                </div>
            ))}
            </div>
        </div>
      </div>
      <button className={`${styles.buttonNav} ${styles.prev}`} onClick={prevSlide}>❮</button>
      <button className={`${styles.buttonNav} ${styles.next}`} onClick={nextSlide}>❯</button>
    </div>
  );
};

export default ProtectionCarousel;

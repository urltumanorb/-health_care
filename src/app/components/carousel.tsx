"use client";  // 确保这是一个客户端组件

import { useState, useEffect } from 'react';
import styles from './carousel.module.css';

const Carousel = () => {
  const slides = [
    { text: "Care early Coronavirus" },
    { text: "Stay Safe, Stay Healthy" },
    { text: "Get Vaccinated" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 自动切换时间间隔为3秒
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsSliding(false), 1000); // 动画时间为1秒
  };

  const prevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsSliding(false), 1000); // 动画时间为1秒
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.slidesContainer} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles.text}>{slide.text}</div>
          </div>
        ))}
      </div>
      <button className={`${styles.button} ${styles.prev}`} onClick={prevSlide}>❮</button>
      <button className={`${styles.button} ${styles.next}`} onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carousel;

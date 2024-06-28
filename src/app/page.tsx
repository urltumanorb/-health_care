"use client";
import styles from "./home.module.css";
import Carousel from './components/carousel';
import ProtectionCarousel from "./components/protectionCarousel";
import DoctorCards from "./components/doctorcard";
import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <div id="health">
      <Header />
      <div className={styles.topContent}>
        <Carousel />
      </div>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            ABOUT CORONA VIRUS
            <div className={styles.underline}></div>
          </h2>
          <p className={styles.description}>
            English. Many desktop publishing packages and web page editors now use
            Lorem Ipsum as their default model text, and a search for
          </p>
          <button className={styles.button}>
            <Link href="/about">ABOUT MORE</Link>
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img src="/images/virus.png" alt="Coronavirus" className={styles.image} />
        </div>
      </div>
      <div className={styles['cough-container']}>
        <div className={styles['cough-imageContainer']}>
          <img src="/images/cough.png" alt="Coronavirus" className={styles['cough-image']} />
        </div>
        <div className={styles['cough-textContainer']}>
          <h2 className={styles['cough-title']}>
            CORONAVIRUS
            <br />
            WHAT IT IS?
          </h2>
          <p className={styles['cough-description']}>
            when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using
          </p>
          <button className={styles['cough-button']}>
            <Link href="/about">ABOUT MORE</Link>
          </button>
        </div>
      </div>
      <ProtectionCarousel />
      <DoctorCards />
      <Footer />
    </div>
    
  );
}

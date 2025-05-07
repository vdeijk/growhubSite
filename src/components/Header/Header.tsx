import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
import dashboard from "../../../public/assets/dashboard.jpg";
import crops from "../../../public/assets/crops.jpg";
import produce from "../../../public/assets/produce.jpg";

const images = [dashboard, crops, produce];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const duration = 5000;

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    timeoutRef.current = setInterval(nextImage, duration);

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className={styles.appHeader}>
      <div className={styles.overlay}></div>
      <div className={styles.slider}>
        {images.map((src, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === activeIndex ? styles.slideActive : ""
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <div className={styles.headerContent}>
        <Heading level={1}>Welcome to Growhub</Heading>
        <Heading
          level={2}
          customStyles={{ letterSpacing: 12, marginBottom: "4rem" }}
        >
          Your New Farming Companion
        </Heading>
        <Button
          size={"large"}
          href="https://vdeijk.github.io/growhub/"
        >
          Try it for free
        </Button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import styles from "./SneakPeak.module.css";
import growHubImage from "/assets/GrowHub2.png";
import Heading from "../Heading/Heading";

const SneakPeak = () => {
  return (
    <section className={styles.sneakPeakSection}>
      <Heading
        level={2}
        customStyles={{
          color: "var(--color-text)",
          textAlign: "center",
          letterSpacing: 12,
          marginBottom: "2rem"
        }}
      >
        Discover Your Interface
      </Heading>
      <img src={growHubImage} alt="GrowHub" className={styles.image} />
    </section>
  );
};

export default SneakPeak;

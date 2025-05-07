import React from "react";
import styles from "./Features.module.css";
import Heading from "../Heading/Heading";

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.card}>
        <Heading level={3}>Smart Crop Management</Heading>
        <p>Effortlessly monitor and optimize your crop's growth.</p>
      </div>
      <div className={styles.card}>
        <Heading level={3}>Real-Time Insights</Heading>
        <p>Stay ahead with data-driven decisions and predictive analytics.</p>
      </div>
      <div className={styles.card}>
        <Heading level={3}>Resource Optimization</Heading>
        <p>Maximize yields while minimizing waste and resource usage.</p>
      </div>
    </section>
  );
};

export default Features;
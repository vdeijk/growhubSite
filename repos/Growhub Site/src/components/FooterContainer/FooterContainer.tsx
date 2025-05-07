import React from "react";
import styles from "./FooterContainer.module.css";
import Heading from "../Heading/Heading";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialIcon from "../SocialIcon/SocialIcon";
import FooterLink from "../FooterLink/Footerlink";

const FooterContainer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCol}>
        <Heading
          level={5}
          customStyles={{ color: "var(--color-white)", marginBottom: "1rem" }}
        >
          {"Follow"}
        </Heading>
        <ul className={styles.socialIcons}>
          <SocialIcon
            link="https://github.com/vdeijk"
            icon={FaGithub}
            label="GitHub"
          />
          <SocialIcon
            link="https://www.linkedin.com/in/rick-van-der-eijk-9829b774/"
            icon={FaLinkedin}
            label="LinkedIn"
          />
        </ul>
      </div>

      <div className={styles.footerCol}>
        <Heading
          level={5}
          customStyles={{ color: "var(--color-white)", marginBottom: "1rem" }}
        >
          {"Contact"}
        </Heading>
        <p className={styles.contactText}>Name: Rick van der Eijk </p>
        <p className={styles.contactText}>Phone: (+31)628258357 </p>
        <p className={styles.contactText}>Email: rickvdeijk@gmail.com </p>
        <br></br>
        <p className={styles.contactText}>
          Available for freelance work, customizations, or full-time roles.{" "}
        </p>
      </div>

      <div className={styles.resources}>
        <Heading
          level={5}
          customStyles={{ color: "var(--color-white)", marginBottom: "1rem" }}
        >
          {"Resources"}
        </Heading>
        <ul className={styles.resources}>
          <FooterLink
            link="https://vdeijk.github.io/growhubDocs/"
            label="Documentation"
          />
        </ul>
      </div>
    </footer>
  );
};

export default FooterContainer;

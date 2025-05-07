import React from "react";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import MenuLink from "../MenuLink/MenuLink";
import Logo from "../Logo/Logo";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <ul className={styles.menu}>
        <MenuLink to="https://vdeijk.github.io/growhubDocs/">Docs</MenuLink>
      </ul>
      <Button
        size={"small"}
        href="https://vdeijk.github.io/growhub/"
      >
        Login
      </Button>
    </nav>
  );
};

export default Navbar;

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
      {/* <ul className={styles.menu}>
        <MenuLink to="#features">Features</MenuLink>
        <MenuLink to="#pricing">Pricing</MenuLink>
        <MenuLink to="#contact">Contact</MenuLink>
      </ul> */}
      <Button size={"small"} onClick={() => console.log("Login clicked")}>
        Login
      </Button>
    </nav>
  );
};

export default Navbar;

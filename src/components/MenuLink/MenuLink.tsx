import React from "react";
import styles from "./MenuLink.module.css";
import { useLocation, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

interface MenuLinkProps {
  to: string;
  children: React.ReactNode;
}

const MenuLink: React.FC<MenuLinkProps> = observer(({ to, children }) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <li className={styles.menuItem}>
      <Link
        to={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.menuLink} ${isActive ? styles.active : ""}`}
      >
        {children}
      </Link>
    </li>
  );
});

export default MenuLink;

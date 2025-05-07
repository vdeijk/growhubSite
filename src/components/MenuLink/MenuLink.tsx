import React from 'react';
import styles from './MenuLink.module.css';;
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

interface MenuLinkProps {
  to: string;
  children: React.ReactNode;
}

const MenuLink: React.FC<MenuLinkProps> = observer(({ to, children }) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  const clickHandler = () => {
    // Add navigation logic here if needed
  };

  return (
    <li className={styles.menuItem}>
      <button
        onClick={clickHandler}
        className={`${styles.menuLink} ${isActive ? styles.active : ''}`}
      >
        {children}
      </button>
    </li>
  );
});

export default MenuLink;

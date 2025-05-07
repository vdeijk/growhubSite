import React, { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
}

const Button: FC<ButtonProps> = ({ children, onClick, size = "medium" }) => {
  return (
    <button className={`${styles.customButton} ${styles[size]}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

import React, { FC } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  href?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  size = "medium",
  href,
  ...props
}) => {
  return (
    <button
      className={`${styles.customButton} ${styles[size]}`}
      onClick={(e) => {
        e.preventDefault();
        if (href) {
          window.open(href, "_blank", "noopener,noreferrer");
        } else if (onClick) {
          onClick();
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

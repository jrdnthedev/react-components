import style from './button.module.css';
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick: () => void;
}

export function Button({ children, onClick }: ButtonProps) {

  return <button className={style.button} onClick={onClick}>{children}</button>;
}
"use client";
import style from './button.module.css';
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  function handleClick() {console.log("clicked")}

  return <button className={style.button} onClick={handleClick}>{children}</button>;
}
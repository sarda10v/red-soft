import React from "react";
import cls from "./PasswordHint.module.scss";

const PasswordHint = () => {
  return (
    <div className={cls.page}>
      <div className={cls.margin}></div>
      <p>login: 123</p>
      <p>password: 123</p>
    </div>
  );
};

export default PasswordHint;

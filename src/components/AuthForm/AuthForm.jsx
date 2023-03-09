import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cls from "./AuthForm.module.scss";
import { authSignIn } from "../../features/applicationSlice";
import Loader from "../Loader/Loader";
import PasswordHint from "../PasswordHint/PasswordHint";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.application.isLoading);
  const error = useSelector((state) => state.application.error);

  const handleSetName = (e) => {
    setUsername(e.target.value);
  };
  const handleSetPass = (e) => {
    setPassword(e.target.value);
  };
  const handleSignUp = (e) => {
    dispatch(authSignIn({ username, password }));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className={cls.wrapper}>
      <h1>Authorization</h1>
      {error ? <div className={cls.error_block}>{error}</div> : null}
      <div className={cls.form_wrapper}>
        <input
          type="text"
          value={username}
          onChange={handleSetName}
          placeholder="login"
        />

        <input
          type="password"
          value={password}
          onChange={handleSetPass}
          placeholder="password"
        />
        <button onClick={handleSignUp}>Login</button>
      </div>
      <div className={cls.passwordHint}>
        {/* DELETE  ↓ */}
        <PasswordHint />
      </div>
    </div>
  );
};
export default AuthForm;

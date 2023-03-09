import React from "react";
import cls from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/applicationSlice";

const Header = () => {
  const token = useSelector((state) => state.application.token);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className={cls.header}>
      <div className={cls.wrapper}>
        <Link to={"/"} className={cls.logo}>
          <div className={cls.logo_span}>
            <span>RED</span>
            SOFT
          </div>
        </Link>
        <nav>
          <Link to={"/"}>
            <button>Main</button>
          </Link>
          {token && (
            <Link to={"/browse"}>
              <button>Browse</button>
            </Link>
          )}
          {!token ? (
            <Link to={"/login"}>
              <button>signin</button>
            </Link>
          ) : (
            <button onClick={handleExit}>Exit</button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

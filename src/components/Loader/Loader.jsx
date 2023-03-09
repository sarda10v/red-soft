import React from "react";
import cls from "./Loader.module.scss";
const Loader = () => {
  return (
   <div className={cls.position_loader}>
     <div className={cls.loader}>
      <div className={cls.loader_text}>Loading...</div>
      <div className={cls.loader_bar}></div>
    </div>
   </div>
  );
};

export default Loader;

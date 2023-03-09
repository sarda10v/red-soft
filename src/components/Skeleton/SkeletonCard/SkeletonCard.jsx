import React from "react";
import cls from "./SkeletonCard.module.scss";
const SkeletonCard = () => {
  return (
    <div className={cls.skeleton}>
      <div className={cls.skeleton_load}></div>
      <div className={cls.skeleton_load_extreme_title}></div>
      <div className={cls.skeleton_load_extreme_descripion}></div>
    </div>
  );
};

export default SkeletonCard;

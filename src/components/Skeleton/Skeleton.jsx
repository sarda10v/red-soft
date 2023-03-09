import React from "react";
import SkeletonCard from "./SkeletonCard/SkeletonCard";
import cls from "./Skeleton.module.scss";

const Skeleton = () => {
  return (
    <div className={cls.skeleton_wrapper}>
      {[...Array(12).keys()].map((item, index) => {
        return <SkeletonCard key={index}/>;
      })}
    </div>
  );
};

export default Skeleton;

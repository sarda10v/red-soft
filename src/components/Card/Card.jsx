import React from "react";
import cls from "./Card.module.scss";

const Card = () => {
  return (
    <div className={cls.card_wrapper}>
      {[...Array(12).keys()].map((item, index) => {
        return (
          <div className={cls.card} key={index}>
            <div className={cls.card_load}>
              <img
                src="https://www.clipartmax.com/png/middle/434-4349876_profile-icon-vector-png.png"
                alt="avatar"
              />
            </div>
            <div className={cls.card_load_extreme_title}>
              Card # {index + 1}
            </div>
            <div className={cls.card_load_extreme_descripion}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
              laborum accusamus sit amen to consectetur adipisicing yes lab...
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;

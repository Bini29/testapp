import React from "react";
import style from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={style.nav}>
      <button>home</button>
      <button>search</button>
      <button>favorites</button>
    </div>
  );
};

export default Navigation;

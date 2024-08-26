import React from "react";
import style from "./index.module.css";

interface BaseListTileProps {
  name: string;
  family: string;
  phoneNumber: string;
}

const BaseListTile: React.FC<BaseListTileProps> = (props) => {
  return (
    <div>
      <div className={style.container}>
        <div className={style.txt}>{props.name}</div>
        <div className={style.txt}>{props.family}</div>
      </div>
      <div className={style.txt}>{props.phoneNumber}</div>
    </div>
  );
};

export default BaseListTile;

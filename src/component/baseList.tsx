import React from "react";

interface BaseListTileProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

const BaseListTile: React.FC<BaseListTileProps> = (props) => {
  return (
    <div className="">
      <div className="">
        <div className="">{props.firstName}</div>
        <div className="">{props.lastName}</div>
      </div>
      <div className="">{props.phoneNumber}</div>
    </div>
  );
};

export default BaseListTile;

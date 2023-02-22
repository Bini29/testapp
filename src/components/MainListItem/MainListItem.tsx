import React, { FC } from "react";
import { toJS } from "mobx";
const MainListItem: FC<any> = ({ columnIndex, rowIndex, style, data }) => {
  const itemIndex = rowIndex * 6 + columnIndex;
  const itemData = toJS(data[itemIndex]);
  //   console.log(itemData);

  return (
    <div style={style} className={"GridItem"}>
      <img src={itemData.icon} alt="" />
      <span>
        {itemIndex}. {itemData.name}
      </span>
    </div>
  );
};

export default MainListItem;

import React, { FC, useEffect } from "react";
import { useRootStore } from "../../store/RootStateContext";
import { FixedSizeGrid as Grid } from "react-window";
import Item from "../MainListItem/MainListItem";
import { observer } from "mobx-react";

const MainList: FC = observer(() => {
  const { chanelStore } = useRootStore();

  return (
    <Grid
      className="Grid"
      columnCount={6}
      columnWidth={320}
      height={1100}
      rowCount={chanelStore.channels.length / 6}
      itemData={chanelStore.channels}
      rowHeight={275}
      width={1920}
    >
      {Item}
    </Grid>
  );
});

export default MainList;

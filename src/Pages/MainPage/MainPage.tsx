import React, { FC } from "react";
import { observer } from "mobx-react";
import Navigation from "../../components/Navigation";

const MainPage: FC = observer(() => {
  return (
    <div>
      <Navigation />
    </div>
  );
});

export default MainPage;

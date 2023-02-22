import React, { useContext, useEffect } from "react";

import MainPage from "./Pages/MainPage";
import { useRootStore } from "./store/RootStateContext";

const App = () => {
  const { chanelStore } = useRootStore();

  useEffect(() => {
    chanelStore.fetchChannels();
    console.log(chanelStore.channels);
  }, []);

  return <MainPage />;
};

export default App;

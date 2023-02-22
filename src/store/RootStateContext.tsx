import React, { createContext, FC, PropsWithChildren, useContext } from "react";
import { ChannelsStore } from "./ChannelsStore";

type RootStateContextValue = {
  chanelStore: ChannelsStore;
};

const RootStateContext = createContext<RootStateContextValue>(
  {} as RootStateContextValue
);

const chanelStore = new ChannelsStore();

export const RootStateProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <RootStateContext.Provider value={{ chanelStore }}>
      {children}
    </RootStateContext.Provider>
  );
};

export const useRootStore = () => useContext(RootStateContext);

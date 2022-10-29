import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

import { useIsMobile } from "hooks";

type ProviderProps = {
  children: React.ReactNode;
};
type PlacementType = "left" | "right";
type SidebarStateType = "closed" | "expanded" | "small" | "openWithOverlay";

type InitialContextType = {
  sidebarState: SidebarStateType;
  setSidebarState: Dispatch<SetStateAction<SidebarStateType>>;
  placement: PlacementType;
  prevSidebarState: SidebarStateType;
  setPrevSidebarState: Dispatch<SetStateAction<SidebarStateType>>;
};

const initContextData: InitialContextType = {
  placement: "right",
  sidebarState: "closed",
  setSidebarState: () => {},
  prevSidebarState: "openWithOverlay",
  setPrevSidebarState: () => {},
};

const SidebarContext = createContext(initContextData);

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }: ProviderProps) => {
  const [sidebarState, setSidebarState] = useState<SidebarStateType>("closed");
  const [prevSidebarState, setPrevSidebarState] = useState<SidebarStateType>("openWithOverlay");

  const { isMobile } = useIsMobile();
  const placement: PlacementType = isMobile ? "right" : "left";

  return (
    <SidebarContext.Provider
      value={{ sidebarState, setSidebarState, placement, prevSidebarState, setPrevSidebarState }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

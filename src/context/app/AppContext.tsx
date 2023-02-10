import React, { createContext, useContext, useState } from "react";

type FrameworkType = "vite" | "next";

type ProviderProps = {
  children: React.ReactNode;
  defaultFramework?: FrameworkType;
};

type InitialContextType = {
  framework: FrameworkType;
  setFramework: (framework: FrameworkType) => void;
};

const initContextData: InitialContextType = {
  framework: "vite",
  setFramework: () => {},
};

const AppContext = createContext(initContextData);

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children, defaultFramework = "vite" }: ProviderProps) => {
  const [framework, setFramework] = useState<FrameworkType>(defaultFramework);

  return <AppContext.Provider value={{ framework, setFramework }}>{children}</AppContext.Provider>;
};

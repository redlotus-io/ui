"use client";

import { AppProvider, SidebarProvider, useThemeUtils } from "@redlotus/ui";
import { Toaster } from "react-hot-toast";

interface Props {
  children: React.ReactNode;
}

export const RedlotusWrapper = ({ children }: Props) => {
  useThemeUtils();
  return (
    <AppProvider defaultFramework="next">
      <SidebarProvider>
        {children}
        <Toaster />
      </SidebarProvider>
    </AppProvider>
  );
};

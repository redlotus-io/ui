import { useEffect } from "react";

import { useSidebar } from "context";
import { useIsMobile } from "hooks";

export const useSidebarUtils = () => {
  const { sidebarState, setSidebarState, setPrevSidebarState } = useSidebar();
  const { isMobile } = useIsMobile();
  // when sidebar is expanded and click is not on sidebar, close the sidebar
  const sidebar = document.getElementById("sidebar");
  const sidebarButton = document.getElementById("sidebar-button");
  useEffect(() => {
    const closeSidebar = (e: MouseEvent) => {
      e.preventDefault();

      const target = e.target as HTMLElement;

      if (
        (sidebarState === "expanded" && target !== sidebar && !sidebar?.contains(target)) ||
        (sidebarState === "openWithOverlay" &&
          target !== sidebar &&
          !sidebar?.contains(target) &&
          target !== sidebarButton &&
          !sidebarButton?.contains(target))
      ) {
        if (isMobile) {
          setPrevSidebarState("openWithOverlay");
          setSidebarState("closed");
        } else {
          setPrevSidebarState("expanded");
          setSidebarState("closed");
          setTimeout(() => {
            setSidebarState("small");
          }, 250);
        }
      }
    };
    window.addEventListener("click", closeSidebar);
    return () => window.removeEventListener("click", closeSidebar);
  }, [sidebarState]);
};

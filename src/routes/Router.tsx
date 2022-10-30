import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useSidebar } from "context";
import { useIsMobile } from "hooks";

import { routes } from ".";

export const Router = () => {
  const root = document.documentElement;

  const { sidebarState, setSidebarState, setPrevSidebarState } = useSidebar();
  const { isMobile } = useIsMobile();

  useEffect(() => {
    if (localStorage.theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <Routes>
      {routes.map(route => (
        <Route path={route.to} element={route.element} />
      ))}
    </Routes>
  );
};

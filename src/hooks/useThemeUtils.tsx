import { useEffect } from "react";

export const useThemeUtils = () => {
  const root = document.documentElement;

  useEffect(() => {
    if (localStorage.theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

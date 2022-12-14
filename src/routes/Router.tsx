import { Route, Routes } from "react-router-dom";

import { useThemeUtils } from "hooks";
import { routes } from "routes";

export const Router = () => {
  useThemeUtils();
  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.to} path={route.to} element={route.element} />
      ))}
    </Routes>
  );
};

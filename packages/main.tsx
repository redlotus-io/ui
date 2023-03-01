import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AppProvider, SidebarProvider } from "@/context";
import { Router } from "@/routes";
import "./style.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <AppProvider>
      <SidebarProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SidebarProvider>
    </AppProvider>
  </StrictMode>
);

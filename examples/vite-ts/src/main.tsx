/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
import "@redlotus/ui/dist/style.css";
import "../index.css";

import { SidebarProvider } from "@redlotus/ui";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./routes";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <Router />
        <Toaster />
      </BrowserRouter>
    </SidebarProvider>
  </StrictMode>
);

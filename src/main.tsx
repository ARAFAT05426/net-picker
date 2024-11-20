import "./index.css";
import "./utils/I18n";
import { Toaster } from "sonner";
import { StrictMode } from "react";
import routes from "./routes/Routes";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ContextProvider } from "./contexts/ContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const query = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={query}>
        <ContextProvider>
          <RouterProvider router={routes} />
          <Toaster position="top-center" richColors />
        </ContextProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>
);

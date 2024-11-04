import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ThemeProvider from "./providers/theme.provider.tsx";
import App from "./App.tsx";

import "./assets/Variables.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);

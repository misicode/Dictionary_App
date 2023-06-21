import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import ThemeProvider from "./providers/theme.provider.tsx";

import "./assets/variables.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

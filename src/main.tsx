import React from "react";
import ReactDOM from "react-dom/client";

import ThemeProvider from "./providers/theme.provider.tsx";
import App from "./App.tsx";

import "./assets/Variables.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

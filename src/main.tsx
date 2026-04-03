import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./theme/index.ts";
import CssBaseline from "@mui/material/CssBaseline";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* يضمن تطبيق خلفية الثيم على كامل الصفحة */}
      <App />
    </ThemeProvider>
  </StrictMode>,
);

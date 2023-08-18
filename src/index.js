import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import StatusToggle from "./StatusToggle";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <StatusToggle />
  </StrictMode>
);

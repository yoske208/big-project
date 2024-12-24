import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AnalysisProvider from "./Providers/AnalysisProvider.tsx";
import RelationProvider from "./Providers/RelationshipsProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AnalysisProvider>
        {/* <RelationProvider> */}
          <App />
        {/* </RelationProvider> */}
      </AnalysisProvider>
    </BrowserRouter>
  </StrictMode>
);

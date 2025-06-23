import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SongLibrary from "./SongLibrary";

// Standalone dev mode — used only when testing micro frontend directly
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SongLibrary userRole="admin" />
  </React.StrictMode>
);

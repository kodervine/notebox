import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppNoteProvider } from "./contexts/NoteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppNoteProvider>
      <App />
    </AppNoteProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/UserContext.jsx";
import { AdminProvider } from "./contexts/AdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <AdminProvider>
        <App />
      </AdminProvider>
    </UserProvider>
  </React.StrictMode>
);

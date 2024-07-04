import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Secure from "./pages/Secure";
import Admin from "./pages/Admin";
import Private from "./pages/Private";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secure" element={<Secure />} />
        <Route path="/private" element={<Private />} />
        <Route path="/admin/*" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

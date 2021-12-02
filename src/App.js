import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Admin from "./components/admin";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/TradeCars/" element={<Home />} />
          <Route path="/TradeCars/admin" element={<Admin />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

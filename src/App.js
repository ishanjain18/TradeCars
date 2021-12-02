import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Admin from "./components/admin";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/TradeCars/" element={<Home />} />
          <Route path="/TradeCars/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

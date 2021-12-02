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
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
          <Route path={process.env.PUBLIC_URL + "/admin"} element={<Admin />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

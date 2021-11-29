import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Admin from "./components/admin";

import "bootstrap/dist/css/bootstrap.min.css";

// Function-based component
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Class-based component
// class App extends React.Component {
//   render() {
//     return <Header />;
//   }
// }

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./templates/Home";
import About from "./templates/About";

function App() {
  React.useEffect(() => {
    // app init Logic
  }, []);

  // routes
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

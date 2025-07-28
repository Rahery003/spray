import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PortfolioHeriniaina from "./pages/PortfolioHeriniaina";
import PortfolioManga from "./pages/PortfolioManga";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolio/heriniaina"
            element={<PortfolioHeriniaina />}
          />
          <Route path="/portfolio/manga" element={<PortfolioManga />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

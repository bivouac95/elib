import React from "react";
import ReactDOM from "react-dom/client";
import UsualPage from "./pages/usual_page.jsx";
import MainPage from "./pages/main_page.jsx";
import BlockPage from "./pages/block_page.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:key" element={<UsualPage />} />
        <Route path="/article/:id" element={<BlockPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

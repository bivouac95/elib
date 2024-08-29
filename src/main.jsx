import React from "react";
import ReactDOM from "react-dom/client";
import UsualPage from "./pages/usual_page.jsx";
import MainPage from "./pages/main_page.jsx";
import BlockPage from "./pages/block_page.jsx";
import SearchPage from "./pages/search_page.jsx";
import AdminPage from "./pages/admin_page.jsx";
import AdminDelete from "./pages/admin_delete-list.jsx";
import AdminUpdateList from "./pages/admin_update-list.jsx";
import AdminNew from "./pages/admin_new.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="elib/" element={<MainPage />} />
        <Route path="elib/:key" element={<UsualPage />} />
        <Route path="elib/article/:id" element={<BlockPage />} />
        <Route path="elib/search" element={<SearchPage />} />
        <Route path="elib/admin" element={<AdminPage />} />
        <Route path="elib/admin/delete/:key" element={<AdminDelete />} />
        <Route path="elib/admin/update/:key" element={<AdminUpdateList />} />
        <Route path="elib/admin/new" element={<AdminNew />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

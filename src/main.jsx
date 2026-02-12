import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom"; // เพิ่มบรรทัดนี้
import "./index.css";
import App from "./App.jsx";
import AppDev from "./AppDev.jsx"; // นำเข้าหน้าใหม่ที่คุณสร้าง

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        {/* หน้าแรก (IT Support) */}
        <Route path="/" element={<App />} />

        {/* หน้าใหม่ (เช่น Developer) เข้าผ่านลิ้งค์ /#/dev */}
        <Route path="/dev" element={<AppDev />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

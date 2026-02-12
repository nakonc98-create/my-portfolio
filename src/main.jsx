import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AppIt from "./AppIt.jsx";
import AppDev from "./AppDev.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        {/* หน้าแรก (/) ให้แสดงหน้าเลือก (LandingPage) */}
        <Route path="/" element={<App />} />

        {/* ย้ายหน้า IT Support ไปที่ /it */}
        <Route path="/it" element={<AppIt />} />

        {/* หน้า Developer อยู่ที่ /dev เหมือนเดิม */}
        <Route path="/dev" element={<AppDev />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);

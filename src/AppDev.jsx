import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
// คุณอาจจะต้องสร้าง Section ใหม่สำหรับหน้านี้โดยเฉพาะ ถ้าเนื้อหาต่างกันมาก
// เช่น LeftSectionDev, RightSectionDev
import LeftSection from "./sections/LeftSection";
import RightSection from "./sections/RightSection";

function AppDev() {
  return (
    <div className="bg-black md:bg-blue-950/30">
      <div className="mx-auto max-w-6xl gap-y-5 grid md:grid-cols-[30%_70%]">
        {/* ตรงนี้คุณอาจจะเปลี่ยน Component หรือส่ง Props เพื่อเปลี่ยนเนื้อหา */}
        <LeftSection />
        <RightSection />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default AppDev;

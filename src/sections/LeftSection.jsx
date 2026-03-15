import Header from "./Header";
import Navbar from "./Navbar";
import Contact from "./Contact";

const LeftSection = ({ headerData }) => {
  return (
    <div className="px-7 md:bg-black">
      {/* เพิ่ม overscroll-contain เข้าไปที่ div นี้ */}
      <div className="sticky top-5 flex flex-col gap-y-5 md:justify-between md:max-h-[100vh] overflow-y-auto overscroll-contain pb-5">
        <Header data={headerData} />
        <Navbar />
        <Contact />
      </div>
    </div>
  );
};

export default LeftSection;

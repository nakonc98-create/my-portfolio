import Header from "./Header";
import Navbar from "./Navbar";
import Contact from "./Contact";

// รับ prop headerData มาเพื่อส่งต่อให้ Header
const LeftSection = ({ headerData }) => {
  return (
    <div className="px-7 md:bg-black">
      <div className="sticky top-5 grid gap-y-5 md:grid-rows-[2fr_2fr_1fr] md:h-[90vh]">
        <Header data={headerData} />
        <Navbar />
        <Contact />
      </div>
    </div>
  );
};

export default LeftSection;

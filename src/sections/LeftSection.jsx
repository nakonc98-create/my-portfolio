import Header from "./Header";
import Navbar from "./Navbar";
import Contact from "./Contact";

const LeftSection = ({ headerData }) => {
  return (
    <div className="px-7 md:bg-black">
      <div className="sticky top-5 flex flex-col gap-y-5 md:justify-between md:h-[calc(100vh-1.25rem)] overflow-y-auto overscroll-contain pb-5">
        <Header data={headerData} />
        <Navbar />
        <Contact />
      </div>
    </div>
  );
};

export default LeftSection;

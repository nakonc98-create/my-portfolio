import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const navs = [
  { title: "About", sectionId: "About-section" },
  { title: "Skills", sectionId: "Skills-section" },
  { title: "Experience", sectionId: "Experience-section" },
  { title: "Project", sectionId: "Project-section" },
  { title: "Certificate", sectionId: "Certificate-section" },
];

const Navbar = () => {
  const [isHover, setIsHover] = useState(null);
  const [activeNav, setActiveNav] = useState("About"); // ตั้งค่าเริ่มต้นให้ตรงกับตัวแรก

  const handleClick = (sectionId, title) => {
    setActiveNav(title);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = 150; //ปรับ offset ให้เหมาะสม (ประมาณ 100-150px)
      // ตรวจสอบตำแหน่ง Scroll ปัจจุบัน
      const scrollPosition = window.scrollY;

      // ถ้าอยู่ที่จุดบนสุดของหน้าจอ ให้ Active เมนูแรกทันที (About)
      if (scrollPosition === 0) {
        setActiveNav(navs[0].title);
        return;
      }

      for (const nav of navs) {
        const section = document.getElementById(nav.sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // ถ้าขอบบนของ Section อยู่เหนือเส้น Offset และขอบล่างยังไม่พ้นเส้น Offset
          if (rect.top <= offset && rect.bottom >= offset) {
            setActiveNav(nav.title);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // เรียกครั้งแรกเพื่อให้ทำงานทันทีที่โหลด

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hidden md:flex flex-col font-semibold mt-1">
      {navs.map((e, i) => {
        const isShowArrow = isHover === e.title || activeNav === e.title;

        return (
          <div
            key={i}
            onClick={() => handleClick(e.sectionId, e.title)}
            onMouseEnter={() => setIsHover(e.title)}
            onMouseLeave={() => setIsHover(null)}
            className={`flex cursor-pointer py-3 px-4 rounded-md transition-all
                ${
                  activeNav === e.title
                    ? "bg-blue-300/15 text-blue-500"
                    : "hover:bg-blue-300/30 hover:text-blue-500"
                }`}
          >
            <div className="w-6">
              <FontAwesomeIcon
                icon={faArrowRight}
                className={`text-sm text-blue-700 transition-all duration-500 ease-in-out 
                    ${
                      isShowArrow
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-2"
                    }`}
              />
            </div>
            <div
              className={`transition-all duration-300 ${
                isShowArrow ? "translate-x-2" : ""
              }`}
            >
              {e.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;

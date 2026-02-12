import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { data } from "../contents/header";
import { useState, useEffect } from "react"; // เพิ่ม useEffect

const Header = () => {
  const [isHover, setIsHover] = useState(false);

  // State สำหรับ Modal
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // ฟังก์ชันเปิด Modal
  const openModal = () => {
    setIsOpen(true);
    // หา index ของรูปหลักใน array (ถ้ามี) เพื่อเริ่มแสดงที่รูปนั้น หรือเริ่มที่ 0
    // ในที่นี้เริ่มที่ 0 หรือจะเขียน logic เพิ่มก็ได้
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImageIndex(0);
  };

  // ฟังก์ชันเลื่อนรูป
  const nextImage = (e) => {
    e.stopPropagation();
    if (data.pictures && data.pictures.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % data.pictures.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (data.pictures && data.pictures.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? data.pictures.length - 1 : prev - 1
      );
    }
  };

  // จัดการปุ่มกด (ESC, Arrow Keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "ArrowLeft") prevImage(e);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // ป้องกันการ scroll พื้นหลัง
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentImageIndex]);

  return (
    <div className="flex flex-col gap-2 mt-10 md:mt-0" id="header">
      <div className="text-3xl text-blue-700 font-semibold">{data.name}</div>
      <div className="font-semibold text-xl text-blue-500">{data.title}</div>

      {/* ส่วนรูปภาพโปรไฟล์หลัก (เพิ่ม onClick) */}
      <div className="flex justify-center">
        <div
          className="cursor-pointer transition duration-300 ease-in-out hover:scale-102 hover:opacity-90"
          onClick={openModal}
          title="คลิ๊กเพื่อดูรูปภาพเพิ่มเติม"
        >
          <img
            src={data.picture}
            alt={data.name}
            className="w-50 md:w-40 h-50 md:h-40 rounded-full object-cover object-top my-10 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 shadow-sm group hover:shadow-[0_0_50px_rgba(59,130,246,1)]"
          />
        </div>
      </div>

      <div
        className="flex justify-center mt-4 font-semibold"
        title="คลิ๊กเพื่อดูเรซูเม่"
      >
        <a href={data.resume} target="_blank" rel="noreferrer">
          <span
            className="bg-blue-900 py-2 px-2 rounded-md hover:bg-white hover:text-blue-900 hover:ring-3 ring-blue-900 duration-300"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {data.btnName}
            <span className="inline-block text-xs ml-1">
              <FontAwesomeIcon
                className={`size-6 ${isHover ? "animate-bounce" : ""}`}
                icon={faArrowDown}
              />
            </span>
          </span>
        </a>
      </div>

      {/* --- MODAL IMAGE SLIDER (Code จาก ContentContainer มาปรับใช้) --- */}
      {isOpen && data.pictures && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 md:p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl max-h-[95vh] flex flex-col items-center group"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 md:-top-12 md:right-0 z-50 bg-black/50 border-2 border-blue-700 text-white rounded-full p-2 hover:bg-red-500 transition"
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous Button */}
            {data.pictures.length > 1 && (
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-full transition md:opacity-0 md:group-hover:opacity-100"
                onClick={prevImage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            )}

            {/* Main Image */}
            <img
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-2xl border border-gray-700/50 animate-zoomIn transition-all duration-300"
              src={data.pictures[currentImageIndex]}
              alt={`${data.name} ${currentImageIndex + 1}`}
            />

            {/* Next Button */}
            {data.pictures.length > 1 && (
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 z-50 bg-black/50 hover:bg-blue-600 text-white p-3 rounded-full transition md:opacity-0 md:group-hover:opacity-100"
                onClick={nextImage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            )}

            {/* Image Counter */}
            {data.pictures.length > 1 && (
              <div className="absolute -top-10 bg-blue-900/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {data.pictures.length}
              </div>
            )}

            <div className="mt-2 text-white text-sm md:text-lg font-medium bg-gray-900/80 px-4 py-1 md:px-6 md:py-2 rounded-full border border-blue-700 animate-fadeIn text-center">
              {data.name}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

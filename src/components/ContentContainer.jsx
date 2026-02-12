import { useState, useEffect } from "react";
import Date from "./Date";
import Description from "./Description";
import Material from "./Material";
import Picture from "./Picture";
import Tech from "./Tech";
import Title from "./Title";

const ContentContainer = (props) => {
  const SECTION_ID = `${props.title}-section`;
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State เก็บ index ของรูปปัจจุบัน

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0); // รีเซ็ต index เมื่อปิด
  };

  // ฟังก์ชันเลื่อนรูป
  const nextImage = (e) => {
    e.stopPropagation();
    if (selectedItem && selectedItem.pictures.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedItem.pictures.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (selectedItem && selectedItem.pictures.length > 1) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedItem.pictures.length - 1 : prev - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      // เพิ่มคีย์ลัดลูกศรซ้ายขวา
      if (selectedItem) {
        if (e.key === "ArrowRight") nextImage(e);
        if (e.key === "ArrowLeft") prevImage(e);
      }
    };

    if (selectedItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedItem, currentImageIndex]); // เพิ่ม dependency เพื่อให้ state อัปเดตถูกต้อง

  return (
    <div id={SECTION_ID} className="scroll-m-14">
      <div className="font-semibold text-xl text-blue-500 mb-3">
        {props.title}
      </div>
      {props.data.map((e, i) => (
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] py-4" key={i}>
          <div className="flex flex-col gap-y-4">
            <Date value={e.duration} />
            {/* ในหน้า list แสดงเฉพาะรูปแรก (รูปปก) */}
            <div
              onClick={() =>
                e.pictures && e.pictures.length > 0 && setSelectedItem(e)
              }
              className={
                e.pictures && e.pictures.length > 0 ? "cursor-pointer" : ""
              }
            >
              <Picture
                value={e.pictures ? e.pictures[0] : null}
                title={e.title}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-4 mt-2 md:mt-0 md:ml-5">
            <Title value={e.title} />
            <Material value={e.material} />
            <Description value={e.description} />
            <Tech value={e.skill} />
          </div>
        </div>
      ))}

      {/* MODAL IMAGE SLIDER */}
      {selectedItem && selectedItem.pictures && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 md:p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-5xl max-h-[95vh] flex flex-col items-center group" // เพิ่ม group เพื่อโชว์ปุ่มเมื่อ hover
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

            {/* Previous Button (Show only if > 1 image) */}
            {selectedItem.pictures.length > 1 && (
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
              src={selectedItem.pictures[currentImageIndex]}
              alt={`${selectedItem.title} ${currentImageIndex + 1}`}
            />

            {/* Next Button (Show only if > 1 image) */}
            {selectedItem.pictures.length > 1 && (
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

            {/* Image Counter Indicator */}
            {selectedItem.pictures.length > 1 && (
              <div className="absolute -top-10 bg-blue-900/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedItem.pictures.length}
              </div>
            )}

            {/* Title */}
            <div className="mt-2 text-white text-sm md:text-lg font-medium bg-gray-900/80 px-4 py-1 md:px-6 md:py-2 rounded-full border border-blue-700 animate-fadeIn text-center">
              {selectedItem.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentContainer;

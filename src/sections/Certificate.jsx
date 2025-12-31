import { useEffect, useState } from "react";

const Certificate = (props) => {

    const SECTION_ID = `${props.title}-section`;
    const [selectedCert, setSelectedCert] = useState(null);

    const closeModal = () => {
        setSelectedCert(null);
    };

    // เพิ่มเติม: จัดการการกดปุ่ม Esc และล็อคการเลื่อนของ Body
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") closeModal();
        };

        if (selectedCert) {
            // ป้องกันไม่ให้หน้าเว็บด้านหลังเลื่อนขณะเปิด Modal
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleKeyDown);
        } else {
            // คืนค่าการเลื่อนตามปกติ
            document.body.style.overflow = "auto";
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedCert]);

    return (
        <div id={SECTION_ID} className='scroll-m-14'>
            <div className='font-semibold text-xl text-blue-500 mb-3'>{props.title}</div>
            
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {props.data.map((e, i) => (
                    <div className="p-4 md:p-8" key={i}>
                        <div 
                            className="h-full flex flex-col cursor-pointer rounded-xl bg-blue-900/50 overflow-hidden transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 shadow-lg group" 
                            onClick={() => setSelectedCert(e)}
                        >
                            <div className="h-48 w-full overflow-hidden shrink-0">
                                <img 
                                    src={e.image} 
                                    alt={e.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 flex flex-col flex-1">
                                <h3 className="font-semibold mb-2 text-white">{e.title}</h3>
                                <div className="mt-auto">
                                    <p className="text-sm text-blue-300">สถาบัน: {e.institution} | {e.year}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL - Moved OUTSIDE the loop and conditioned on selectedCert */}
            {selectedCert && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn" // ใส่ animate-fadeIn ที่นี่
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute -top-12 right-0 md:top-4 md:right-4 z-50 bg-black/50 border-2 border-blue-700 text-white rounded-full p-2 hover:bg-red-500 transition"
                            onClick={closeModal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* รูปภาพ: เพิ่มคลาส animate-zoomIn ที่เราสร้างใน CSS */}
                        <img
                            className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-gray-700/50 animate-zoomIn"
                            src={selectedCert.image}
                            alt={selectedCert.title}
                        />

                        <div className="mt-4 text-white text-lg font-medium bg-gray-900/80 px-6 py-2 rounded-full border border-blue-700 animate-fadeIn">
                            {selectedCert.title}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Certificate
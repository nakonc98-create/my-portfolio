import { useEffect, useRef, useState } from "react";
import { data } from "../contents/skill";

const Skill = () => {
  const SECTION_ID = `${data.title}-section`;

  // 1. สร้าง Ref เพื่ออ้างอิงถึง Element ก้อนใหญ่ของ Skill
  const sectionRef = useRef(null);

  // 2. สร้าง State เพื่อบอกว่าตอนนี้มองเห็นส่วนนี้อยู่หรือไม่
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentEl = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // entry.isIntersecting คือค่า boolean (true = เห็น, false = ไม่เห็น)
        // การเซ็ตค่านี้จะทำให้ React สั่ง Render ใหม่ และถอด/ใส่ class
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // 0.1 หมายถึงเห็นพื้นที่สัก 10% ก็ให้เริ่มทำงานเลย
      }
    );

    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, []);

  return (
    // ผูก Ref ไว้ที่กล่องใหญ่สุด
    <div ref={sectionRef} id={SECTION_ID} className="scroll-m-14 w-full">
      <h2 className="font-bold text-2xl text-blue-600 mb-10">{data.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data.items.map((skill, index) => (
          <div key={index} className="bg-blue-900/50 p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-white">{skill.name}</span>
              <span className="text-xs font-medium text-blue-900 bg-slate-200 px-2 py-1 rounded">
                {skill.level}
              </span>
            </div>

            {/* Progress Bar Background */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
              {/* 3. เพิ่ม className 'progress-bar' และเช็ค isVisible เพื่อเติม 'animate' */}
              <div
                className={`h-2.5 rounded-full bg-blue-500 progress-bar ${
                  isVisible ? "animate" : ""
                }`}
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

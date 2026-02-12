import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

// 1. ใช้ import.meta.glob ดึงรูปทั้งหมดจากโฟลเดอร์ (eager: true คือโหลดทันที)
// หมายเหตุ: ตรวจสอบ path โฟลเดอร์ให้ถูกต้องตามโครงสร้างไฟล์จริงของคุณ
const project1Images = import.meta.glob(
  "../assets/project1/*.{png,jpg,jpeg,svg}",
  { eager: true, import: "default" }
);
const project2Images = import.meta.glob(
  "../assets/project2/*.{png,jpg,jpeg,svg}",
  { eager: true, import: "default" }
);

// ฟังก์ชันช่วยแปลง Object ที่ได้จาก glob ให้เป็น Array ของ URL รูปภาพ
const getImages = (imagesObj) => Object.values(imagesObj);

export const title = "Project";
export const data = [
  {
    id: 1,
    title: "Development of a No Code Programming application...",
    duration: "ก.ค. 2566 - มี.ค. 2567",
    // 2. เปลี่ยนจาก picture เดี่ยว เป็น pictures (Array)
    pictures: getImages(project1Images),
    description:
      "โครงงานนี้จัดทำขึ้นเพื่อแก้ปัญหาความยุ่งยากของการตรวจสอบรายชื่อผู้ที่เข้าเรียนสำหรับสถาบันกวดวิชาโดยมีเป้าหมายเพื่อสร้างแอปพลิเคชันที่ช่วยอำนวยความสะดวกในการตรวจสอบผู้ที่เข้าเรียนลดการใช้ทรัพยากรกระดาษ,การจัดเก็บ,เวลา เครื่องมือที่ใช้พัฒนาคือ Glide ซึ่งเป็นเครื่องมือพัฒนาแบบ No-Code Programming (เขียนโค้ดน้อยหรือไม่ต้องเขียนเลย) ทำให้สามารถสร้างแอปพลิเคชันได้รวดเร็ว",
    skill: ["Glide"],
    material: [
      /*{ icon: faGithub, link: "" },
      { icon: faFileLines, link: "" },
      { icon: faGlobe, link: "" },
      { icon: faYoutube, link: "" },*/
    ],
  },
  {
    id: 2,
    title: "ระบบแจ้งซ่อม Smart Maintenance",
    duration: "ม.ค. 2569",
    // ใช้รูปจากโฟลเดอร์ project2
    pictures: getImages(project2Images),
    description:
      "โครงงานนี้จึงจัดทำขึ้นเพื่อพัฒนาระบบแจ้งซ่อมที่ทันสมัย รวดเร็ว และประหยัดงบประมาณ โดยประยุกต์ใช้ Google Sheets เป็นฐานข้อมูลกลางใช้ Google Apps Script เป็นตัวขับเคลื่อนการทำงานอัตโนมัติ (Automation) เชื่อมต่อระหว่างผู้แจ้งและช่างซ่อมบำรุงแบบ Real-time ผ่านแอพพลิเคชั่น LINE",
    skill: ["Google Apps Script", "Google Sheet", "LINE"],
    material: [
      /*{ icon: faGithub, link: "" },
      { icon: faFileLines, link: "" },
      { icon: faGlobe, link: "" },
      { icon: faYoutube, link: "" },*/
    ],
  },
];

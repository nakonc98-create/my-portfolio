import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import pic1 from "../assets/project1/Example.jpg";
import pic2 from "../assets/project2/Screenshot_2026-02-12-21-13-14-521_com.android.chrome_1.png";

export const title = "Project";
export const data = [
  {
    id: 1,
    title:
      "Development of a No Code Programming application to check the time attendance system",
    duration: "ก.ค. 2566 - มี.ค. 2567",
    picture: pic1,
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
    picture: pic2,
    description:
      "โครงงานนี้จึงจัดทำขึ้นเพื่อพัฒนาระบบแจ้งซ่อมที่ทันสมัย รวดเร็ว และประหยัดงบประมาณ โดยประยุกต์ใช้ Google Sheets เป็นฐานข้อมูลกลาง และใช้ Google Apps Script เป็นตัวขับเคลื่อนการทำงานอัตโนมัติ (Automation) เชื่อมต่อระหว่างผู้แจ้งและช่างซ่อมบำรุงแบบ Real-time",
    skill: ["Google Apps Script", "Google Sheet"],
    material: [
      /*{ icon: faGithub, link: "" },
      { icon: faFileLines, link: "" },
      { icon: faGlobe, link: "" },
      { icon: faYoutube, link: "" },*/
    ],
  },
];

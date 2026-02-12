import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import pic from "../assets/Project1.jpg";

export const title = "Project";
export const data = [
  {
    id: 1,
    title:
      "Development of a No Code Programming application to check the time attendance system",
    duration: "ก.ค. 2566 - มี.ค. 2567",
    picture: pic,
    description:
      "โครงงานนี้จัดทำขึ้นเพื่อแก้ปัญหาความยุ่งยากของการตรวจสอบรายชื่อผู้ที่เข้าเรียนสำหรับสถาบันกวดวิชาโดยมีเป้าหมายเพื่อสร้างแอปพลิเคชันที่ช่วยอำนวยความสะดวกในการตรวจสอบผู้ที่เข้าเรียนลดการใช้ทรัพยากรกระดาษ,การจัดเก็บ,เวลา เครื่องมือที่ใช้พัฒนาคือ Glide ซึ่งเป็นเครื่องมือพัฒนาแบบ No-Code Programming (เขียนโค้ดน้อยหรือไม่ต้องเขียนเลย) ทำให้สามารถสร้างแอปพลิเคชันได้รวดเร็ว",
    skill: ["Glide"],
    material: [
      { icon: faGithub, link: "" },
      { icon: faFileLines, link: "" },
      { icon: faGlobe, link: "" },
      { icon: faYoutube, link: "" },
    ],
  },
];

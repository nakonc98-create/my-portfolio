import myResume from "../assets/Resume_IT Support.pdf";
import myPicture from "../assets/profile/01_profile.jpg";

// 1. ดึงรูปทั้งหมดจากโฟลเดอร์ profile (เหมือนที่ทำใน project.jsx)
const profileImages = import.meta.glob(
  "../assets/profile/*.{png,jpg,jpeg,svg}",
  { eager: true, import: "default" }
);

// ฟังก์ชันแปลงเป็น Array
const getImages = (imagesObj) => Object.values(imagesObj);

export const data = {
  name: "Nakon Charoenruk",
  title: "IT Support",
  picture: myPicture, // รูปหลักสำหรับโชว์หน้าแรก (รูปวงกลม)
  pictures: getImages(profileImages), // รูปทั้งหมดสำหรับ Slide ใน Modal
  btnName: "View Resume",
  resume: myResume,
};

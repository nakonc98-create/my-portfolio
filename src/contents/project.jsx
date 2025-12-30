import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faFileLines } from "@fortawesome/free-regular-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import pic from "../assets/Cat.jpg"

export const title = "Project"
export const data = [
    {
        id: 1,
        title: "คณะสัตวแพทยศาสตร์ มหาวิทยาลัยสงขลานครินทร์ - ฝึกงานตำแหน่ง IT Support",
        duration: "17เม.ย.2566 - 12มิ.ย.2566",
        picture: pic,
        description: "12345",
        skill: ["React.js", "Node.js","MySQL","MySQL","MySQL","MySQL","MySQL","MySQL","MySQL","MySQL","MySQL","MySQL","MySQL","MySQL","MySQL","MySQL","MySQL","MySQL"],
        material: [
            { icon: faGithub, link: "https://www.google.com/"},
            { icon: faFileLines, link: "https://www.google.com/"},
            { icon: faYoutube, link: ""},
            { icon: faGlobe , link: "https://www.google.com/"},
        ],
    },
    {
        id: 2,
        title: "Career of IT",
        duration: "2020-2023",
        picture: pic,
        description: "56789",
        skill: ["Glide", "MySQL"],
        material: [
        ],
    },
    {
        id: 3,
        title: "Career of IT",
        duration: "2020-2023",
        picture: pic,
        description: "56789",
        skill: ["Glide", "MySQL"],
        material: [
            { icon: faGithub, link: "https://www.google.com/"},
            { icon: faYoutube, link: "https://www.google.com/"},
        ],
    },
];
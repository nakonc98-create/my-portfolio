import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../contents/contact";

const Contact = () => {
  return (
    <div className="flex items-end justify-center md:justify-normal text-2xl gap-4 mt-4">
      {data.map((e, i) => (
        <a
          key={i}
          href={e.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={e.name}
        >
          <FontAwesomeIcon
            className={`transition-all duration-300 ${e.link ? "hover:scale-125 hover:text-blue-500 cursor-pointer" : "opacity-40 pointer-events-none cursor-none"}`}
            icon={e.icon}
          />
        </a>
      ))}
    </div>
  );
};

export default Contact;

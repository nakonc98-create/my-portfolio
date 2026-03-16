import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex justify-center md:justify-end mb-5 hover:text-blue-500 duration-300">
      <span>
        <a
          href="https://github.com/nakonc98-create/my-portfolio.git"
          target="_blank"
        >
          Powered by React.js and TailwindCSS
          <FontAwesomeIcon className="ml-1" icon={faGithub} />
        </a>
      </span>
    </div>
  );
};

export default Footer;

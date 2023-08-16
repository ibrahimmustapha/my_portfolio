import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../styles/Footer.scss";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="">
      <div className="md:flex md:justify-between md:items-center md:p-6 p-5">
        <div className="py-3 text-center">
          <h3>Copyright © 2023. All rights are reserved</h3>
        </div>
        <div className="flex gap-5 justify-center">
          <FontAwesomeIcon icon={faGithubSquare} size="xl" />
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

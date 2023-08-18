import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rightArrow from '../assets/right-arrow.svg';
import image from "../assets/pic5.jpeg";

import {
  faDiscord,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  const icons = [
    { icon: faGithub, name: "Github" },
    { icon: faTwitter, name: "Twitter" },
    { icon: faLinkedin, name: "Linkedin" },
    { icon: faDiscord, name: "Discord" },
  ];
  return (
    <div className="justify-center items-center text-center px-5 md:max-w-3xl md:m-auto">
      <div className="">
        <div className="flex justify-center pb-6">
          <img
            className="rounded-full w-32 md:w-40 animate-bounce"
            src={image}
            alt="ibrahim_photo"
          />
        </div>
        <h1 className="mb-8 text-3xl md:text-5xl font-black font-poppins">
          Hola, I'm <span className="text-[#947666]">Ibrahim</span> and I'm a software developer
        </h1>
        <div className="mb-10">
          Software developer passionate about creating innovative solutions and
          leveraging technology to drive positive impact.
        </div>
        <div className="flex flex-wrap gap-7 justify-center">
        <div className="flex gap-3 items-center">
          <div className="font-medium">Tech Stack</div>
          <div><img src={rightArrow} className="w-10 h-10" alt="right_arrow"/></div>
        </div>
          {icons.map((icon) => (
            <div className="flex flex-wrap items-center gap-2 rounded-md">
              <FontAwesomeIcon
                icon={icon.icon}
                color="#e9ecef"
                className="md:text-3xl text-2xl cursor-pointer hover:text-4xl hover:text-blue-700"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
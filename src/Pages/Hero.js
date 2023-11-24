import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rightArrow from "../assets/right-arrow.svg";
import image from "../assets/safari-pinned-tab.svg";

import {
  faDiscord,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Hero = () => {
  const icons = [
    { icon: faGithub, name: "Github", link: "https://github.com/ibrahimmustapha" },
    { icon: faTwitter, name: "Twitter", link: "https://twitter.com/codewithibrahim" },
    { icon: faLinkedin, name: "Linkedin", link: "https://www.linkedin.com/in/ibrahim-mustapha-a12a891a8/" },
    { icon: faDiscord, name: "Discord", link: "https://discord.com/channels/1116314427902414948/1116314428418293822" },
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
          Hey there, I'm <span className="text-[#947666]">Ibrahim</span> and I'm a
          software developer
        </h1>
        <div className="mb-10">
          Software developer passionate about creating innovative solutions and
          leveraging technology to drive positive impact.
        </div>
        <div className="flex flex-wrap gap-7 justify-center">
          <div className="flex gap-3 items-center">
            <div className="font-medium">Social Links</div>
            <div>
              <img src={rightArrow} className="w-10 h-10" alt="right_arrow" />
            </div>
          </div>
          {icons.map((icon) => (
            <Link to={icon.link} target="_blank" className="flex flex-wrap items-center gap-2 rounded-md">
              <FontAwesomeIcon
                icon={icon.icon}
                color="#2D2727"
                className="md:text-3xl text-2xl cursor-pointer hover:text-4xl hover:text-blue-700"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;

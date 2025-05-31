import { Link } from "react-router-dom";
import arrow from "../../src/assets/right-arrow.svg";
import moon from "../../src/assets/icons8-moon-50.png";
import sun from "../../src/assets/icons8-sun-50.png";

const links = ["Home", "About", "Skills", "Blog", "Projects", "Contact"];

const Navbar = (props) => {
  return (
    <div
      style={{ color: props.textColor }}
      className={`flex justify-between items-center py-5 px-5 bg-[${props.navColor}] text-[${props.linkColor}]`}
    >
      <div className="flex gap-4 items-center text-xl font-black">
        <div>Ibrahim.code</div>
        <img
          src={arrow}
          className="rounded-full w-30 h-8 md:hidden"
          alt="ibrahim_photo"
        />
      </div>
      <button className="md:hidden" onClick={props.toggleTheme}>
        {props.isDarkMode ? (
          <img className=" w-7 h-7 text-white" src={sun} alt="sun-light" />
        ) : (
          <img className=" w-7 h-7" src={moon} alt="moon-dark" />
        )}
      </button>
      <ul className="md:flex gap-5 hidden">
        {links.map((link) => (
          <li className={`nav_link hover:text-yellow-600`}>
            <Link
              to={`#${link}`}
              onClick={() => window.location.replace(`#${link}`)}
            >
              {link}
            </Link>
          </li>
        ))}
        <li className="nav_link hover:text-yellow-600">
          <button onClick={props.toggleTheme}>
            {props.isDarkMode ? (
              <img className=" w-7 h-7 text-white active:animate-spin" src={sun} alt="sun-light" />
            ) : (
              <img className=" w-7 h-7 active:animate-spin" src={moon} alt="moon-dark" />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

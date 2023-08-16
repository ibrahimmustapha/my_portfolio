import { Link } from "react-router-dom";
import arrow from "../../src/assets/right-arrow.svg";
import logo from "../../src/assets/pic5.jpeg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5 px-5">
      <div className="flex gap-4 items-center text-xl font-black">
        <div>Ibrahim.code</div>
        <img
          src={arrow}
          className="rounded-full w-30 h-8 md:hidden"
          alt="ibrahim_photo"
        />
      </div>
      <img
          src={logo}
          className="animate-bounce rounded-full w-30 h-8 md:hidden"
          alt="ibrahim_photo"
        />
      <ul className="md:flex gap-5 hidden">
        <li className="nav_link">
          <Link to="#">Home</Link>
        </li>
        <li className="nav_link">
          <Link to="#">About</Link>
        </li>
        <li className="nav_link">
          <Link to="#">Projects</Link>
        </li>
        <li className="nav_link">
          <Link to="#">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

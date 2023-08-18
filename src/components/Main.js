import { faMoon } from "@fortawesome/free-solid-svg-icons";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Footer from "../Pages/Footer";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import BottomDivider from "./BottomDivider";
import Navbar from "./Nav";
import TopDivider from "./TopDivider";

const Main = () => {
  return (
    <div className="md:text-lg text-[rgb(232,230,230)] overflow-hidden block bg-[#212529]">
      <div className="max-w-7xl m-auto bg-green">
        <Navbar />
      </div>
      <TopDivider />
      <div>
        <div className="bg-[#343a40]">
          <div className="max-w-5xl m-auto pb-16">
            <Hero />
          </div>
        </div>
        <BottomDivider />
        <div className="md:max-w-6xl md:m-auto md:text-lg md:py-28 py-20">
          <About />
        </div>
        <TopDivider />
        <div className="bg-[#343a40]">
          <div className="md:max-w-6xl md:m-auto py-20 md:pt-16 md:pb-10">
            <Projects />
          </div>
        </div>
        <BottomDivider />
        <div className="md:max-w-5xl md:m-auto md:text-lg px-5 py-20">
          <Contact />
        </div>
        <TopDivider />
        <div className="bg-[#343a40] text-white">
          <div className="max-w-5xl m-auto">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

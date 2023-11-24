import { useState } from "react";
import About from "../Pages/About";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
import Footer from "../Pages/Footer";
import Hero from "../Pages/Hero";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import { darkMode, lightMode } from "../themes/Theme";
import BottomDivider from "./BottomDivider";
import Navbar from "./Nav";
import TopDivider from "./TopDivider";

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? darkMode : lightMode;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  return (
    <div style={{ color: theme.textColor }}
      className={`md:text-lg text-[${theme.textColor}] overflow-hidden block bg-[${theme.bgColor}] scroll-smooth`}
    >
      <div className="max-w-7xl m-auto">
        <Navbar textColor={theme.textColor} linkColor={theme.textColor} navColor={theme.darkColor} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      </div>
      <TopDivider topDivColor={theme.dividerColor} />
      <div>
        <div className={`bg-[${theme.dividerColor}]`}>
          <div className="max-w-5xl m-auto pb-16">
            <Hero textColor={theme.textColor} iconColor={theme.textColor} />
          </div>
        </div>
        <BottomDivider bottomDivColor={theme.dividerColor} />
        <div
          className="md:max-w-6xl md:m-auto md:text-lg md:py-28 py-20"
          id="About"
        >
          <About textColor={theme.textColor} />
        </div>
        <TopDivider topDivColor={theme.dividerColor} />
        <div className={`bg-[${theme.dividerColor}] text-[${theme.textColor}]`} id="Skills">
          <div className="md:max-w-6xl md:m-auto py-20 md:pt-16 md:pb-10">
            <Skills />
          </div>
        </div>
        <BottomDivider bottomDivColor={theme.dividerColor} />
        <div className="" id="Projects">
          <div className="md:max-w-6xl md:m-auto py-20 md:pt-16 md:pb-10">
            <Projects textColor={theme.textColor} cardBgColor={theme.textColor} />
          </div>
        </div>
        <TopDivider topDivColor={theme.dividerColor} />
        <div className={`bg-[${theme.dividerColor}]`} id="Blog">
          <div className="md:max-w-5xl md:m-auto py-20 md:pt-16 md:pb-10">
            <Blog blogBgColor={theme.bgColor} textColor={theme.textColor}/>
          </div>
        </div>
        <BottomDivider bottomDivColor={theme.dividerColor} />
        <div
          className="md:max-w-6xl md:m-auto md:text-lg px-5 py-20"
          id="Contact"
        >
          <Contact />
        </div>
        <TopDivider topDivColor={theme.dividerColor} />
        <div className={`bg-[${theme.dividerColor}]`}>
          <div className="max-w-5xl m-auto">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

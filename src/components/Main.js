import { useEffect, useMemo, useRef, useState } from "react";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import Hero from "../pages/Hero";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Navbar from "./Nav";

const SECTION_IDS = ["Home", "About", "Skills", "Projects", "Blog", "Contact"];

const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    const storedPreference = localStorage.getItem("theme");
    if (storedPreference) {
      return storedPreference === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [activeSection, setActiveSection] = useState("Home");
  const activeSectionRef = useRef("Home");

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    const target = navbarRef.current;
    if (!target) {
      return;
    }

    const updateHeight = () => {
      if (!navbarRef.current) {
        return;
      }
      const { height } = navbarRef.current.getBoundingClientRect();
      setNavbarHeight(height);
    };

    updateHeight();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(() => updateHeight());
      observer.observe(target);
      return () => observer.disconnect();
    }

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const surfaceClasses = useMemo(
    () =>
      "rounded-3xl border border-slate-200/60 bg-white/70 p-8 shadow-lg shadow-slate-900/5 backdrop-blur md:p-12 dark:border-slate-700/60 dark:bg-slate-900/70 dark:shadow-black/30",
    []
  );

  const baseOffset = 112; // 7rem fallback for when the ref has not been measured yet.
  const sectionOffset = (navbarHeight || baseOffset) + 24;
  const sectionScrollStyle = { scrollMarginTop: sectionOffset };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) {
      return;
    }

    let frameId = null;

    const findActiveSection = () => {
      frameId = null;
      const scrollPosition = window.scrollY + sectionOffset + 1;
      let currentId = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentId = section.id;
        } else {
          break;
        }
      }

      if (currentId !== activeSectionRef.current) {
        activeSectionRef.current = currentId;
        setActiveSection(currentId);
      }
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }
      frameId = window.requestAnimationFrame(findActiveSection);
    };

    const handleResize = () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
        frameId = null;
      }
      findActiveSection();
    };

    findActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [sectionOffset]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-slate-50 text-slate-800 transition-colors duration-500 ease-out dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-28 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl dark:bg-brand-secondary/25" />
        <div className="absolute top-1/3 -right-24 hidden h-80 w-80 rounded-full bg-brand-accent/20 blur-3xl md:block dark:bg-brand-primary/30" />
        <div className="absolute bottom-[-8rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-secondary/10 blur-3xl dark:bg-brand-accent/15" />
      </div>
      <Navbar
        ref={navbarRef}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        activeSection={activeSection}
        onSectionSelect={(target) => {
          activeSectionRef.current = target;
          setActiveSection(target);
        }}
      />
      <main
        className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col gap-24 px-6 pb-24 md:px-10 lg:px-0"
        style={{ paddingTop: sectionOffset }}
      >
        <section
          id="Home"
          className="animate-fadeUp scroll-mt-32 md:scroll-mt-40"
          style={sectionScrollStyle}
        >
          <Hero surfaceClasses={surfaceClasses} />
        </section>
        <section
          id="About"
          className="animate-fadeUp scroll-mt-32 md:scroll-mt-40"
          style={{ ...sectionScrollStyle, animationDelay: "0.1s" }}
        >
          <About surfaceClasses={surfaceClasses} />
        </section>
        <section
          id="Skills"
          className="animate-fadeUp scroll-mt-32 md:scroll-mt-40"
          style={{ ...sectionScrollStyle, animationDelay: "0.2s" }}
        >
          <Skills surfaceClasses={surfaceClasses} />
        </section>
        <section
          id="Projects"
          className="animate-fadeUp scroll-mt-32 md:scroll-mt-40"
          style={{ ...sectionScrollStyle, animationDelay: "0.3s" }}
        >
          <Projects surfaceClasses={surfaceClasses} />
        </section>
        <section
          id="Blog"
          className="animate-fadeUp scroll-mt-32 md:scroll-mt-40"
          style={{ ...sectionScrollStyle, animationDelay: "0.4s" }}
        >
          <Blog surfaceClasses={surfaceClasses} />
        </section>
        <section
          id="Contact"
          className="animate-fadeUp scroll-mt-32 md:scroll-mt-40"
          style={{ ...sectionScrollStyle, animationDelay: "0.5s" }}
        >
          <Contact surfaceClasses={surfaceClasses} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Main;

import { useState } from "react";
import moon from "../../src/assets/icons8-moon-50.png";
import sun from "../../src/assets/icons8-sun-50.png";

const links = ["Home", "About", "Skills", "Projects", "Blog", "Contact"];

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (target) => {
    setIsOpen(false);
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-6 md:px-10 lg:px-0">
        <div className="flex items-center justify-between rounded-full border border-slate-200/60 bg-white/70 px-5 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-lg transition-colors duration-300 dark:border-slate-700/60 dark:bg-slate-900/70 dark:shadow-black/40">
          <button
            onClick={() => handleNavClick("Home")}
            className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-800 transition duration-300 hover:scale-[1.02] hover:text-brand-primary dark:text-slate-100"
            aria-label="Scroll to top"
          >
            <span className="rounded-full bg-brand-primary/20 px-3 py-1 text-sm font-medium text-brand-primary dark:bg-brand-primary/20 dark:text-brand-accent">
              Ibrahim
            </span>
            <span className="hidden sm:inline">Portfolio</span>
          </button>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => handleNavClick(link)}
                className="text-slate-600 transition-colors duration-200 hover:text-brand-primary focus:text-brand-primary focus:outline-none dark:text-slate-300 dark:hover:text-brand-accent"
              >
                {link}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-slate-100 transition hover:-translate-y-0.5 hover:border-brand-primary/30 hover:bg-white hover:shadow-lg hover:shadow-brand-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 dark:bg-slate-800 dark:hover:bg-slate-700"
              aria-label="Toggle theme"
            >
              <img
                className="h-5 w-5 transition-transform duration-300 ease-out"
                src={isDarkMode ? sun : moon}
                alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              />
            </button>
          </nav>
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-slate-100 transition hover:-translate-y-0.5 hover:border-brand-primary/30 hover:bg-white hover:shadow-lg hover:shadow-brand-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 dark:bg-slate-800 dark:hover:bg-slate-700"
              aria-label="Toggle theme"
            >
              <img
                className="h-5 w-5 transition-transform duration-300 ease-out"
                src={isDarkMode ? sun : moon}
                alt={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              />
            </button>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-brand-primary/40 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:text-brand-accent"
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"}
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-3 rounded-3xl border border-slate-200/60 bg-white/90 p-6 shadow-lg shadow-slate-900/5 backdrop-blur-lg md:hidden dark:border-slate-700/60 dark:bg-slate-900/90 dark:shadow-black/40">
            <nav className="flex flex-col gap-4 text-base font-medium">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className="rounded-full px-4 py-2 text-left text-slate-700 transition hover:bg-brand-primary/10 hover:text-brand-primary dark:text-slate-200 dark:hover:bg-brand-primary/20 dark:hover:text-brand-accent"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

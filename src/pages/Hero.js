import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../assets/safari-pinned-tab.svg";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    icon: faGithub,
    name: "GitHub",
    link: "https://github.com/ibrahimmustapha",
  },
  {
    icon: faTwitter,
    name: "Twitter",
    link: "https://twitter.com/codewithibrahim",
  },
  {
    icon: faLinkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ibrahim-mustapha-a12a891a8/",
  },
  {
    icon: faDiscord,
    name: "Discord",
    link: "https://discord.com/channels/1116314427902414948/1116314428418293822",
  },
];

const Hero = ({ surfaceClasses }) => {
  const scrollToSection = (target) => {
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <div className={`${surfaceClasses} relative overflow-hidden`}>
        <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-brand-accent/40 blur-2xl dark:bg-brand-primary/30" />
        <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-brand-secondary/20 blur-2xl dark:bg-brand-accent/25" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1 text-sm font-semibold text-brand-primary dark:border-brand-accent/40 dark:bg-brand-accent/10 dark:text-brand-accent">
            <span className="h-2 w-2 rounded-full bg-brand-primary dark:bg-brand-accent" />
            Crafting user-first digital experiences
          </span>
          <h1 className="mt-6 text-3xl font-semibold leading-tight md:text-5xl md:leading-[1.1]">
            Hi, I'm Ibrahim — a software developer focused on building polished,
            performant products.
          </h1>
          <p className="mt-6 text-base text-slate-600 md:text-lg dark:text-slate-300">
            I bring ideas to life with delightful interfaces, resilient systems,
            and a collaborative mindset. From concept to launch, I care about the
            details that create memorable experiences.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => scrollToSection("Projects")}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary px-6 py-3 text-sm font-semibold uppercase tracking-tight text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/50"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("Contact")}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/60 px-6 py-3 text-sm font-semibold uppercase tracking-tight text-slate-700 transition hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-brand-accent/40 dark:hover:text-brand-accent"
            >
              Let's Collaborate
            </button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              Connect
            </span>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-transparent bg-white/70 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-brand-primary/40 hover:text-brand-primary hover:shadow-lg hover:shadow-brand-primary/20 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-brand-accent/40 dark:hover:text-brand-accent"
                  aria-label={social.name}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative mx-auto flex items-center justify-center">
        <div className={`${surfaceClasses} relative flex w-full max-w-sm flex-col items-center gap-6 overflow-hidden text-center`}>
          <div className="absolute inset-0 bg-hero-light transition-colors duration-300 dark:bg-hero-dark" />
          <div className="relative mt-6 flex h-28 w-28 items-center justify-center rounded-3xl bg-white/40 shadow-inner shadow-white/40 backdrop-blur dark:bg-slate-900/40">
            <img
              src={image}
              alt="Ibrahim Mustapha avatar"
              className="h-20 w-20 animate-float drop-shadow-md"
            />
          </div>
          <div className="relative px-6 pb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Currently
            </p>
            <h2 className="mt-2 text-xl font-semibold text-slate-800 dark:text-slate-100">
              Building full-stack experiences
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              React · Angular · Node.js · Firebase · Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

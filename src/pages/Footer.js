import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/40 bg-white/40 backdrop-blur-md transition-colors duration-300 dark:border-slate-800/60 dark:bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 lg:px-0">
        <div className="flex flex-col items-center justify-between gap-6 text-center text-sm text-slate-500 md:flex-row md:text-left dark:text-slate-400">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-primary dark:text-brand-accent">
              Ibrahim Mustapha
            </p>
            <p className="mt-2 text-sm">
              Designing and building digital experiences that feel just right.
            </p>
          </div>
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
            <a
              href="https://github.com/ibrahimmustapha"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-white/70 transition hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary hover:shadow-md hover:shadow-brand-primary/20 dark:bg-slate-900/60 dark:hover:border-brand-accent/40 dark:hover:text-brand-accent"
              aria-label="GitHub profile"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahim-mustapha-a12a891a8/"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-white/70 transition hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary hover:shadow-md hover:shadow-brand-primary/20 dark:bg-slate-900/60 dark:hover:border-brand-accent/40 dark:hover:text-brand-accent"
              aria-label="LinkedIn profile"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://twitter.com/codewithibrahim"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent bg-white/70 transition hover:-translate-y-0.5 hover:border-brand-primary/40 hover:text-brand-primary hover:shadow-md hover:shadow-brand-primary/20 dark:bg-slate-900/60 dark:hover:border-brand-accent/40 dark:hover:text-brand-accent"
              aria-label="Twitter profile"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-slate-400 md:flex-row dark:text-slate-500">
          <p>© {new Date().getFullYear()} Ibrahim B. Mustapha. All rights reserved.</p>
          <p>Made with React · Tailwind CSS · Love for details.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

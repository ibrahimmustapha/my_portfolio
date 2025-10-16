const ProjectCard = ({ title, details, image, link, tech }) => {
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
      href={link || undefined}
      target={link ? "_blank" : undefined}
      rel={link ? "noreferrer" : undefined}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/50 bg-white/70 transition-all duration-500 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-2xl hover:shadow-brand-primary/20 dark:border-slate-700/60 dark:bg-slate-900/70 dark:hover:border-brand-accent/40 dark:hover:shadow-brand-accent/15"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-700 shadow-sm dark:bg-slate-900/80 dark:text-slate-200">
          {tech?.[0] || "Featured"}
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-5 p-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-brand-primary dark:text-slate-100 dark:group-hover:text-brand-accent">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3 dark:text-slate-300">
            {details}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {tech?.map((item) => (
            <span
              key={item}
              className="rounded-full bg-brand-primary/10 px-3 py-1 text-brand-primary dark:bg-brand-accent/10 dark:text-brand-accent"
            >
              {item}
            </span>
          ))}
        </div>
        {link && (
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition group-hover:gap-3 dark:text-brand-accent">
            View project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M7 17L17 7" />
              <path d="M8 7H17V16" />
            </svg>
          </span>
        )}
      </div>
    </Wrapper>
  );
};

export default ProjectCard;

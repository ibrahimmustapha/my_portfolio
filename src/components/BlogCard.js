const BlogCard = ({ link, image, title, preview, surfaceClasses }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${surfaceClasses} group relative flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-brand-primary/40 hover:shadow-2xl hover:shadow-brand-primary/20 dark:hover:border-brand-accent/40 dark:hover:shadow-brand-accent/15`}
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-700 shadow-sm dark:bg-slate-900/80 dark:text-slate-200">
          Hashnode
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-6 pt-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 transition-colors duration-300 group-hover:text-brand-primary dark:text-slate-100 dark:group-hover:text-brand-accent">
            {title}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 line-clamp-3 dark:text-slate-300">
            {preview}
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition group-hover:gap-3 dark:text-brand-accent">
          Read article
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
      </div>
    </a>
  );
};

export default BlogCard;

const BackgroundCard = ({ title, date, preview }) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-xl hover:shadow-brand-primary/10 dark:border-slate-700/60 dark:bg-slate-900/70 dark:hover:border-brand-accent/40 dark:hover:shadow-brand-accent/10">
      <span className="absolute -left-4 top-6 hidden h-7 w-7 rounded-full bg-brand-primary/20 blur-xl transition-all duration-300 group-hover:bg-brand-primary/30 md:block dark:bg-brand-accent/25" />
      <div className="relative">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
          {title}
        </h3>
        <time className="mt-2 inline-flex rounded-full bg-brand-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-brand-primary dark:bg-brand-accent/10 dark:text-brand-accent">
          {date}
        </time>
        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {preview}
        </p>
      </div>
    </article>
  );
};

export default BackgroundCard;

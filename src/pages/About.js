import illustration from "../assets/lust1.svg";

const About = ({ surfaceClasses }) => {
  return (
    <div className={`${surfaceClasses} relative overflow-hidden`}>
      <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-br from-brand-primary/10 via-transparent to-transparent blur-2xl md:block dark:from-brand-accent/10" />
      <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="order-2 text-center md:order-1 md:text-left">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-primary dark:text-brand-accent">
            About
          </span>
          <h2 className="mt-4 text-2xl font-semibold md:text-4xl">
            A Ghana-based software developer who thrives on curiosity.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            From front-end polish to back-end robustness, I approach each
            project as a chance to craft purposeful products. My journey blends
            formal education with hands-on experimentation, letting me adapt
            quickly and deliver solutions that feel as good as they function.
          </p>
          <div className="mt-8 grid gap-4 text-left text-sm text-slate-500 dark:text-slate-300 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/40 bg-white/50 p-4 dark:border-slate-700/60 dark:bg-slate-900/60">
              <p className="font-semibold text-slate-700 dark:text-slate-100">
                How I work
              </p>
              <p className="mt-2 leading-relaxed">
                I iterate fast, collaborate openly, and sweat the interactions
                that delight users.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/40 bg-white/50 p-4 dark:border-slate-700/60 dark:bg-slate-900/60">
              <p className="font-semibold text-slate-700 dark:text-slate-100">
                Focus areas
              </p>
              <p className="mt-2 leading-relaxed">
                Design systems, full-stack apps, and high-performing interfaces
                grounded in accessibility.
              </p>
            </div>
          </div>
        </div>
        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute inset-0 translate-y-6 rounded-3xl bg-brand-primary/25 blur-3xl opacity-60 dark:bg-brand-accent/20" />
            <img
              className="relative z-10 w-full max-w-md rounded-3xl border border-white/60 shadow-2xl shadow-slate-900/20 dark:border-white/10"
              src={illustration}
              alt="Illustration of developer at work"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

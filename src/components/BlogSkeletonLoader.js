const BlogSkeletonLoader = ({ surfaceClasses }) => {
  return (
    <div
      className={`${surfaceClasses} relative overflow-hidden border-dashed opacity-80`}
    >
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/5" />
      <div className="relative flex flex-col gap-6">
        <div className="h-56 w-full rounded-2xl bg-slate-200/70 dark:bg-slate-700/60" />
        <div className="space-y-4">
          <div className="h-4 rounded-full bg-slate-200/80 dark:bg-slate-700/60" />
          <div className="h-4 w-10/12 rounded-full bg-slate-200/70 dark:bg-slate-700/50" />
          <div className="h-4 w-11/12 rounded-full bg-slate-200/70 dark:bg-slate-700/50" />
          <div className="h-4 w-8/12 rounded-full bg-slate-200/70 dark:bg-slate-700/50" />
        </div>
        <div className="h-3 w-28 rounded-full bg-slate-200/70 dark:bg-slate-700/50" />
      </div>
    </div>
  );
};

export default BlogSkeletonLoader;

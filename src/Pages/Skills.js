const Skills = () => {
  const techs = [
    "HTML",
    "CSS",
    "REACT",
    "ANGULAR",
    "JAVASCRIPT",
    "JAVA",
    "EXPRESS",
    "MYSQL",
    "MONGODB",
    "GRAPHQL",
  ];
  return (
    <div className="py-16 px-5">
      <div className="mb-5 text-xl font-black">SKILLS</div>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 sm:gap-5 md:gap-10">
        {techs.map((tech) => (
          <div className="text-3xl font-black py-4 my-3 w-full md:w-48 border-b-2 hover:animate-pulse hover:text-green-100">
            {tech}
          </div>
        ))}
      </div>
      <div className="my-20 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      <div className="mb-10 text-xl font-black hover:border-b-2 w-40 pb-2">BACKGROUND</div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fillRule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          {/* Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#212529] p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-white">Order Placed</div>
              <time className="font-caveat font-medium text-indigo-500">
                08/06/2023
              </time>
            </div>
            <div className="text-slate-400">
              Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
              morbi blandit cursus risus.
            </div>
          </div>
        </div>

        {/* Item #1 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
            >
              <path
                fillRule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>
          {/* Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[#212529] p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-white">Order Placed</div>
              <time className="font-caveat font-medium text-indigo-500">
                08/06/2023
              </time>
            </div>
            <div className="text-slate-400">
              Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
              morbi blandit cursus risus.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

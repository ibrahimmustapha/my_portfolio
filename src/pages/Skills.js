import BackgroundCard from "../components/BackgroundCard";

const techs = [
  "HTML",
  "CSS",
  "React",
  "Angular",
  "JavaScript",
  "Typescript",
  "Java",
  "Selenium",
  "Jenkins",
  "Playwright",
  "Cypress",
  "Express",
  "MySQL",
  "MongoDB",
  "GraphQL",
  "Firebase",
];

const educationTimeline = [
  {
    title: "QA Automation Engineer, Selenium & Java",
    date: "2023 – Present",
    preview:
      "Own Selenium WebDriver suites in Java, plug them into Jenkins, and champion shift-left testing across the team.",
  },
  {
    title: "Bachelor of Science in Information Technology Management",
    date: "Dec 2021 – Jul 2023",
    preview:
      "University of Professional Studies Accra — diving deep into systems design, software engineering, and project leadership.",
  },
  {
    title: "Diploma in Information Technology Management",
    date: "Dec 2019 – Jul 2022",
    preview:
      "Foundational studies that sharpened my analytical thinking, teamwork, and passion for solving real-world challenges.",
  },
  {
    title: "Java Programming Certification",
    date: "Dec 2018",
    preview:
      "Built a strong grounding in object-oriented thinking and software craftsmanship through intensive Udemy coursework.",
  },
];

const Skills = ({ surfaceClasses }) => {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <section className={`${surfaceClasses} relative overflow-hidden`}>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-t from-brand-primary/10 via-transparent to-transparent blur-3xl opacity-70 dark:from-brand-accent/15" />
        <div className="relative">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-primary dark:text-brand-accent">
            Capabilities
          </span>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            A versatile toolbox for crafting impactful, scalable experiences.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
            From intuitive interfaces to dependable infrastructure, I combine
            modern frameworks, design thinking, and problem-solving to deliver
            thoughtful products.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {techs.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-white/60 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-primary/50 hover:text-brand-primary dark:border-brand-accent/30 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-brand-accent/50 dark:hover:text-brand-accent"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary dark:bg-brand-accent" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className={`${surfaceClasses} relative overflow-hidden`}>
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-brand-accent/10 via-transparent to-transparent blur-2xl opacity-70 dark:from-brand-primary/10" />
        <div className="relative">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-primary dark:text-brand-accent">
            Background
          </span>
          <h3 className="mt-4 text-xl font-semibold md:text-2xl">
            Learning by doing, refining through iteration.
          </h3>
          <div className="mt-6 flex flex-col gap-5">
            {educationTimeline.map((item) => (
              <BackgroundCard
                key={item.title}
                title={item.title}
                date={item.date}
                preview={item.preview}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;

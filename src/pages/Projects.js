import ProjectCard from "../components/ProjectCard";
import WeatherImage from "../assets/weather-app.png";
import CovidImage from "../assets/covid-tracker.png";
import FramamImage from "../assets/framam.jpg";
import ChickenWords from "../assets/chickenwords.png";
import TwitterClone from "../assets/twitterclone.png";
import TravelAgency from "../assets/travel-agency.png";

const projects = [
  {
    id: 1,
    title: "Chicken Words",
    details:
      "A playful typing performance web app that turns practice into a fun challenge with real-time feedback and delightful micro-interactions.",
    image: ChickenWords,
    tech: ["React", "CSS", "Netlify"],
    link: "https://chickenwords.netlify.app/",
  },
  {
    id: 2,
    title: "Framam Recycling App",
    details:
      "A mobile experience that rewards responsible recycling behaviours with token-based incentives and community engagement tools.",
    image: FramamImage,
    tech: ["React Native", "Firebase", "Figma"],
    link: "https://www.youtube.com/watch?v=embRIgWbTG4&t=318s",
  },
  {
    id: 3,
    title: "Aurora Weather",
    details:
      "A global weather dashboard for instant forecasts, trend visualisations, and location-based insights at a glance.",
    image: WeatherImage,
    tech: ["Angular", "Tailwind CSS", "OpenWeather"],
    link: "https://shortcaster.netlify.app/",
  },
  {
    id: 4,
    title: "Covid Pro Tracka",
    details:
      "An interactive tracker highlighting real-time COVID-19 stats and insights from around the world with responsive charts.",
    image: CovidImage,
    tech: ["Angular", "Tailwind CSS", "REST APIs"],
    link: "https://covid-19-tracka.netlify.app",
  },
  {
    id: 5,
    title: "Travel Agency Landing Page",
    details:
      "We orchestrate every touchpoint—from vision workshops to on-the-ground execution—so your travelers can focus on connection, innovation, and discovery.",
    image: TravelAgency,
    tech: ["Vue", "Firebase", "Tailwind CSS"],
    link: "https://shaibstravel.netlify.app/",
  },
  {
    id: 6,
    title: "TwitterX Clone",
    details:
      "A re-imagined social feed built with real-time updates, authentication, and crisp UI inspired by modern social platforms.",
    image: TwitterClone,
    tech: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://twitterxclone.netlify.app/",
  },
];

const Projects = ({ surfaceClasses }) => {
  return (
    <div className="flex flex-col gap-10">
      <section className={`${surfaceClasses} relative overflow-hidden`}>
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-br from-brand-primary/15 via-transparent to-transparent blur-3xl opacity-80 dark:from-brand-accent/15" />
        <div className="relative text-center md:text-left">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-primary dark:text-brand-accent">
            Projects
          </span>
          <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
            Real-world experiments in solving problems with craft and intent.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base dark:text-slate-300">
            Each build is an opportunity to learn, iterate, and deliver value.
            Here’s a selection of recent work spanning web experiences, mobile
            apps, and experiment-driven prototypes.
          </p>
        </div>
      </section>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

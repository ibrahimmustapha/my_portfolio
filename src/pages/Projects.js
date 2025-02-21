import ProjectCard from "../components/ProjectCard";
import WeatherImage from "../assets/weather-app.png";
import CovidImage from "../assets/covid-tracker.png";
import FramamImage from "../assets/framam.jpg";
import ChickenWords from "../assets/chickenwords.png";
import TwitterClone from "../assets/twitterclone.png";

const projectsData = [
  {
    id: 1,
    title: "Chicken Words",
    details:
      "Chicken Word is a typing performance webapp that allows user to put their typing skills to test. Chicken words is very easy to use.",
    image: ChickenWords,
    tech: ["Html", "CSS", "Javascrips"],
    link: "https://chickenwords.netlify.app/",
  },
  {
    id: 2,
    title: "Framam Recycling App",
    details:
      "Framam (mobile-app) is a recycling reward system apps that rewards it users points from tokens that can be converted in the real funds later. ",
    image: FramamImage,
    tech: ["React Native", "Firebase"],
    link: "https://www.youtube.com/watch?v=embRIgWbTG4&t=318s",
  },
  {
    id: 3,
    title: "Weather App",
    details:
      "Wee-Shortcaster is a web app that allows you to check the weather conditions and the temperature of various cities across the globe.",
    image: WeatherImage,
    tech: ["Angular", "Tailwind CSS"],
    link: "https://shortcaster.netlify.app/",
  },
  {
    id: 4,
    title: "Covid Pro Tracka",
    details:
      "Covid Pro Tracka is a web based application that showcases the current covid 19 stats of all countries across the globe.",
    image: CovidImage,
    tech: ["Angular", "Tailwind CSS"],
    link: "https://covid-19-tracka.netlify.app",
  },
  {
    id: 5,
    title: "Todo List",
    details:
      "Seamlessly manage users with SSO and domain capture with SSO and domain capture.",
    image:
      "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg",
    tech: ["Vue", "CSS"],
    link: "",
  },
  {
    id: 6,
    title: "TwitterX Clone",
    details:
      "TwitterX clone is a clone of the twitter webapp. It was built with Reactjs, Firebase and styled with tailwindcss.",
    image: TwitterClone,
    tech: ["React", "Firebase"],
    link: "https://twitterxclone.netlify.app/",
  },
];

const Projects = (props) => {
  return (
    <div style={{ color: props.textColor }} className="md:pb-32 px-5">
      <div className="mb-5 text-xl font-black">PERSONAL PROJECTS</div>
      <div className="mb-8">
        Real World Projects Showcase - Each Project is Unique
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 g gap-10">
        {projectsData.map((project) => (
          <ProjectCard
            projectCardBgColor={props.cardBgColor}
            id={project.id}
            title={project.title}
            details={project.details}
            image={project.image}
            link={project.link}
          >
            {project.tech.map((tech) => (
              <div className="text-white bg-[#2f2f2f] rounded-lg shadow-lg shadow-black-900 p-1 pl-4 pr-4 hover:animate-pulse">
                {tech}
              </div>
            ))}
          </ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;

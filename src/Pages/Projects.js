import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Linkstor",
    details: "Seamlessly manage users with SSO and domain capture",
    image:
      "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg",
    tech: ["React", "Bootstrap 4"],
  },
  {
    id: 2,
    title: "Todo List",
    details: "Seamlessly manage users with SSO and domain capture",
    image:
      "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg",
    tech: ["Angular", "CSS"],
  },
  {
    id: 3,
    title: "Weather App",
    details: "Seamlessly manage users with SSO and domain capture",
    image:
      "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg",
    tech: ["React", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Linkstor",
    details: "Seamlessly manage users with SSO and domain capture",
    image:
      "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg",
    tech: ["React", "Bootstrap 4"],
  },
  {
    id: 5,
    title: "Todo List",
    details: "Seamlessly manage users with SSO and domain capture",
    image:
      "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg",
    tech: ["Angular", "CSS"],
  },
  {
    id: 6,
    title: "Weather App",
    details: "Seamlessly manage users with SSO and domain capture",
    image:
      "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg",
    tech: ["React", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <div className="md:pb-32 px-5">
      <div className="mb-5 text-xl font-black">PERSONAL PROJECTS</div>
      <div className="mb-8">
        Real World Projects Showcase - Each Project is Unique
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 g gap-10">
        {projectsData.map((project) => (
          <ProjectCard
            id={project.id}
            title={project.title}
            details={project.details}
            image={project.image}
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

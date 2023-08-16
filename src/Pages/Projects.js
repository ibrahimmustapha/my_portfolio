// import "../styles/Projects.scss";

const projectsData = [
  {
    id: 1,
    title: "Project XX",
    details: "Seamlessly manage users with SSO and domain capture",
    image:
      "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg",
    tech: ["React", "Bootstrap 4"],
  },
  {
    id: 2,
    title: "Project XX",
    details: "Seamlessly manage users with SSO and domain capture",
    image:
      "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg",
    tech: ["Angular", "CSS"],
  },
  {
    id: 3,
    title: "Project XX",
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
          <div className="shadow-lg rounded-lg bg-[#212529]" key={project.id}>
            <img src={project.image} alt="project_image" />
            <div className="p-5">
              <div className="pb-3 text-xl font-black">{project.title}</div>
              <div className="pb-3">{project.details}</div>
              <div className="flex gap-3">
                {project.tech.map((tech) => (
                  <div className="text-white bg-[#2f2f2f] rounded-lg shadow-lg shadow-black-900 p-1 pl-4 pr-4 hover:animate-pulse">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

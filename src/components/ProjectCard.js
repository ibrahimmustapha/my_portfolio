import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <Link to={props.link} target="_blank">
    <div className="shadow-lg rounded-lg bg-[#343a40]" key={props.id}>
      <img src={props.image} alt="project_image" />
      <div className="p-5">
        <div className="pb-3 text-xl font-black">{props.title}</div>
        <div className="pb-3 text-slate-400">{props.details}</div>
        <div className="flex gap-3">{props.children}</div>
      </div>
    </div>
    </Link>
  );
};

export default ProjectCard;

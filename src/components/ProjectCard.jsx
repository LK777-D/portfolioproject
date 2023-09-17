import "./ProjectCard.css";
import { Link } from "react-router-dom";
import { UilLinkAlt } from "@iconscout/react-unicons";
import { UilGithub } from "@iconscout/react-unicons";

const ProjectCard = (props) => {
  return (
    <div className="project">
      <div className="img">
        <img src={props.img} />
      </div>
      <div className="description">
        <p>{props.text}</p>
      </div>
      <div>
        <span></span>
      </div>
      <div className="links">
        <Link target="_blank" to={props.linkgh}>
          GitHub <UilGithub size="30" />
        </Link>
        <Link target="_blank" to={props.link}>
          Live Demo <UilLinkAlt size="30" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

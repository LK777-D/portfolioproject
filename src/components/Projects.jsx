import "./Projects.css";

import { Link } from "react-router-dom";
import { UilGithub } from "@iconscout/react-unicons";
import img1 from "../assets/vgames.png";
import img2 from "../assets/weather.png";
import img3 from "../assets/ecom.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projectswrapper" id="projectssection">
      <h1>Projects</h1>
      <div className="projects">
        <ProjectCard
          img={img1}
          text="Video games platform,where users can search for their favorite games and see details"
        />
      </div>
    </section>
  );
};

export default Projects;

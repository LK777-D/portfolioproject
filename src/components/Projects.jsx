import "./Projects.css";

import img1 from "../assets/vgames.png";
import img2 from "../assets/nba.png";
import img3 from "../assets/ecom.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section className="projectswrapper" id="projectssection">
      <h1 className="fontp">Projects</h1>
      <div className="projects">
        <ProjectCard
          img={img1}
          text="Video Games Portal - this project combines a visually engaging blog with an extensive catalog of video games. "
          linkgh="https://github.com/LK777-D/vgames"
          link="https://vgamesportal.netlify.app/"
        />
        <ProjectCard
          img={img3}
          text="MultiMart Store - a fully functional ecommerce store.This project involved creating a user-friendly interface  and optimizing for mobile responsiveness."
          linkgh="https://github.com/LK777-D/eShopRepo"
          link="https://multimartstore.netlify.app/"
        />
        <ProjectCard
          img={img2}
          text="NBA - comprehensive platform that provides real-time updates on NBA teams, players, and games.Additionally,  a Lineup Game and Quiz, allowing users to test their knowledge of basketball lineups and rosters."
          linkgh="https://github.com/LK777-D/nbablog"
          link="https://blog-nba.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;

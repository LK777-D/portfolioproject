import "./Projects.css";
import { motion } from "framer-motion";
import img1 from "../assets/vgames.png";
import img2 from "../assets/nba.png";
import img3 from "../assets/ecom.png";
import crypto from "../assets/crypto.png";
import ProjectCard from "./ProjectCard";
import news from "../assets/Screenshot_1.png";

const Projects = () => {
  return (
    <motion.section
      className="projectswrapper"
      id="projectssection"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <h1 className="fontp">My Projects</h1>
      <div className="projects">
        <ProjectCard
          img={news}
          text="Cat News - Online news platform"
          linkgh="CatNews"
          link="https://catnewsapp.netlify.app/us"
          technologies="#Tailwind #Nextjs #Typescript #Firebase"
        />
        <ProjectCard
          img={img1}
          text="VGames  - Video games portal. "
          linkgh="https://github.com/LK777-D/vgames"
          link="https://vgamesportal.netlify.app/"
          technologies="#CSS   #React"
        />
        <ProjectCard
          img={img2}
          text="NBA - Dynamic NBA news/updates"
          linkgh="https://github.com/LK777-D/nbablog"
          link="https://blog-nba.netlify.app/"
          technologies="#Tailwind   #React   #ReduxToolkit"
        />

        <ProjectCard
          img={crypto}
          text="CryptoPro - Crypto Currency market tracker."
          linkgh="https://github.com/LK777-D/cryptopro"
          link="https://cryptoproapp.netlify.app/"
          technologies="#Tailwind   #React #Typescript  #ReduxToolkit"
        />
        <ProjectCard
          img={img3}
          text="MultiMart Store - a fully functional ecommerce store."
          linkgh="https://github.com/LK777-D/eShopRepo"
          link="https://multimartstore.netlify.app/"
          technologies="#CSS   #React"
        />
      </div>
    </motion.section>
  );
};

export default Projects;

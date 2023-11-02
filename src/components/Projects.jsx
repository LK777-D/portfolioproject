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
      <h1 className="fontp">Projects</h1>
      <div className="projects">
        <ProjectCard
          img={news}
          text="Cat News - Online news platform, wide range of news articles, from local to global, across various categories including politics, technology,  and more. "
          linkgh="CatNews"
          link="https://cat-news-v2.vercel.app/"
          technologies="#Tailwind #Nextjs #Typescript #Firebase"
        />
        <ProjectCard
          img={img1}
          text="Video Games Portal - this project combines a visually engaging blog with an extensive catalog of video games. "
          linkgh="https://github.com/LK777-D/vgames"
          link="https://vgamesportal.netlify.app/"
          technologies="#CSS   #React"
        />
        <ProjectCard
          img={img2}
          text="NBA - provides real-time updates on NBA teams, players, and games. a Lineup Game and Quiz, allowing users to test knowledge of basketball."
          linkgh="https://github.com/LK777-D/nbablog"
          link="https://blog-nba.netlify.app/"
          technologies="#Tailwind   #React   #ReduxToolkit"
        />

        <ProjectCard
          img={crypto}
          text="CryptoPro - Crypto Currency market tracker, where you can find prices for the crypto currencies, 1h period change and marketcap"
          linkgh="https://github.com/LK777-D/cryptopro"
          link="https://cryptoproapp.netlify.app/"
          technologies="#Tailwind   #React #Typescript  #ReduxToolkit"
        />
        <ProjectCard
          img={img3}
          text="MultiMart Store - a fully functional ecommerce store.This project involved creating a user-friendly interface  and optimizing for mobile responsiveness."
          linkgh="https://github.com/LK777-D/eShopRepo"
          link="https://multimartstore.netlify.app/"
          technologies="#CSS   #React"
        />
      </div>
    </motion.section>
  );
};

export default Projects;

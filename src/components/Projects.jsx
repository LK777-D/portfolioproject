import "./Projects.css";

import { Link } from "react-router-dom";
import { UilGithub } from "@iconscout/react-unicons";
import img1 from "../assets/vgames.png";
import img2 from "../assets/weather.png";
import img3 from "../assets/ecom.png";

const Projects = () => {
  return (
    <section className="projectswrapper" id="projectssection">
      <h1>Projects</h1>
      <div className="projects">
        <div className="project">
          <Link
            to="https://github.com/LK777-D/vgames"
            target="_blank"
            className="ghlink"
          >
            <UilGithub size="38" />
          </Link>
          <img src={img1} />
          <span>
            Web application that allows users to search for their favorite
            games,see details,add them to the favorites list. Users also can
            participate in Video Games Master Quiz
          </span>
          <Link
            className="sitelink"
            to="https://profound-bombolone-dbe9ad.netlify.app/"
            target="_blank"
          >
            Video Games Catalog
          </Link>
        </div>
        <div className="project">
          <Link
            to="https://github.com/LK777-D/weatherapp"
            target="_blank"
            className="ghlink"
          >
            <UilGithub size="38" />
          </Link>
          <img src={img2} />
          <span>
            Weather aplication that allow users to see current weather on every
            location across the world.Also users can see hourly weather for the
            next 2 days
          </span>
          <Link
            className="sitelink"
            to="https://monumental-sfogliatella-135879.netlify.app/"
            target="_blank"
          >
            Weather App
          </Link>
        </div>
        <div className="project">
          <Link
            to="https://github.com/LK777-D/eShopRepo"
            target="_blank"
            className="ghlink ghblack"
          >
            <UilGithub size="38" />
          </Link>
          <img src={img3} />
          <span>
            E-commerce web aplication that provides large data of the
            products.Users can search, add or remove products from the cart and
            see detailed information{" "}
          </span>
          <Link
            className="sitelink"
            to="https://creative-sunflower-ec6741.netlify.app/"
            target="_blank"
          >
            E-Commerce Shop
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

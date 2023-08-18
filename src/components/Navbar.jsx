import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import Logo from "../UI/Logo";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo sizeFirst={"2"} sizeAll={"1.4"} />
      <div className="navigation">
        <Link smooth={true} to="headersection" className="navigationlink">
          Home
        </Link>
        <Link smooth={true} to="skillssection" className="navigationlink">
          Skills
        </Link>
        <Link smooth={true} to="projectssection" className="navigationlink">
          Projects
        </Link>
      </div>
      <div className="socials">
        <NavLink
          target="_blank"
          to="https://github.com/LK777-D/"
          className="social"
        >
          <UilFacebook size="32" />
        </NavLink>
        <NavLink
          target="_blank"
          to="https://github.com/LK777-D/"
          className="social"
        >
          <UilInstagram size="32" />
        </NavLink>
        <NavLink
          target="_blank"
          to="https://github.com/LK777-D/"
          className="social"
        >
          <UilLinkedin size="32" />
        </NavLink>
      </div>
      <div className="formlink">
        <Link to="formsection" smooth={true}>
          Contact @
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

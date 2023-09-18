import Logo from "../UI/Logo";
import "./Footer.css";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footercontainer">
        <div className="footerlogo">
          <Logo sizeFirst={"3"} sizeAll={"2.5"} />
        </div>
        <div className="footernav">
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
        </div>
        <div>
          <div className="socials">
            <span className="social">
              <UilFacebook size="32" />
            </span>
            <span className="social">
              <UilInstagram size="32" />
            </span>
            <span className="social">
              <UilLinkedin size="32" />
            </span>
          </div>
        </div>
      </div>
      <div className="copyright fontp">Copyright 2023. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;

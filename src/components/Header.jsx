import "./Header.css";
import { useState, useEffect } from "react";
import img from "../assets/ufo.png";
// import { NavLink } from "react-router-dom";
const Header = () => {
  const [typedText, setTypedText] = useState("");
  const targetText = "Developer"; // The text you want to type out

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setTypedText(targetText.substring(0, currentIndex));
        currentIndex++;
      } else {
        currentIndex = 0;
        setTypedText("");
      }
    }, 300); // Adjust the typing speed here

    return () => clearInterval(typingInterval);
  }, []);
  return (
    <section className="headerinfo" id="headersection">
      <div className="textinfo">
        <div className="welcome">
          <span>Welcome To My portfolio</span>
        </div>
        <div className="greeting">
          <h2>Hi! I&apos;m Luka,FrontEnd{typedText}</h2>
        </div>
        <div className="about">
          <span>
            Crafting digital experiences with creativity and code. Explore my
            journey, projects, and skills in web development and design
          </span>
        </div>
      </div>
      <div className="imagecontainer">
        {/* <NavLink className="carlink">Contact</NavLink> */}
        <img src={img} width="300px"></img>
      </div>
    </section>
  );
};

export default Header;
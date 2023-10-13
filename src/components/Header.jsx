import "./Header.css";
import { useState, useEffect } from "react";
import img from "../assets/ufo.png";
const Header = () => {
  const [typedText, setTypedText] = useState("");
  const targetText = "Developer";

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
    }, 300);

    return () => clearInterval(typingInterval);
  }, []);
  return (
    <section className="headerinfo" id="headersection">
      <div className="textinfo">
        <div className="welcome">
          <span className="fontp">Welcome To My Portfolio</span>
        </div>
        <div className="greeting fontp">
          <h2>Hi! I&apos;m Luka,FrontEnd{typedText}</h2>
        </div>
        <div className="about">
          <span className="fontp">
            Crafting digital experiences with creativity and code. Explore my
            journey, projects, and skills in web development and design
          </span>
        </div>
      </div>
      <div className="imagecontainer">
        <img src={img} width="300px"></img>
      </div>
    </section>
  );
};

export default Header;

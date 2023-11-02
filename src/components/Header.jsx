import "./Header.css";
import { useState, useEffect } from "react";
import img from "../assets/ufo.png";
import { motion } from "framer-motion";
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
        {/* <div className="welcome">
          <span className="fontp">Welcome To My Portfolio</span>
        </div> */}
        <motion.div
          className="greeting fontp"
          variants={{
            hidden: { opacity: 0, x: 500 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <h2>
            Hi! I&apos;m Luka,FrontEnd{" "}
            <span className="typed">{typedText}</span>
          </h2>
        </motion.div>
        <div className="about">
          <motion.span
            className="fontp"
            variants={{
              hidden: { opacity: 0, y: 500 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            Crafting digital experiences with creativity and code. Explore my
            journey, projects, and skills in web development and design
          </motion.span>
        </div>
      </div>
      <div className="imagecontainer">
        <img src={img} width="300px"></img>
      </div>
    </section>
  );
};

export default Header;

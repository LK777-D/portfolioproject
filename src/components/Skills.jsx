import "./Skills.css";
import Progress from "../UI/Progress";
import { UilHtml5 } from "@iconscout/react-unicons";
import { UilCss3Simple } from "@iconscout/react-unicons";
import { UilJavaScript } from "@iconscout/react-unicons";
import { UilReact } from "@iconscout/react-unicons";
import CircleProgress from "../UI/CircleProgress";
import tailwind from "../assets/tailwind-css.svg";
import next from "../assets/nextjs.svg";
import ts from "../assets/typescript.svg";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      className="skills"
      id="skillssection"
      variants={{
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <h1 className="fontp">Tech Skills</h1>
      <div className="skillscontainer">
        <Progress
          progress="92%"
          atribute="HTML"
          icon={<UilHtml5 className="html" size="70" />}
        />
        <Progress
          progress="89%"
          atribute="CSS"
          icon={<UilCss3Simple className="css" size="70" />}
        />
        <Progress
          progress="90%"
          atribute="Javascript"
          icon={<UilJavaScript className="js" size="70" />}
        />
        <Progress
          progress="88%"
          atribute="Tailwind "
          icon={<img src={tailwind} width="70px" height="30px" />}
        />
        <Progress
          progress="92%"
          atribute="React"
          icon={<UilReact className="react" size="70" />}
        />
        <Progress
          progress="87%"
          atribute="Nextjs"
          icon={<img src={next} width="70px" height="30px" />}
        />
        <Progress
          progress="85%"
          atribute="Typescript"
          icon={<img src={ts} width="70px" height="30px" />}
        />
      </div>
    </motion.section>
  );
};

export default Skills;

import "./Skills.css";
import Progress from "../UI/Progress";
import { UilHtml5 } from "@iconscout/react-unicons";
import { UilCss3Simple } from "@iconscout/react-unicons";
import { UilJavaScript } from "@iconscout/react-unicons";
import { UilReact } from "@iconscout/react-unicons";
import CircleProgress from "../UI/CircleProgress";
import tailwind from "../assets/tailwind-css.svg";

const Skills = () => {
  return (
    <section className="skills" id="skillssection">
      <div className="skillscontainer">
        <h2 className="fontp">Tech Skills</h2>
        <Progress
          progress="89%"
          atribute="HTML"
          icon={<UilHtml5 className="html" size="18" />}
        />
        <Progress
          progress="85%"
          atribute="CSS"
          icon={<UilCss3Simple className="css" size="18" />}
        />
        <Progress
          progress="85%"
          atribute="Javascript"
          icon={<UilJavaScript className="js" size="18" />}
        />
        <Progress
          progress="87%"
          atribute="Tailwind "
          icon={<img src={tailwind} width="25px" height="25px" />}
        />
        <Progress
          progress="90%"
          atribute="React"
          icon={<UilReact className="react" size="18" />}
        />
      </div>
      <div className="personal fontp">
        <CircleProgress />
      </div>
    </section>
  );
};

export default Skills;

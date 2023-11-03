import "./ProjectCard.css";
import { Link } from "react-router-dom";
import { UilLinkAlt } from "@iconscout/react-unicons";
import { UilGithub } from "@iconscout/react-unicons";
/* eslint-disable react/prop-types */

const ProjectCard = (props) => {
  return (
    <div className=" fontp pb-2 w-[85%] mx-auto xl:mx-0 md:min-w-[23rem] xl:min-w-[26rem] border rounded-[10px] border-gray-600/10 transition hover:border-gray-600/30 duration-300 ease-in cursor-pointer  ">
      <div
        className=" min-w-[100%]  text-center mx-auto h-56 md:h-72 rounded-t-xl relative group bg-center bg-cover bg-no-repeat"
        style={{ background: `url(${props.img})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden  transition-all duration-500 ">
          <Link
            to={props.linkgh}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          ></Link>
          <Link
            to={props.link}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          ></Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{props.text}</h5>
        <p className="text-[#ADB7BE]">{props.technologies}</p>
      </div>
      <div className="flex gap-3 justify-center ">
        <Link
          target="_blank"
          to={props.linkgh}
          className="flex transition hover:scale-[1.02] duration-200 ease-in "
        >
          Github
          <UilGithub />
        </Link>
        <Link
          target="_blank"
          to={props.link}
          className="flex transition hover:scale-[1.02] duration-200 ease-in"
        >
          Live Demo
          <UilLinkAlt />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

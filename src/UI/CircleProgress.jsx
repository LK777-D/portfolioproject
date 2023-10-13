import "./CircleProgress.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "../circ.style.css";

const CircleProgress = () => {
  return (
    <>
      <div className="heading">
        <h3>Soft Skills</h3>
      </div>
      <div className="circlecontainer">
        <div className="circlewrapper">
          <div className="circle">
            <CircularProgressbar value={87} text={`87%`} />
          </div>
          <span>Creativity</span>
        </div>
        <div className="circlewrapper">
          <div className="circle">
            <CircularProgressbar value={91} text={`91%`} />
          </div>
          <span>Team Work </span>
        </div>
        <div className="circlewrapper">
          <div className="circle">
            <CircularProgressbar value={93} text={`93%`} />
          </div>
          <span>Problem Solving</span>
        </div>
        <div className="circlewrapper">
          <div className="circle">
            <CircularProgressbar value={89} text={`89%`} />
          </div>
          <span>Communication</span>
        </div>
      </div>
    </>
  );
};

export default CircleProgress;

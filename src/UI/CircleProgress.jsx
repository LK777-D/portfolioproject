import "./CircleProgress.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "../circ.style.css";

const CircleProgress = () => {
  return (
    <>
      <div className="heading">
        <h3>Personal Skills</h3>
      </div>
      <div className="circlecontainer">
        <div className="circlewrapper">
          <div className="circle">
            <CircularProgressbar value={75} text={`75%`} />
          </div>
          <span>Creativity</span>
        </div>
        <div className="circlewrapper">
          <div className="circle">
            <CircularProgressbar value={85} text={`85%`} />
          </div>
          <span>Team Work </span>
        </div>
        <div className="circlewrapper">
          <div className="circle">
            <CircularProgressbar value={91} text={`91%`} />
          </div>
          <span>Problem Solving</span>
        </div>
        <div className="circlewrapper">
          <div className="circle">
            <CircularProgressbar value={83} text={`83%`} />
          </div>
          <span>Communication</span>
        </div>
      </div>
    </>
  );
};

export default CircleProgress;

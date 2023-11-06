import "./Progress.css";
/* eslint-disable react/prop-types */

const Progress = (props) => {
  return (
    <>
      <span className="progressicon">
        {props.icon}
        {props.atribute}
      </span>
      {/* <div className="barwrapper">
        <div style={{ width: `${props.progress}` }} className="progress"></div>
        <span>{props.progress}</span>
      </div> */}
    </>
  );
};

export default Progress;

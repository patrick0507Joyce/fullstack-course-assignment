import React from "react";
import ReactDOM from "react-dom";

const Total = (props) => {
  const courses = props.courses;
  const courseSum = Object.keys(courses).reduce((sum,key)=>sum+parseInt(courses[key]||0),0)

  return (
    <div>
      <p>Number of exercises {courseSum}</p>
    </div>
  );
};

export default Total;

import React from "react";
import ReactDOM from "react-dom";

const Total = (props) => {
  const courses = props.courses;
  const courseSum = courses.reduce(
    (sum, course) => sum + parseInt(course.exercises || 0),
    0
  );

  return (
    <div>
      <p>Number of exercises {courseSum}</p>
    </div>
  );
};

export default Total;

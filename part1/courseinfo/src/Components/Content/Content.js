import React from "react";
import ReactDOM from "react-dom";

const Content = (props) => {
  const courses = props.courses;

  const courseListItems = courses.map((course, index) => (
    <p key={index}>
      {course.name} {course.exercises}
    </p>
  ));

  return <div>{courseListItems}</div>;
};

export default Content;

import React from "react";
import ReactDOM from "react-dom";

const Content = (props) => {
  const courses = props.courses;

  const courseListItems = Object.keys(courses).map((key, index) => (
    <p key={index}>
      {key} {courses[key]} 
    </p>
  ));
  
  return (
  <div>
    {courseListItems}
  </div>
  );
};

export default Content;

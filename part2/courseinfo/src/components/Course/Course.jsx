import React from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Total from "./Total/Total";

const Course = ({ courses }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((course, index) => (
        <div>
          <Header course={course} key={index} />
          <Content course={course} key={index} />
          <Total course={course} key={index} />
        </div>
      ))}
    </div>
  );
};

export default Course;

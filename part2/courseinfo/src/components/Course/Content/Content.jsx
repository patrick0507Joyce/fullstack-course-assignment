import React from "react";
import Part from "./Part/Part";

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part, index) => (
        <div>
          <Part part={part} key={index} />
        </div>
      ))}
    </div>
  );
};

export default Content;

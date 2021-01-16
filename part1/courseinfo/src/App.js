import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/Header.js";
import Content from "./Components/Content/Content.js";
import Total from "./Components/Total/Total.js";

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header title={course.name} />
      <Content courses={course.parts} />
      <Total courses={course.parts} />
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header/Header.js";
import Content from "./Components/Content/Content.js";
import Total from "./Components/Total/Total.js";

const App = () => {
  const title = "Half Stack application development";
  const courses = {
    "Fundamentals of React": 10,
    "Using props to pass data": 7,
    "State of a component": 14,
  };
  return (
    <div>
      <Header title={title} />
      <Content courses={courses} />
      <Total courses={courses} />
    </div>
  );
};

export default App;

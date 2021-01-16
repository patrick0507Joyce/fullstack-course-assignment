import React from "react";

const Buttons = (props) => {
  const handleSetEvaluation = (count, setEvaluationCount) => {
    return () => setEvaluationCount(count);
  };

  return (
    <div>
      <h1>give feedback</h1>
      {props.statistics.map((item, index) => (
        <button
          onClick={handleSetEvaluation(item.count + 1, item.setEvaluationCount)}
          key={index}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Buttons;

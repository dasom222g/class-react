import React from "react";

// type: increase/decrease
const CounterButton = ({ step, type, onClick }) => {
  // logic

  // view
  return (
    <button
      type="button"
      className="bg-blue-800 text-white px-1"
      onClick={() => onClick(type)}
    >
      {type === "increase" ? "+" : "-"} {step}
    </button>
  );
};

export default CounterButton;

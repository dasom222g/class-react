import React, { useEffect, useState } from "react";
import CounterButton from "./CounterButton";

const Counter = () => {
  // logic
  const [counter2, setCounter2] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => {
    setCounter2(counter2 + 1);
  };

  const handleClick = (data) => {
    console.log("data", data);
    data === "increase"
      ? setCounter2(counter2 + step)
      : setCounter2(counter2 - step);
  };

  useEffect(() => {
    console.log("counter2", counter2);
  }, [counter2]);

  // view
  return (
    <div>
      <div>Counter</div>
      <div>{counter2}</div>
      <div className="flex gap-1 justify-center">
        <CounterButton step={step} type="increase" onClick={handleClick} />
        <CounterButton step={step} type="decrease" onClick={handleClick} />
        {/* <button
          type="button"
          className="bg-blue-800 text-white px-1"
          onClick={increase}
        >
          +1
        </button>
        <button type="button" className="bg-blue-800 text-white px-1">
          -1
        </button> */}
      </div>
    </div>
  );
};

export default Counter;

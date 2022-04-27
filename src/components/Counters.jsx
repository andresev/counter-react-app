import React, { Component } from "react";
import Counter from "./Counter";

const Counters = ({
  onReset,
  onDelete,
  onDecrement,
  onIncrement,
  counters,
}) => {
  //console.log("Counters - rendered");

  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>

      {counters.map((counter) => (
        //  Counter initialized and onDelete prop is being used in "Counter" Component for info
        <Counter
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          counterState={counter}
        ></Counter>
      ))}
    </div>
  );
};

export default Counters;

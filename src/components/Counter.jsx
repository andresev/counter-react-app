import React, { Component } from "react";

//stateless component

const Counter = ({ onIncrement, onDecrement, onDelete, counterState }) => {
  //console.log("Counter - rendered");

  function formatCount() {
    const { value: value } = counterState;
    return value === 0 ? "0" : value;
  }

  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += counterState.value === 0 ? "warning" : "primary";
    return classes;
  }

  const styles = {
    fontSize: 30,
  };

  return (
    <div>
      <h4>Counter #{counterState.id}</h4>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-xs">
            <span style={styles} className={getBadgeClasses()}>
              {formatCount()}
            </span>
          </div>
          <div className="col-xs">
            <button
              onClick={() => onIncrement(counterState)}
              className="btn btn-secondary m-1"
            >
              +
            </button>
          </div>
          <div className="col-xs">
            <button
              onClick={() => onDecrement(counterState)}
              className="btn btn-secondary m-1"
              disabled={counterState.value === 0 ? "disabled" : ""}
            >
              -
            </button>
          </div>
          <div className="col-xs">
            <button
              onClick={() => onDelete(counterState.id)}
              className="btn btn-danger m-1"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

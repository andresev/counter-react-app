import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // Delete must be handled here because of it's states we're handling
  // This prop goes to Delete button in "Counter" Component initialized below
  handleDelete = (counterId) => {
    console.log("event handler called", counterId);
    const counter = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counter });
  };

  handleReset = () => {
    console.log("Handle Reset was pressed");
    const resetCounter = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    console.log(resetCounter);
    this.setState({ resetCounter });
  };

  handleIncrement = (counter) => {
    console.log("Increment button pressed");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });

    //This tested to see if it didnt change the state, only the new counters array
    //counters[0] = { ...stateCounter };
    //counters[0].value++;
    //console.log(this.state.counters[0]);
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>

        {this.state.counters.map((counter) => (
          //  Counter initialized and onDelete prop is being used in "Counter" Component for info
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}

            //Was replaced by just moving the whole counter object state
            // value={counter.value}
            // id={counter.id}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 4 },
    ],
  };

  // Delete must be handled here because of it's states we're handling
  // This prop goes to Delete button in "Counter" Component initialized below
  handleDelete = (counterId) => {
    console.log("event handler called", counterId);
    const counter = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counter });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          //  Counter initialized and onDelete prop is being used in "Counter" Component for info
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
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

import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  styles = {
    fontSize: 30,
  };

  formatCount() {
    const { value: value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // handleIncrement = (product) => {
  //   console.log(product);
  //   this.setState({
  //     value: this.state.value + 1,
  //   });
  // };

  render() {
    return (
      <div>
        <h4>Counter #{this.props.counter.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-1"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;

import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 30,
  };

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) {
  //     return <p>This has no tags!</p>;
  //   }
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        {/* <img src={this.state.imageURL} alt="" /> */}

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement("Passing string as parameter")}
          className="btn btn-secondary"
        >
          Increment
        </button>

        {/* {this.state.tags.length === 0 && "Please create some tags"}
        {this.renderTags()} */}
      </div>
    );
  }
}

export default Counter;

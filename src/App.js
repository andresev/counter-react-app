import React, { Component } from 'react';
import './App.css';
import Counters from './components/Counters'
import NavBar from './components/NavBar';

class App extends Component {

  constructor() {
    super();
    console.log('App - Constructor');
    // this.state = this.props.something;
  }

  // componentDidMount() {
  //   //ajax call 
  //   console.log('App - Mounted')
  // }

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
  };

  handleDecrement = (counter) => {
    console.log("Decrement button pressed");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    //counters[index].value > 0 ? counters[index].value-- : 0;
    if(counters[index].value > 0) {
      counters[index].value--;
    }
    
    this.setState({counters})
  }

  render() {
    //console.log('App - rendered');
    return (
      <div className="App">
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main classeName="container" >
        <Counters 
          counters={this.state.counters} 
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete} />
        </main>
      </div>
    );
  }
}

export default App;

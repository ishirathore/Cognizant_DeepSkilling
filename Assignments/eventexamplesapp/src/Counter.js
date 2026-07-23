import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  sayHello() {
    alert("Hello! This is a static message.");
  }

  handleIncrease = () => {
    this.increment();
    this.sayHello();
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Counter Value: {this.state.count}</h2>
        <button onClick={this.handleIncrease}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;

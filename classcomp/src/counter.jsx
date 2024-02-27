import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (bool) => {
    if (bool)
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    else
      this.setState((prevState) => {
        return { count: prevState.count - 1 };
      });
  };
  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.handleClick(true)}>Increment</button>
        <button onClick={() => this.handleClick(false)}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
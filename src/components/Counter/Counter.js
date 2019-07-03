import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrementClick = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrementClick = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    let counter = this.state.counter;
    let color;
    let colorIncrement = { color: 'green' };
    let colorDecrement = { color: 'red' };
    if (counter > 0) {
      color = colorIncrement;
    } else if (counter < 0) {
      color = colorDecrement;
    }

    return (
      <div>
        <h4 style={color}>{this.state.counter}</h4>
        <a href="*" onClick={this.handleIncrementClick}>
          Increment
        </a>
        <a href="*" onClick={this.handleDecrementClick}>
          Decrement
        </a>
      </div>
    );
  }
}

export default Counter;

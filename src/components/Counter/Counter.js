import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
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
    // eslint-disable-next-line prefer-destructuring
    const counter = this.state.counter;
    let color;
    const colorIncrement = { color: 'green' };
    const colorDecrement = { color: 'red' };
    if (counter > 0) {
      color = colorIncrement;
    } else if (counter < 0) {
      color = colorDecrement;
    }

    return (
      <div className="counter">
        <h4 style={color} className="count">{this.state.counter}</h4>
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

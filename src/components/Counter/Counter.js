import React from 'react';

/**
 * The Counter class that extended from react's component class
 */

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /**Initial count starts at 0 */
      counter: 0,
    };
  }

  /**
  * Handles incrementing, adds 1 to counter everytime it is clicked
  */
  handleIncrementClick = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  /**
  * Handles decreementing, subtracts 1 from counter everytime it is clicked
  */

  handleDecrementClick = (e) => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  /**
  * Renders number to the DOM.
  * If count is less than 0 font color will be red.
  * If count is greater than 0 green.
  * If count is zero, color will be yellowish.
  */

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

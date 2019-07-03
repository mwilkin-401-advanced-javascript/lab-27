import React from "react";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import "./app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrementClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrementClick = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    let counter = this.state.counter;
    let color;
    let colorIncrement = { color: "green" };
    let colorDecrement = { color: "red" };
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

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

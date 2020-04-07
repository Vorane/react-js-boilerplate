import React, { Component } from "react";
import styles from "../../app.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        ...this.state,
        time: this.state.time + 10,
      });
    }, 1000);
  }
  render() {
    return (
      //add screen inside the div
      <div>
        <h1 className={"header"}>App</h1>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default Counter;

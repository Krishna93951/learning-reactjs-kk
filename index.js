import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class App extends React.Component {
  constructor(prop) {
    this.state = prop.time;
  }

  countDown() {
    this.setState(state => ({
      count: state.count > 0 ? state.count - 1 : state.count
    }));
  }

  countUp() {
    this.setState(state => ({
      count1: state.count1 < 10 ? state.count1 + 1 : state.count1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.countDown();
      this.countUp();
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Count Down :{this.state.count}</h1>
        <h2>Increment :{this.state.count1}</h2>
      </div>
    );
  }
}

const timer = {
  count: 10,
  count1: 0
};

ReactDOM.render(<App time={timer} />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import "./style.css";

class App extends React.Component {
  constructor() {
    this.state ={count : 0,count2 : 0};
  }

  countDown(){
    this.setState(state =>({
      count: state.count - 1
    }));
     this.setState(state =>({
      count2: state.count2 + 1
    }))
  }

  componentDidMount(){
    this.interval = setInterval(()=> this.countDown(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Count Down :{this.state.count2}</h1>
        <h2>Count Down :{this.state.count}</h2>
      </div>
    );
  }
}

render(<App/>, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

// function Button() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The button was clicked.');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me
//     </button>
//   );
// }
// const  element = <Button/>

// ReactDOM.render(element,document.getElementById('root'));

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }else{
//     return<GuestGreeting />;
//   }
// }

// ReactDOM.render(
//   <Greeting isLoggedIn={false} />,
//   document.getElementById('root')
// );
import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

// function ListItem(props) {
//   return <li>{props.key} {props.id}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <ListItem key={number.toString()}
//               value={number} id={number.toString()}/>

//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// function ListItem(props) {
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <ListItem key={number.toString()}
//               value={number} />

//   );
//   return (
//     <ul id="list">
//       {listItems}
//     </ul>
//   );
// }
// const list=[`a) Lion`,`b) Tiger`,`c) WoodPecker`,`d) Zebra`,`e) Bear`];
// ReactDOM.render(<NumberList numbers={list}/>,document.querySelector('#root'));

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(`An essay was submitted: ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
ReactDOM.render(<EssayForm/>,document.querySelector('#root'));
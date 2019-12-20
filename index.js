import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const action = function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <button  onClick={handleClick}>
      Click me
    </button>
  );
}

ReactDOM.render(action,document.getElementById('root'));
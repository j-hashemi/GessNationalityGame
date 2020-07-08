import React, { Component } from "react";

class Country extends Component {
  state = {
    title: this.props.title,
  };
  render() {
    var cssClass = this.props.className + " btn btn-danger btn-sm";
    return (
      <button
        onClick={() => this.props.onGuess(this.state.title)}
        className={cssClass}
      >
        {this.state.title}
      </button>
    );
  }
}

export default Country;

import React, { Component } from "react";
class GuessImage extends Component {
  state = {};
  render() {
    return <img src={this.props.source}></img>;
  }
}

export default GuessImage;

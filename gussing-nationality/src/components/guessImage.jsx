import React, { Component } from "react";
import "./guessImage.css";

class GuessImage extends Component {
  state = {};
  render() {
    return <img className={this.getClassName()} src={this.props.source}></img>;
  }

  getClassName = () => {
    let className = "";
    var { nationality } = this.props;
    switch (nationality) {
      case "Thai":
        className = "topLeftMove";
        break;
      case "Korean":
        className = "bottomRightMove";
        break;
      case "Chinese":
        className = "topRightMove";
        break;
      case "Japanese":
        className = "bottomLeftMove";
        break;
    }

    return className;
  };
}

export default GuessImage;

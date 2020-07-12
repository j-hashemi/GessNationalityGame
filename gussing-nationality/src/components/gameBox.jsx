import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Country from "./country";
import GuessImage from "./guessImage";
import { getPeople } from "./../services/peopleImageService";
import ResultPresenter from "./resultPresenter";

class GameBox extends Component {
  state = {
    people: getPeople(),
    time: 0,
    currentItem: null,
    score: 0,
  };

  getRandomIndex = () => {
    return Math.floor(Math.random() * 40);
  };

  changePicture = () => {
    if (this.state.time > 10) {
      clearInterval(this.state.intervalId);
      this.props.onEndGame(this.state.score);
      this.setState({ currentItem: null });
      return;
    }

    let randomIndex = this.getRandomIndex();
    let item = this.state.people[randomIndex];

    var time = this.state.time + 1;
    this.setState({ currentItem: item, time });
    this.props.onPictureChange(time);
  };

  componentDidMount = () => {
    this.interval();
  };

  handleOnGuess = (componentKey) => {
    let score = 0;
    if (componentKey === this.state.currentItem.nationality) {
      score = this.state.score + 20;
      this.setState({ score });
    } else {
      score = this.state.score - 5;
    }
    this.setState({ score });
  };

  interval = () => {
    var intervalId = setInterval(this.changePicture, 3000);
    this.setState({ intervalId });
  };
  handleTryAgain = (needToTry) => {
    if (needToTry) {
      this.setState({ time: 0, score: 0 });
      this.interval();
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.time < 11 && this.state.currentItem != null && (
          <GuessImage
            nationality={this.state.currentItem.nationality}
            source={require("../contents/images/" +
              this.state.currentItem.picUrl)}
          />
        )}
        {this.state.time === 11 && (
          <ResultPresenter
            onTryAgain={this.handleTryAgain}
            score={this.state.score}
          />
        )}
        <Country
          onGuess={this.handleOnGuess}
          className={"bottomleft"}
          title="Japanese"
        />
        <Country
          onGuess={this.handleOnGuess}
          className={"topright"}
          title="Chinese"
        />
        <Country
          onGuess={this.handleOnGuess}
          className={"bottomright"}
          title="Korean"
        />
        <Country
          onGuess={this.handleOnGuess}
          className={"topleft"}
          title="Thai"
        />
      </React.Fragment>
    );
  }
}

export default GameBox;

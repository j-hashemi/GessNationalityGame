import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Country from "./country";
import GuessImage from "./guessImage";
import { getPeople } from "./../services/peopleImageService";
import ResultPresenter from "./resultPresenter";

class GameBox extends Component {
  state = {
    people: getPeople(),
    time: 1,
    currentItem: null,
    score: 0,
  };

  getRandomIndex = () => {
    return Math.floor(Math.random() * 40);
  };

  changePicture = () => {
    if (this.state.time > 10) {
      clearInterval(this.state.intervalId);
      this.setState({ currentItem: null });
      return;
    }

    let randomIndex = this.getRandomIndex();
    let item = this.state.people[randomIndex];

    var time = this.state.time + 1;
    this.setState({ currentItem: item, time });
  };

  componentDidMount = () => {
    this.changePicture();
    var intervalId = setInterval(this.changePicture, 3000);
    this.setState({ intervalId });
  };

  handleOnGuess = (componentKey) => {
    if (componentKey === this.state.currentItem.nationality) {
      let score = this.state.score + 1;
      this.setState({ score });
    }
  };

  render() {
    return (
      <div className="center">
        {this.state.time < 11 && (
          <GuessImage
            source={require("../contents/images/" + this.getPath())}
          />
        )}
        {this.state.time == 11 && <ResultPresenter score={this.state.score} />}
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
      </div>
    );
  }

  getPath() {
    let url = "";
    if (this.state.currentItem == null) {
      var random = this.getRandomIndex();
      url = this.state.people[random].picUrl;
    } else {
      url = this.state.currentItem.picUrl;
    }
    return url;
  }
}

export default GameBox;

import React, { Component } from "react";
import "./App.css";
import GameBox from "./components/gameBox";

class App extends Component {
  state = {
    picNumber: 1,
    totalScore: 0,
  };

  handlePirtureChange = (number) => {
    this.setState({ picNumber: number });
  };

  handleOnEndGame = (score) => {
    if (score > this.state.totalScore) this.setState({ totalScore: score });
  };
  showTotalScore = () => {
    if (this.state.totalScore > 0)
      return (
        <button type="button" className="btn btn-secondary bottomleft">
          Total Score&nbsp;
          <span className="badge badge-light">{this.state.totalScore}</span>
        </button>
      );
  };

  render() {
    return (
      <div className="App">
        {this.state.picNumber <= 10 && (
          <span className="badge badge-pill badge-primary">
            {this.state.picNumber}/10
          </span>
        )}

        <div className="center">
          <GameBox
            onEndGame={this.handleOnEndGame}
            onPictureChange={this.handlePirtureChange}
          />
        </div>
        {this.showTotalScore()}
      </div>
    );
  }
}

export default App;

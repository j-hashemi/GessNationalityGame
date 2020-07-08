import React, { Component } from "react";

class ResultPresenter extends Component {
  state = {};
  render() {
    var cssClass = "success";
    if (this.props.score == 0) {
      cssClass = "danger";
    }
    return (
      <div>
        <span className={cssClass}>Your Score is : {this.props.score}</span>

        <div className="well">
          <span>Are you want to try again?</span>
          <button className="btn btn-success btn-sm">Yes</button>
          <button className="btn btn-danger btn-sm">No</button>
        </div>
      </div>
    );
  }
}

export default ResultPresenter;

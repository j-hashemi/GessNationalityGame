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
        {this.props.score > 0 && (
          <h4>
            Your Score is :{" "}
            <span className="badge badge-success">{this.props.score}</span>
          </h4>
        )}

        {this.props.score == 0 && (
          <label>Unfortunately, your guesses were incorrect!</label>
        )}

        <div className="panel panel-default">
          <div className="panel-body">
            <span>Do you want to try again?</span>
            <div>
              <button
                onClick={() => this.props.onTryAgain(true)}
                className="btn btn-success btn-sm mr-2"
              >
                Yes
              </button>
              <button
                onClick={() => this.props.onTryAgain(false)}
                className="btn btn-danger btn-sm mr-2"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultPresenter;

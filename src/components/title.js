import React, { Component } from "react";

class Title extends Component {
  state = {};
  render() {
    return (
      <div className="text-left my-4 p-3">
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}

export default Title;

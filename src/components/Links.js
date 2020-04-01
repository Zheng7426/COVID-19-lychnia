import React, { Component } from "react";

class Row extends Component {
  state = {};
  render() {
    return (
      <a
        target="_blank"
        className="Maquee-link"
        rel="noopener noreferrer"
        href={this.props.link}
      >
        {this.props.title}
      </a>
    );
  }
}

export default Row;

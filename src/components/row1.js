import React, { Component } from "react";

class Row1 extends Component {
  state = {};
  render() {
    return (
      <tr>
        <td>
          <a target="_blank" rel="noopener noreferrer" href={this.props.link}>
            {this.props.title}
          </a>
        </td>
        <td>{this.props.date}</td>
      </tr>
    );
  }
}

export default Row1;

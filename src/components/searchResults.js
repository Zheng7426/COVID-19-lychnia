import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Row from "./row";

class Results extends Component {
  state = {
    data: []
  };
  displayRows = () => {
    return this.props.result.map(d => (
      <Row title={d.title} link={d.link}></Row>
    ));
  };
  render() {
    return (
      <div>
        <div className="mx-auto mb-4 search-result">
          <Table hover>
            <tbody>{this.displayRows()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Results;

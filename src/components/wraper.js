import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Wrapper extends Component {
  state = {};
  render() {
    return (
      <Container fluid>
        <div className="mx-auto col-md-11 col-sm-12">{this.props.children}</div>
      </Container>
    );
  }
}

export default Wrapper;

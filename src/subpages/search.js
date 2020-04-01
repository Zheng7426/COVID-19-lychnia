import React, { Component } from "react";
import "./subpage.css";
import Data from "../data/data.json";
import { Table } from "react-bootstrap";
import Title from "../components/title";
import Footer from "../components/footer";
import Container from "../components/wraper";
import Row from "../components/row";

class Home extends Component {
  state = {
    data: Data,
    result: []
  };
  componentDidMount() {
    this.getInfo();
  }
  getInfo = () => {
    let result = [];
    // eslint-disable-next-line
    this.state.data.map(t => {
      if (t.title.indexOf(this.props.location.message) > 0) {
        return result.push(t);
      }
    });
    this.setState({
      result: result
    });
  };
  displayRows = () => {
    return this.state.result.map(d => (
      <Row title={d.title} link={d.link} date={d.date}></Row>
    ));
  };
  render() {
    //  console.log(this.props.location.message);
    return (
      <div>
        <Container>
          <Title>搜索结果：</Title>
          <Table hover>
            <tbody>{this.displayRows()}</tbody>
          </Table>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;

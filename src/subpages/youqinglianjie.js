import React, { Component } from "react";
import "./subpage.css";
import Data from "../data/data.json";
import Row1 from "../components/row1";
import { Table, Container, Col, Row } from "react-bootstrap";
import Title from "../components/title";
import Footer from "../components/footer";

class Youqinglianjie extends Component {
  state = {
    alldata: Data,
    data1: [],
    data2: []
  };
  componentDidMount() {
    this.sortData(); // before loading all the component excute this first
  }
  sortData = () => {
    let newData1 = []; // hold the data that belogs to this categroy
    let newData2 = [];
    // eslint-disable-next-line
    this.state.alldata.map(a => {
      //check the data type wether it fit with the title
      if (a.type === "youqinglianjie-faith") {
        return newData1.push(a);
      }
      if (a.type === "youqinglianjie-health") {
        return newData2.push(a);
      }
    });
    //newData.sort((a, b) => (a.date > b.date ? -1 : 1));
    this.setState({ data1: newData1, data2: newData2});
  };
  displayRowsLeft = () => {
    //loopinf through the data array and display the data
    return this.state.data2.map(d => <Row1 title={d.title} link={d.link}></Row1>);
  };
  displayRowsRight = () => {
    return this.state.data1.map(d => <Row1 title={d.title} link={d.link}></Row1>);
  };
  render() {
    return (
      <div>
        <Container>
          <Title>友情链接</Title>
          <Row>
            <Col>
              <Table hover>
                <tbody>{this.displayRowsLeft()}</tbody>
              </Table>
            </Col>
            <Col>
              <Table hover>
                <tbody>{this.displayRowsRight()}</tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Youqinglianjie;

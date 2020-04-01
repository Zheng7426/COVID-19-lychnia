import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import Data from "../data/data.json";
import Links from "./Links";
import Marquee from "react-marquee-line";
import "./component.css";

class Rollbar extends Component {
  state = {
    data: Data,
    title: "",
    latest: [],
    link: null
  };
  dataSort = async () => {
    let newData = [];
    let result = this.state.data;
    await result.sort((a, b) => (a.date > b.date ? -1 : 1));
    this.setState({ date: result[0].date });
    // eslint-disable-next-line
    await result.map(a => {
      if (a.date === result[0].date) {
        return newData.push(a);
      }
    });
    await this.setState({ latest: newData });
    //  console.log(this.state.latest);
  };
  componentDidMount() {
    this.dataSort();
    // console.log(this.state.latest);
  }
  displayRows = a => {
    // console.log(a);
    return a.map(d => <Links title={d.title} link={d.link} />);
  };
  render() {
    //  console.log(this.state.latest);
    let newData = this.state.latest;
    // console.log(newData);
    return (
      <div className="row">
        <Navbar bg="light" className="roll-bar">
          <Marquee list={this.displayRows(newData)}></Marquee>
        </Navbar>
      </div>
    );
  }
}

export default Rollbar;

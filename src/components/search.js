import React, { Component } from "react";
import Data from "../data/data.json";
import Result from "./searchResults";

class Search extends Component {
  state = { query: "", data: Data, result: "" };
  getInfo = query => {
    let result = [];
    // eslint-disable-next-line
    this.state.data.map(t => {
      if (t.title.indexOf(query) > 0) {
        return result.push(t);
      }
    });
    this.setState({
      result: result
    });
    console.log(this.state.result);
  };
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  };
  handleResult = event => {
    if (event.key === "Enter") {
      console.log("result", this.state.query);
      this.getInfo(this.state.query);
    }
  };
  searchResult = () => {
    console.log(this.state.query);
    this.getInfo(this.state.query);
  };
  render() {
    let result = this.state.result;
    let displayResult;
    if (result) {
      displayResult = <Result result={result} />;
    }
    return (
      <div className="p-3 mb-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="输入搜索关键字..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
            onKeyPress={this.handleResult}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.searchResult}
            >
              搜索
            </button>
          </div>
        </div>
        {displayResult}
      </div>
    );
  }
}

export default Search;

import React from "react";
import "./App.css";
import Navbar from "./components/nav/nav";
import Jiatingyuer from "./subpages/jiatingyuer";
import Xianshangjuhui from "./subpages/xianshangjuhui";
import Fangyishouce from "./subpages/fangyishouce";
import Gerenlingxiu from "./subpages/gerenlingxiu";
import Jiaohuimuyang from "./subpages/jiaohuimuyang";
import Kepuwenzhang from "./subpages/kepuwenzhang";
import Shujuchaxun from "./subpages/shujuchaxun";
import Wenzhenpingtai from "./subpages/wenzhenpingtai";
import Youqinglianjie from "./subpages/youqinglianjie";
import Home from "./subpages/home";
import Search from "./subpages/search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact render={props => <Home />} />
        <Route path="/jiatingyuer" exact render={props => <Jiatingyuer />} />
        <Route
          path="/xianshangjuhui"
          exact
          render={props => <Xianshangjuhui />}
        />
        <Route path="/fangyishouce" exact render={props => <Fangyishouce />} />
        <Route path="/gerenlingxiu" exact render={props => <Gerenlingxiu />} />
        <Route
          path="/jiaohuimuyang"
          exact
          render={props => <Jiaohuimuyang />}
        />
        <Route path="/Kepuwenzhang" exact render={props => <Kepuwenzhang />} />
        <Route
          path="/wenzhenpingtai"
          exact
          render={props => <Wenzhenpingtai />}
        />
        <Route path="/shujuchaxun" exact render={props => <Shujuchaxun />} />
        <Route path="/search" exact component={Search} />
        <Route
          path="/youqinglianjie"
          exact
          render={props => <Youqinglianjie />}
        />
        <Route exact component={Home} />
      </Switch>
    </Router>
  );
}
export default App;

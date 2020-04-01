import React, { Component } from "react";
import "./component.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron jumbotron-fluid align-items-center d-flex  home-header">
        <div className="mx-auto mt-3 home-header-box">
          <h1 className="mt-3 display-4 home-header-title">
            <b>灯台信息港</b>
          </h1>
          <br />
          <p className="mx-auto lead home-header-text">
            我们是一群致力于为教会在疫情期间提供可靠信息的平台。把好用的资源汇总，分类然后推给主内的肢体。
            我们想在这恐慌的阴暗笼罩大地的时刻，不把自己的灯放在斗底下，而是放在灯台上，照亮我们的家人。
            <br />
            我们想在这恐慌的阴暗笼罩大地的时刻，不把自己的灯放在斗底下，而是放在灯台上，照亮我们的家人。
          </p>
          <p className="text-right mx-3 header-scripture">
            “人点灯，不放在斗底下，是放在灯台上，就照亮一家的人。”
            <br />
            马太福音&nbsp;5:15
          </p>
        </div>
      </div>
    );
  }
}

export default Header;

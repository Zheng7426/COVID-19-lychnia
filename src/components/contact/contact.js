import React, { Component } from "react";
import "./contact.css";


class Contact extends Component {
  state = {};
  render() {
    return <div>
            <div className="lianxiwomen">
              <h2>联系我们</h2>
              <p>谢谢您的关注，如果您有什么想法、建议以及好的中英文资源也欢迎通过一下联系我们。</p>
              <button className="stylebut"><a href="https://forms.gle/N43gAJspMUedMWgy9">我要反馈</a></button>
            </div>
    </div>;
  }
}

export default Contact;

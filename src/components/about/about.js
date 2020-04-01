import React, { Component } from "react";
import "./about.css";
import { Link } from "react-router-dom";
import xianshangjuhui from "../../img/线上聚会.jpg";
import gerenlingxiu from "../../img/个人灵修-By Eucalyp.png";
import jiatingyuer from "../../img/家庭育儿-By Freepik.png";
import jiaohuimuyang from "../../img/教会牧养-By Darius Dan.png";
import kepuwenzhang from "../../img/科普文章-By Smashicons.png";
import wenzhenpingtai from "../../img/问诊平台-By Good Ware.png";
import fangyishouce from "../../img/防疫手册-By Smashicons.png";
import shujuchaxun from "../../img/数据查询-By DinosoftLabs.png";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <h2 className="text-center">关于我们</h2>
          <div className="mt-4 p-3 about-text">
            <p>
              这个网站是一群来自安大略省不同的教会的弟兄姐妹临时组成团队搭建的。发起人为杨磊夫妇。因为新冠病毒的风险不断升级，有许多网络信息扑天盖地的在各个社交媒体传播。我们想要提供经过一定过滤后的靠谱文章，链接，公众号和网站。尤其是针对教会，团契以及弟兄姐妹面对疫情期间所需要的信仰，教牧辅导或医疗资源。教会以及属灵文章有少数团队的原创，和翻译文章。医疗资源主要由武汉NCP生命支援网络信息驿站，加拿大安省睦邻隔离期爱心互助群提供.
            </p>
          </div>
          <div className="mt-4 d-flex flex-wrap justify-content-around">
            <div className="text-center p-3">
              <Link className="mx-auto" to="xianshangjuhui">
                <div className="d-flex align-items-center icons">
                  <img
                    className="icon"
                    alt="线上聚会"
                    src={xianshangjuhui}
                  ></img>
                </div>
              </Link>
              <lable className="row ml-2 p-2">
                <Link className="text-dark" to="/xianshangjuhui">
                  线上聚会
                </Link>
              </lable>
            </div>
            <div className="text-center p-3">
              <Link className="mx-auto" to="/gerenlingxiu">
                <div className="d-flex align-items-center icons">
                  <img className="icon" alt="个人灵修" src={gerenlingxiu} />
                </div>
              </Link>
              <lable className="row ml-2 p-2">
                <Link className="text-dark" to="/gerenlingxiu">
                  个人灵修
                </Link>
              </lable>
            </div>
            <div className="text-center p-3">
              <Link className="mx-auto" to="/jiaohuimuyang">
                <div className="d-flex align-items-center icons">
                  <img className="icon" alt="教会牧养" src={jiaohuimuyang} />
                </div>
              </Link>
              <lable className="row ml-2 p-2">
                <Link className="text-dark" to="/jiaohuimuyang">
                  教会牧养
                </Link>
              </lable>
            </div>
            <div className="text-center p-3">
              <Link className="mx-auto" to="/jiatingyuer">
                <div className="d-flex align-items-center icons">
                  <img className="icon" alt="家庭育儿" src={jiatingyuer} />
                </div>
              </Link>
              <lable className="row ml-2 p-2">
                <Link className="text-dark" to="/jiatingyuer">
                  家庭育儿
                </Link>
              </lable>
            </div>
            <div className="text-center p-3">
              <Link className="mx-auto" to="/kepuwenzhang">
                <div className="d-flex align-items-center icons">
                  <img className="icon" alt="科普文章" src={kepuwenzhang}></img>
                </div>
              </Link>
              <lable className="row ml-2 p-2">
                <Link className="text-dark" to="/kepuwenzhang">
                  科普文章
                </Link>
              </lable>
            </div>
            <div className="text-center p-3">
              <Link className="mx-auto" to="/fangyishouce">
                <div className="d-flex align-items-center icons">
                  <img className="icon" alt="防疫手册" src={fangyishouce} />
                </div>
              </Link>
              <lable className="row ml-2 p-2">
                <Link className="text-dark" to="/fangyishouce">
                  防疫手册
                </Link>
              </lable>
            </div>
            <div className="text-center p-3">
              <Link className="mx-auto" to="/wenzhenpingtai">
                <div className="d-flex align-items-center icons">
                  <img className="icon" alt="问诊平台" src={wenzhenpingtai} />
                </div>
              </Link>
              <lable className="row ml-2 p-2">
                <Link className="text-dark" to="/wenzhenpingtai">
                  问诊平台
                </Link>
              </lable>
            </div>
            <div className="text-center p-3">
              <Link className="mx-auto" to="/shujuchaxun">
                <div className="d-flex align-items-center icons">
                  <img className="icon" alt="" src={shujuchaxun} />
                </div>
              </Link>
              <lable className="row ml-2 p-2">
                <Link className="text-dark" to="/shujuchaxun">
                  数据查询
                </Link>
              </lable>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

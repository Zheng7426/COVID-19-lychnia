import React, { Component } from "react";
import "./nav.css";
import {
  NavDropdown,
  Navbar,
  Nav
  // Form,
  // FormControl,
  // Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import RollBar from "../../components/rollBar";

class Navbars extends Component {
  state = { query: "" };
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
    console.log("result", this.state.query);
  };
  render() {
    return (
      <din>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>
            <Link className="text-white" to="/">
              灯台信息港
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto text-white-50">
              <Nav.Link>
                <Link className="text-white-50" to="/xianshangjuhui">
                  线上聚会
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-white-50" to="/gerenlingxiu">
                  个人灵修资源
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-white-50" to="/jiaohuimuyang">
                  教会牧养资源
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-white-50" to="/jiatingyuer">
                  家庭育儿资源
                </Link>
              </Nav.Link>

              <NavDropdown title="疫情须知" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="text-dark" to="/kepuwenzhang">
                    科普文章
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-dark" to="/fangyishouce">
                    防疫手册
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-dark" to="/wenzhenpingtai">
                    问诊平台
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="text-dark" to="/shujuchaxun">
                    数据查询
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link className="text-white-50" to="/youqinglianjie">
                  友情链接
                </Link>
              </Nav.Link>
            </Nav>
            {/* <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                ref={input => (this.search = input)}
                onChange={this.handleInputChange}
              />
              <Button variant="outline-primary">
                <Link
                  className="text-white-50"
                  to={{ pathname: "/search", message: this.state.query }}
                >
                  查找
                </Link>
              </Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
        <RollBar />
      </din>
    );
  }
}

export default Navbars;

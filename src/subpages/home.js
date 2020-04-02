import React, { Component } from "react";
import "./subpage.css";
import About from "../components/about/about";
import Header from "../components/header";
import Footer from "../components/footer";
import Contact from "../components/contact/contact";
import Container from "../components/wraper";
import Search from "../components/search";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header></Header>
        <Container>
          <Search />
          <About></About>
          <Contact></Contact>
        </Container>

        <Footer />
      </div>
    );
  }
}

export default Home;

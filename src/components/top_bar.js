import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../static/logo.svg";

class TopBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ fontSize: "45px", fontWeight: "300" }} href="/">
          <img
            alt=""
            src={logo}
            width="100"
            height="60"
            className="d-inline-block align-top"
          />{" "}
          {this.props.header}
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default TopBar;

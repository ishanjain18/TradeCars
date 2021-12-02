import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../static/logo.svg";

import { useHistory } from "react-router-dom";

// class TopBar extends React.Component {
//   render() {
//     let history = useHistory();
//     if (this.props.button) {
//       return (
//         <Navbar bg="dark" variant="dark">
//           <Navbar.Brand
//             style={{ fontSize: "45px", fontWeight: "300" }}
//             href="/TradeCars"
//           >
//             <img
//               alt=""
//               src={logo}
//               width="100"
//               height="60"
//               className="d-inline-block align-top"
//             />{" "}
//             {this.props.header}
//           </Navbar.Brand>
//           <Nav>
//             <Nav.Link className="admin-btn" href="/TradeCars/admin">
//               {this.props.admin}Admin
//             </Nav.Link>
//           </Nav>
//         </Navbar>
//       );
//     } else {
//       return (
//         <Navbar bg="dark" variant="dark">
//           <Navbar.Brand
//             style={{ fontSize: "45px", fontWeight: "300" }}
//             href="/"
//           >
//             <img
//               alt=""
//               src={logo}
//               width="100"
//               height="60"
//               className="d-inline-block align-top"
//             />{" "}
//             {this.props.header}
//           </Navbar.Brand>
//         </Navbar>
//       );
//     }
//   }
// }

const TopBar = () => {
  let history = useHistory();
  if (this.props.button) {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand
          style={{ fontSize: "45px", fontWeight: "300" }}
          href="/TradeCars"
        >
          <img
            alt=""
            src={logo}
            width="100"
            height="60"
            className="d-inline-block align-top"
          />{" "}
          {this.props.header}
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="admin-btn" href="/">
            {this.props.admin}Admin
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand
          style={{ fontSize: "45px", fontWeight: "300" }}
          href={() => history.push("/admin")}
        >
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
};

export default TopBar;

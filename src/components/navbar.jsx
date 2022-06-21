import { Link, Outlet } from "react-router-dom";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/banana.png";
import Axios from "axios";

export default function navbar() {
  if (localStorage.getItem("token" === null)) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="container">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="logo" width="50px" height="auto" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Registrar
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
  }else{
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container className="container">
            <Navbar.Brand as={Link} to="/">
              <img src={logo} alt="logo" width="50px" height="auto" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              className="justify-content-end"
              id="basic-navbar-nav"
            >
              <Nav>
                <Nav.Link as={Link} to="/home">
                  Logout
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  
        <section>
          <Outlet></Outlet>
        </section>
      </>
    );
}
}

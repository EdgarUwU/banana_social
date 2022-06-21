import { Link, Outlet } from "react-router-dom";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../images/banana.png";
import Axios from "axios";

export default function navbar() {
  function logout() {
    Axios.post("http://localhost:3001/logout", {
      token: localStorage.getItem("token"),
    })
      .then((res) => {
        if (res.data === "Logout Successful") {
          console.log(res.data);
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (localStorage.getItem("token") === null) {
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
  } else {
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
                <Nav.Link as={Link} to="/profile">
                  Perfil
                </Nav.Link>
                <Nav.Link as={Link} to="/" onClick={logout}>
                  Salir
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

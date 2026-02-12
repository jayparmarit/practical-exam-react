import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="border-bottom border-black">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">Products</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" as={NavLink} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link href="#link" as={NavLink} to={"ProductForm"}>
                ProductForm
              </Nav.Link>
              <Nav.Link href="#link" as={NavLink} to={"ProductList"}>
                ProductList
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

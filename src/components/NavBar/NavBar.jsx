
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import Image from "react-bootstrap/Image";
// import { MDBIcon } from "mdbreact";
import { useState } from "react";

export default function NavBar({ user, setUser }) {
  const [showCreate, setShowCreate] = useState(true);

  return (
    <>
      <Navbar className="navbar" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
      
            <Navbar.Brand>
              <Nav.Link href="/">
                <Image className="logo" src="https://i.imgur.com/aRxhj07.jpg" />
              </Nav.Link>
            </Navbar.Brand>
            <br />
            <Nav.Link href="/cakes">Cakes Gallery</Nav.Link>
            <Nav.Link href="/treats">Treats Gallery</Nav.Link>

            <NavDropdown title="More" id="basic-nav-dropdown">
         
              <Nav.Link href="/about">About us</Nav.Link>
              <Nav.Link href="/contact">Contact us</Nav.Link>

              <NavDropdown.Item href="#action/3.4"></NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}


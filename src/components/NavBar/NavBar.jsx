
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


  return (
    <>
      <Navbar className="navbar" bg="light" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className="nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
      
            <Navbar.Brand>
              <Nav.Link href="/" className="nav-link">
                <Image className="logo" src="https://i.imgur.com/aRxhj07.jpg" />
              </Nav.Link>
            </Navbar.Brand>
            <br />
            <p> <Nav.Link href="/cakes" >Cakes Gallery</Nav.Link></p>
            &nbsp;
            &nbsp;
             <p><Nav.Link href="/treats">Treats Gallery</Nav.Link></p>
             &nbsp;
             &nbsp;
             
              <p><Nav.Link href="/about">About us</Nav.Link></p>
              &nbsp;
              &nbsp;
              <p><Nav.Link href="/contact">Contact us</Nav.Link></p>

           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}


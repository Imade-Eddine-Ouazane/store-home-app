import React from 'react';
import Container from 'react-bootstrap/Container';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function MyNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="my-class">
      <Navbar bg="light" expand="lg" className='bar'>
      <Container>
        <Navbar.Brand href="#home">Store Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link className='i' href="#Home">Home</Nav.Link>
            <Nav.Link className='i' href="#Shop">Shop</Nav.Link>
            <Nav.Link className='i' href="#About_Us">About Us</Nav.Link>
            <Nav.Link className='i' href="#Contact">Contact</Nav.Link>
            <Nav.Link className='i' href={"/Cart"}><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
           
            <Nav.Link className='i' href="">
           
                <a href="" onClick={handleShow}><FontAwesomeIcon icon={faRightToBracket}/></a>
            
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>

  );
}

export default MyNavbar;

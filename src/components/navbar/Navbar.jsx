import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import "./navbar.css";


function MyNavbar ({cartItems})  {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [totalItemsInCart, setTotalItemsInCart] = useState(0);

  // This useEffect hook will recalculate the total whenever cartItems change
  useEffect(() => {
    const total = cartItems?.reduce((total, item) => total + item.quantity, 0) || 0;
    setTotalItemsInCart(total);
    console.log("Cart items:", cartItems); // Debugging line to check cartItems structure
  }, [cartItems]);


  return (
    <Navbar expand="lg" fixed="top" bg="light" className="shadow-sm navbar">
      <Container>
        <Link to={'/'}>
        <Navbar.Brand href="#home">
          Store Home
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            
            <Nav.Link href="#home" className="mx-3"><Link to={'/'}>Home</Link></Nav.Link>
            
            
            <Nav.Link href="#shop" className="mx-3"> <Link to={'/Shop'}>Shop</Link></Nav.Link>
            
       
            <Nav.Link className="cart-link">
                                    <Link to={'/Cart'}>
                                    {totalItemsInCart > 0 && (
                                        <Badge pill bg="danger" className="cart-badge">
                                            {totalItemsInCart}
                                        </Badge>
                                    )}
                                    
                                    <span className="cart-icon-text">Cart</span>
                                    </Link>
            </Nav.Link>
            
            <Nav.Link href="#login" className="mx-3">
              <Button variant="primary" onClick={handleShow}>
                Login
              </Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div id="id01" className="modal">
      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
          

            <div className="imgcontainer">
              <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar"/>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="entre your password"
                autoFocus
              />
            </Form.Group>
          
          <button type="submit">Login</button>
      <label>
        <input type="checkbox" checked="checked" name="remember"/> Remember me
      </label>
        </Modal.Body>
        <Modal.Footer>
          <div className="container" >
          <Button className='cancelbtn' variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <span className='psw'>Forgot li <Link>password?</Link></span>
          </div>
        </Modal.Footer>
      </Modal>
      </div>

    </Navbar>
  );
}

export default MyNavbar;

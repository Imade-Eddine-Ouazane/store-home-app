import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';

function Footer() {
  return (
   
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>We are a company dedicated to providing the best service possible.</p>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: info@example.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Street Name, City, Country</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              
            <li><Link to={"/"}>Facebook</Link></li>
              <li><Link to={"/"}>Twitter</Link></li>
              <li><Link to={"/"}>Instagram</Link></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2024 Store Home. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    
  );
}
export default Footer;
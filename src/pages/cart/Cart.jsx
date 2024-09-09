import React from 'react';
import { Container, Row, Col, Table, Button, Image} from 'react-bootstrap';
import Navbar from '../../components/navbar/Navbar';
import cartItems from "../../cartItems.js"
import './cart.css';

function Cart() {
    
 
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

   
    const handleCheckout = () => {
        
        alert('Proceeding to checkout...');
    };

    return (
        <div className='mycontineur'>
            <Navbar/>
            <Container className="cart-page">
                <Row>
                    <Col>
                        <h2>Shopping Cart</h2>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Color</th>
                                    <th>Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <Image src={item.image} rounded className="cart-item-image" />
                                            {item.name}
                                        </td>
                                        <td>{item.quantity}</td>
                                        <td>{item.color}</td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row className="cart-summary">
                    <Col md={{ span: 4, offset: 8 }}>
                        <h4>Cart Summary</h4>
                        <Table bordered>
                            <tbody>
                                <tr>
                                    <td>Subtotal</td>
                                    <td>${totalPrice.toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td>Shipping</td>
                                    <td>Free</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>${totalPrice.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Button variant="primary" size="lg" block onClick={handleCheckout}>
                            Proceed to Checkout
                        </Button>
                    </Col>
                </Row>
            </Container>
    </div>
    )
}
export default Cart;
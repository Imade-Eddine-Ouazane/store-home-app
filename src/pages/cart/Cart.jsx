import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './cart.css'; // Import the CSS file
import Navbar from '../../components/navbar/Navbar';

function Cart({ cartItems }) {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        
        <div className="mycontineur">
            <Navbar cartItems={cartItems}/>
            <div className="cart-page">

                <h2>Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map(item => (
                                    <tr key={item.id}>
                                        <td>
                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="cart-item-image" 
                                            />
                                            {item.name}
                                        </td>
                                        <td>${item.price.toFixed(2)}</td>
                                        <td>{item.quantity}</td>
                                        <td>${(item.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="cart-summary">
                            <h4>Cart Summary</h4>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td><strong>Total Price:</strong></td>
                                        <td>${totalPrice.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Button variant="success">Proceed to Checkout</Button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbar from '../../components/navbar/Navbar';
import { useParams } from 'react-router-dom';
import products from '../../products.js';
import Footer from '../../components/footer/Footer';
import './detail.css';



function Detail() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
     <div>
        <Navbar/>
        <Container className="detail-page">
            <Row>
                <Col md={6}>
                    <Card.Img variant="top" src={product.image} alt={product.name} />
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
                            <Card.Text>
                                <strong>${product.price.toFixed(2)}</strong>
                                <br />
                                <div className="rating">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <span
                                            key={index}
                                            className={`star ${product.rating > index ? 'filled' : ''}`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                    <span className="rating-text">({product.rating})</span>
                                </div>
                                <br />
                                {product.description}
                            </Card.Text>
                            <Button variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Footer/>
        </Container>
        </div>
     
    );
}

export default Detail;

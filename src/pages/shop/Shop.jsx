import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import './shop.css';
import products from '../../products.js';

import Footer from '../../components/footer/Footer';


const categories = ['All', 'Watch', 'Accessories', 'Electronics','Mobile','Sofa'];
const ratings = ['All', '4 stars & up', '3 stars & up', '2 stars & up', '1 star & up'];


function Shop() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedRating, setSelectedRating] = useState('All');
    

  
    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
        const ratingMatch = selectedRating === 'All' || product.rating >= parseFloat(selectedRating);
        return categoryMatch && ratingMatch;
    });

    return (
        <>
            <Navbar/>

            <Container className="shop-page">
                <Row>
                    <Col md={3} className="filter-section">
                        <h4>Filters</h4>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="category-dropdown">
                                Category: {selectedCategory}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {categories.map(category => (
                                    <Dropdown.Item
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        active={selectedCategory === category}
                                    >
                                        {category}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="mt-3">
                            <Dropdown.Toggle variant="success" id="rating-dropdown">
                                Rating: {selectedRating === 'All' ? 'All Ratings' : `Rating: ${selectedRating} stars & up`}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {ratings.map(rating => (
                                    <Dropdown.Item
                                        key={rating}
                                        onClick={() => setSelectedRating(rating === 'All' ? 'All' : rating)}
                                        active={selectedRating === rating}
                                    >
                                        {rating === 'All' ? 'All Ratings' : `Rating: ${rating} stars & up`}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col md={9}>
                        <Row>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <Col sm={6} md={4} lg={3} key={product.id} className="product-card">
                                        <Card>
                                            <Card.Img variant="top" src={product.image} />
                                            <Card.Body>
                                                <Card.Title>{product.name}</Card.Title>
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
                                                </Card.Text>
                                                <Link to={`/detail/${product.id}`}>
                                                    <Button variant="primary" className="me-2">View Details</Button>
                                                </Link>
                                                <Button variant="secondary">Add to Cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            ) : (
                                <Col>
                                    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHQwejBzMnZwdDY1YW54bDF5eHprNWNpaGkxajRkdTdpa2FtNHE1ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lqFHf5fYMSuKcSOJph/giphy.webp" alt="" srcset="" />
                                </Col>
                            )}
                            
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Shop;
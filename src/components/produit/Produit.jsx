import React from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

import products from '../../products';

const ProductGrid = () => {
 
  const discountedProducts = products.filter(product => product.discount).slice(0, 5);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Big Discount</h2>
      <Row>
        {discountedProducts.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <Card className="h-100">
              <div style={{ position: 'relative' }}>
                <Card.Img variant="top" src={product.image} />
                <Badge
                  bg="primary"
                  style={{ position: 'absolute', top: '10px', left: '10px' }}
                >
                  {product.discount}
                </Badge>
              </div>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text as="div">
                  <div>
                    <strong>${product.price}</strong>
                  </div>
                  <div>
                    <span className="text-warning">
                      {'★'.repeat(Math.floor(product.rating))}
                    </span>
                    <span className="text-muted">
                      {'☆'.repeat(5 - Math.floor(product.rating))}
                    </span>
                  </div>
                </Card.Text>
                <Button variant="outline-primary" className="w-100 mt-3">
                  <i className="bi bi-plus"></i> Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductGrid;


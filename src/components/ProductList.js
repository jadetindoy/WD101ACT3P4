import React, { useState } from 'react';
import Product from './Product';
import { Button, Container, Row, Col } from 'react-bootstrap';
import shoeImage from '../images/air-jordan-1-mid-shoes-7cdjgS.png';
import gadgetImage from '../images/apple.jpg';


const ProductList = () => {
  const [category, setCategory] = useState('All');

  const products = [
    { id: 1, name: 'Running Shoes', price: 5000, category: 'Shoes', imageUrl: shoeImage },
    { id: 2, name: 'Basketball Shoes', price: 3000, category: 'Shoes', imageUrl: shoeImage },
    { id: 3, name: 'Smartphone', price: 80000, category: 'Gadgets', imageUrl: gadgetImage },
    { id: 4, name: 'Tablet', price: 60000, category: 'Gadgets', imageUrl: gadgetImage },
  ];

  const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Button variant="primary" onClick={() => setCategory('Shoes')}>Shoes</Button>
          <Button variant="secondary" onClick={() => setCategory('Gadgets')}>Gadgets</Button>
        </Col>
      </Row>
      <Row>
        {filteredProducts.map(product => (
          <Col key={product.id} md={4}>
            <Product name={product.name} price={product.price} imageUrl={product.imageUrl} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;

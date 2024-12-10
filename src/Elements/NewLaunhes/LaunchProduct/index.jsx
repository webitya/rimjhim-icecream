import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import './NewLaunchesProducts.css'; // Optional for extra styling

const { Meta } = Card;

const newLaunches = [
  {
    title: 'KESHAR PISTA MATKA',
    description: '',
    imageUrl: '/novel32.png', // Replace with actual image URLs
  },
  {
    title: 'BLACK FOREST',
    description: '',
    imageUrl: '/novel33.png',
  },
  {
    title: 'SANDWICH',
    description: '',
    imageUrl: '/novel31.png',
  },
  
];

const NewLaunchesProducts = () => {
  return (
    <div className="new-launches-products py-20 px-6 lg:px-16 bg-white">
      <h2 className="text-4xl font-extrabold text-center text-blue-600 mb-10">
        New Ice Cream Launches
      </h2>
      <Row gutter={[16, 16]} justify="center">
        {newLaunches.map((product, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              className="product-card shadow-lg h-full text-center" // Use h-full for equal height
            >
              <img alt={product.title} src={product.imageUrl} className="card-image" />
              <Meta title={product.title} description={product.description} />
           
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewLaunchesProducts;

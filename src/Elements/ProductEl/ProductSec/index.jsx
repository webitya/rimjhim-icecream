import React from 'react';
import { Typography, Card } from 'antd';
import './ProductSection.css'; // Optional for extra styling

const { Title } = Typography;

// Sample product data for 10 products
const products = [
  {
    id: 1,
    title: 'SANDWICH',
    imageUrl:'./novel31.png', // Update with actual image path
  },
  {
    id: 2,
    title: 'SUNDAE',
    imageUrl: './novel34.png', // Update with actual image path
  },
  {
    id: 3,
    title: 'Mango duet',
    imageUrl:'./stick28.png', // Update with actual image path
  },
  {
    id: 4,
    title: 'Nutty Roll',
    imageUrl: './stick29.png', // Update with actual image path
  },
  {
    id: 5,
    title: 'ButterScotch',
    imageUrl:'./cone31.png', // Update with actual image path
  },
  {
    id: 6,
    title: 'Vanilla',
    imageUrl: './cone32.png', // Update with actual image path
  },
  {
    id: 7,
    title: 'Mango',
    imageUrl: './cup10.png', // Update with actual image path
  },
  {
    id: 8,
    title: 'Butter',
    imageUrl: './cup14.png', // Update with actual image path
  },
 
];

const ProductSection = () => {
  return (
    <div className="product-section py-20 px-6 lg:px-16">
      <Title className="text-4xl font-bold text-center mb-12">
        Our Delicious Products
      </Title>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card 
            key={product.id}
            hoverable
            cover={
              <img
                alt={product.title}
                src={product.imageUrl}
                className="transition-transform transform hover:scale-105"
              />
            }
            className="product-card rounded-lg shadow-lg"
          >
            <Title level={4} className="text-center text-purple-600">
              {product.title}
            </Title>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;

import React from 'react';
import { Typography } from 'antd';
import './ProductHero.css';

const { Title, Paragraph } = Typography;

const ProductHero = () => {
  return (
    <div className="hero-container flex flex-col lg:flex-row items-center py-10 px-4 lg:px-8">
      {/* Left Section - Text Content */}
      <div className="hero-text-content w-full lg:w-1/2 text-center lg:text-left z-10">
        <Title className="hero-title text-3xl md:text-4xl font-bold text-orange-800 mb-4">
          Elevate Your Senses with Rimjhim Ice Cream
        </Title>
        <Paragraph className="hero-paragraph text-base md:text-lg text-gray-700 mb-4">
          Dive into a delightful experience with Rimjhim Ice Cream—where every scoop brings a burst of flavor crafted with love. Indulge in the ultimate treat that transforms any moment into a celebration.
        </Paragraph>
      </div>

      {/* Right Section - Image */}
      <div className="hero-image-container w-full lg:w-1/2 flex justify-center items-center z-10">
        <img
          src="/imgh.png" // Replace with your own image
          alt="Rimjhim Ice Cream"
          className="hero-image rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      {/* Background Bubbles */}
      <div className="bubble-background">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} className={`bubble bubble-${index + 1}`}></span>
        ))}
      </div>
    </div>
  );
};

export default ProductHero;

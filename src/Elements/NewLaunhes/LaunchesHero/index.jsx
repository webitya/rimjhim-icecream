import React from 'react';
import { Button, Typography } from 'antd';
import './NewLaunchesHero.css'; // Optional for extra styling
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const NewLaunchesHero = () => {
  return (
    <div className="new-launches-hero bg-gradient-to-b from-blue-50 to-blue-200 py-20 px-6 lg:px-16 relative overflow-hidden">
      {/* Background Decorative Bubbles */}
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>
      <div className="container mx-auto text-center">
        <Title className="text-5xl font-extrabold text-blue-600 mb-6">
          Discover Our Latest Ice Cream Launches!
        </Title>
        <Paragraph className="text-lg text-gray-700 mb-10">
          Be the first to experience our brand-new flavors, handcrafted with love and the finest ingredients. 
          Every scoop is a celebration of taste!
        </Paragraph>
        <Link to="/Contact">
        <Button type="primary" size="large" className="learn-more-btn">
          Learn More
        </Button></Link>
      </div>
    </div>
  );
};

export default NewLaunchesHero;

import React from 'react';
import { Carousel, Typography, Card, Row, Col, Image, Steps, Button } from 'antd';
import { CheckCircleOutlined, HeartOutlined, SmileOutlined } from '@ant-design/icons';
import './FactoryPage.css'; // Optional for extra styling
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const FactoryPage = () => {
  return (
    <div className="factory-page bg-gradient-to-b from-pink-50 to-yellow-100">
      {/* Hero Section */}
      <div className="hero-section single-gradient-bubble-background relative text-center py-20">
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <Title className="text-5xl font-extrabold text-pink-600 mb-6">
            Welcome to Rimjhim Ice Cream Factory!
          </Title>
          <Paragraph className="text-lg text-gray-700 mb-8">
            Discover how we create our delicious ice creams with love, quality, and the finest ingredients at every step.
          </Paragraph>
          <Link to="/Contact">
          <Button type="primary" size="large" className="px-8 py-4 bg-pink-600 hover:bg-pink-700 rounded-full font-bold">
            Learn More
          </Button></Link>
        </div>
      </div>

 

      {/* Factory Process Section */}
      <div className="container mx-auto px-6 lg:px-16 mt-16">
        <Title className="text-4xl font-bold text-pink-600 text-center mb-6">Our Production Process</Title>
        <Steps direction="horizontal" current={1} className="flex justify-center">
          <Step title="Ingredients" description="Fresh & Quality Ingredients" icon={<CheckCircleOutlined />} />
          <Step title="Mixing" description="Carefully Balanced Flavors" icon={<HeartOutlined />} />
          <Step title="Freezing" description="Innovative Freezing Techniques" icon={<SmileOutlined />} />
        </Steps>

        <Row gutter={[16, 16]} justify="center" className="mt-12">
          <Col xs={24} sm={12} md={8}>
            <Card hoverable cover={<Image src="/11.png" alt="Mixing Ingredients" style={{ height: '300px', objectFit: 'cover' }} />} className="shadow-lg">
              <Card.Meta title="Mixing Ingredients" description="Using the freshest ingredients to create our unique flavors." />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable cover={<Image src="/12.png" alt="Freezing Process" style={{ height: '300px', objectFit: 'cover' }} />} className="shadow-lg">
              <Card.Meta title="Freezing Process" description="Advanced freezing methods to lock in flavor and freshness." />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card hoverable cover={<Image src="/13.png" alt="Packaging" style={{ height: '300px', objectFit: 'cover' }} />} className="shadow-lg">
              <Card.Meta title="Packaging" description="Ensuring every scoop is packaged with care for the highest quality." />
            </Card>
          </Col>
        </Row>
      </div>
       {/* =========================== */}
      <div className='p-10'>
      <div className="google-map bg-white rounded-lg shadow-lg mt-10 w-full">
  <Title level={2} className="text-3xl font-bold text-pink-500 mb-4 text-center">Find Us Here!</Title>
  <iframe
    title="Google Maps"
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3659.546430397639!2d85.46555337532754!3d23.47681987885798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDI4JzM2LjYiTiA4NcKwMjgnMDUuMyJF!5e0!3m2!1sbn!2sin!4v1729413740646!5m2!1sbn!2sin"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    className="rounded-lg" // Added rounded corners to the iframe
  ></iframe>
</div>
      </div>

      {/* Commitment to Quality Section */}
      <div className="bg-gradient-to-r from-yellow-100 to-pink-100 py-16 mt-16">
        <div className="container mx-auto px-6 lg:px-16">
          <Title className="text-4xl font-bold text-pink-600 text-center mb-6">Our Commitment to Quality</Title>
          <Paragraph className="text-lg text-gray-700 text-center mb-4">
            At Rimjhim Ice Cream, quality is our top priority. We ensure every product meets the highest standards through
            rigorous testing, careful ingredient selection, and advanced production processes.
          </Paragraph>
          <div className="flex justify-center mt-8">
            <div className="flex space-x-8">
              <CheckCircleOutlined style={{ fontSize: '64px', color: '#D63E2C' }} />
              <HeartOutlined style={{ fontSize: '64px', color: '#D63E2C' }} />
              <SmileOutlined style={{ fontSize: '64px', color: '#D63E2C' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryPage;

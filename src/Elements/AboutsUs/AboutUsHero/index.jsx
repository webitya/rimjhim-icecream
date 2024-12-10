import React from 'react';
import { Typography, Button } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './AboutHeroSection.css'; // Optional for extra styling
import { Link } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const AboutHeroSection = () => {
  return (
    <div className="about-hero-section bg-gradient-to-b from-yellow-100 to-pink-200 py-20 lg:py-20 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="about-background-circle bg-pink-100 opacity-50 rounded-full w-80 h-80 absolute top-20 left-20"></div>
        <div className="about-background-circle bg-yellow-200 opacity-50 rounded-full w-96 h-96 absolute bottom-20 right-20"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="about-text lg:w-1/2 w-full text-center lg:text-left">
          <Title className="text-4xl lg:text-5xl font-extrabold text-pink-600 mb-6">
            About Rimjhim
          </Title>
          <Paragraph className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
            Rimjhim is a leading manufacturer of ice cream and frozen desserts, proudly based in Ranchi. With a commitment to quality and innovation, we create delightful flavors that cater to diverse tastes. Our products are crafted with the finest ingredients, ensuring a rich and creamy experience. We supply our delicious offerings across Jharkhand, Bihar, Odisha, and West Bengal, making every celebration sweeter.
          </Paragraph>
          <Paragraph className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
            With our tagline, <span className="text-pink-600 font-bold">"Jo Har Dilo Pe Raj Kare,"</span> we aim to reign supreme in the hearts of our customers, delivering joy with every scoop.
          </Paragraph>
          <div className="mt-8 space-x-4 space-y-4">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300">
              <MailOutlined /> salesrimjhim@gmail.com
            </Button>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300">
              <PhoneOutlined /> +916202824318
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="about-image lg:w-1/2 w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="image-circle bg-white rounded-full overflow-hidden w-76 h-76 flex items-center justify-center shadow-xl">
            <img src="/ab1.png" alt="Rimjhim Factory" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10 mt-12">
        <div className="bg-white shadow-lg rounded-lg p-8 lg:p-12">
          <Title className="text-3xl lg:text-4xl font-bold text-pink-600 mb-4">Our Location</Title>
          <Paragraph className="text-lg text-gray-700 mb-6 leading-relaxed">
            Located in Ormanjhi, Ranchi, our factory specializes in manufacturing premium ice cream and frozen desserts, featuring a wide array of unique flavors. Utilizing the latest technology, we ensure that every product meets the highest standards of quality and taste.
          </Paragraph>
          <Paragraph className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our distribution network spans across Jharkhand, Bihar, Odisha, and West Bengal, making every occasion sweeter with our delicious ice creams.
          </Paragraph>
          <div className="flex items-center space-x-4">
            <Link to="https://maps.app.goo.gl/kq6xP3PtvRR9fvL37" target='_blank'>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300">
              <EnvironmentOutlined /> Ormanjhi, Ranchi, Jharkhand
            </Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;

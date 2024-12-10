import React, { useState, useEffect } from 'react';
import './HomeAbout.css';
import { Carousel } from 'antd'; // Ant Design Carousel for images
import {
  AppleOutlined,
  SmileOutlined,
  HeartOutlined,
  GlobalOutlined,
  StarOutlined,
} from '@ant-design/icons'; // Ant Design Icons

const HomeAbout = () => {
  const [images] = useState([
    "/cup10.png",
    "/novel31.png",
    "/cup15.png",
    "/novel34.png",
    "/stick25.png",
    "/stick26.png"
  ]);

  const [loading, setLoading] = useState(true);

  // Preload images
  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map((image) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve; // Resolve when image loads
          img.onerror = resolve; // Resolve even if there is an error to avoid hanging
        });
      });
      await Promise.all(promises);
      setLoading(false); // Set loading to false once all images are preloaded
    };
    preloadImages();
  }, [images]);

  return (
    <div className="about-container flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-10 lg:py-20 bg-gradient-to-b from-pink-100 via-white to-pink-50">
      {/* Left Section - Image Carousel */}
      <div className="about-left lg:w-1/2 w-full flex justify-center items-center relative hidden lg:flex">
        <div className="circle-background"></div> {/* Circle Background */}
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <Carousel
            autoplay
            dots={false} // Hides navigation dots
            autoplaySpeed={2000} // Change images every 2 seconds
            pauseOnHover={false} // Prevent carousel from pausing on hover
            className="w-full max-w-lg rounded-xl overflow-hidden relative z-10"
          >
            {images.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img
                  src={image}
                  alt={`About Us ${index + 1}`}
                  className="about-image"
                />
              </div>
            ))}
          </Carousel>
        )}
      </div>

      {/* Right Section - Text */}
      <div className="about-right lg:w-1/2 w-full lg:pl-14 mt-8 lg:mt-0 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-pink-600">
          About Rimjhim Ice Cream
        </h1>
        <p className="text-lg lg:text-xl mb-8 text-gray-700 leading-relaxed">
          For over 25 years, we've been delighting taste buds with the finest ice creams crafted with love and passion. Every scoop is a burst of happiness, made with all-natural ingredients and sustainable practices.
        </p>

        <ul className="text-left space-y-4 text-gray-800">
          <li className="flex items-center">
            <AppleOutlined className="text-green-500 mr-3 hover:scale-110 transition duration-300" style={{ fontSize: '24px' }} /> <strong>100% Natural Ingredients</strong>
          </li>
          <li className="flex items-center">
            <SmileOutlined className="text-yellow-500 mr-3 hover:scale-110 transition duration-300" style={{ fontSize: '24px' }} /> <strong>Over 50 Unique Flavors</strong>
          </li>
          <li className="flex items-center">
            <HeartOutlined className="text-red-500 mr-3 hover:scale-110 transition duration-300" style={{ fontSize: '24px' }} /> <strong>Community-focused Initiatives</strong>
          </li>
          <li className="flex items-center">
            <GlobalOutlined className="text-blue-500 mr-3 hover:scale-110 transition duration-300" style={{ fontSize: '24px' }} /> <strong>Sustainably Sourced Materials</strong>
          </li>
          <li className="flex items-center">
            <StarOutlined className="text-yellow-400 mr-3 hover:scale-110 transition duration-300" style={{ fontSize: '24px' }} /> <strong>25 Years of Excellence</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeAbout;

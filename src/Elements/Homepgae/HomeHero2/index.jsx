import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import './HeroSection.css'; // Optional for extra styling

const HeroSection = () => {
  const images = [
    "/novel31.png",
    "/cup15.png",
    "/cup10.png",
    "/novel34.png",
    "/stick25.png",
    "/stick26.png"
    // Add more image paths as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1700); // Change image every 1.7 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="hero-section bg-gradient-to-b from-yellow-100 to-pink-200 py-20 lg:py-32 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="hero-background-circle bg-pink-100 opacity-50 rounded-full w-80 h-80 absolute top-20 left-20"></div>
        <div className="hero-background-circle bg-yellow-200 opacity-50 rounded-full w-96 h-96 absolute bottom-20 right-20"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="hero-text lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-pink-600 mb-6">
            Taste Happiness, One Scoop at a Time
          </h1>
          <p className="text-lg lg:text-2xl text-gray-700 mb-6 leading-relaxed">
            Welcome to Rimjhim Ice Cream, where every bite is crafted with love, fresh ingredients, and a sprinkle of joy. Savor the flavor!
          </p>
          <div className="mt-4 space-x-4">
            <Link to="/Products" className="btn-primary bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition duration-300">
              Explore Flavors
            </Link>
            <Link to="/About-Company" className="btn-secondary bg-white border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-6 py-3 rounded-full shadow-lg transition duration-300">
              About Us
            </Link>
          </div>
        </div>

        {/* Updated Image Section */}
        <div className="hero-image lg:w-1/2 w-full flex justify-center lg:justify-end mt-10 lg:mt-0" style={{ boxShadow: "none" }}>
          <div className="image-circle bg-white rounded-full overflow-hidden w-72 h-72 flex items-center justify-center shadow-xl">
            <img src={images[currentImageIndex]} alt="Rimjhim Ice Cream" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

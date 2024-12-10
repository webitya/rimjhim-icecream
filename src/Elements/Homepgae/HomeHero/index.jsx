import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // Custom styles

const productNames = ["Vanilla", "Chocolate", "Strawberry", "Mango"];
const productImages = [
  "/img.jpg",
  "/img.jpg",
  "/img.jpg",
  "/img.jpg"
];

const directions = ['top', 'bottom', 'left', 'right'];

const HeroSection = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('top');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % productNames.length);
      setCurrentImage((prev) => (prev + 1) % productImages.length);
      setAnimationDirection(directions[Math.floor(Math.random() * directions.length)]);
    }, 3000); // Change product and image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container" aria-label="Rimjhim Ice Cream promotional section">
      {/* Sticky Image at the Top */}
      <img src="/bg1.png" className="sticky-image" alt="Decorative top image" />

      {/* Main Content */}
      <article className="content">
        {/* Left Section: Company Name and Changing Products */}
        <div className="left-section">
          <h1>Rimjhim Ice Cream</h1>
          <h2>{productNames[currentProduct]} Flavour</h2>
        </div>

        {/* Right Section: Animated Product Image */}
        <div className="right-section">
          <img
            src={productImages[currentImage]}
            className={`product-image animate-from-${animationDirection}`}
            alt={`${productNames[currentProduct]} ice cream`}
            onError={(e) => { e.target.src = '/fallback.jpg'; }} // Fallback image
          />
        </div>
      </article>

      {/* Sticky Image at the Bottom */}
      <img src="/bg2.png" className="sticky-image" alt="Decorative bottom image" />
    </section>
  );
};

export default HeroSection;

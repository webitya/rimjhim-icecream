import React from 'react';
import './HomeValues.css';

const HomeValues = () => {
  return (
    <div className="values-container py-10 lg:py-20 bg-gradient-to-b from-white to-blue-50">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-600">
          Our Core Values
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mt-4">
          At Rimjhim Ice Cream, our values are at the heart of everything we do. From using natural ingredients to providing a memorable customer experience, we stand by our commitment to quality and community.
        </p>
      </div>

      {/* Grid Layout for Values */}
      <div className="values-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16">
        {[
          { text: 'Quality Ingredients', img: '/1.png', alt: 'Quality Ingredients' },
          { text: 'Community Focus', img: '/2.png', alt: 'Community Focus' },
          { text: 'Sustainability', img: '/3.png', alt: 'Sustainability' },
          { text: 'Innovation', img: '/4.png', alt: 'Innovation' },
        ].map((value, index) => (
          <div key={index} className="value-card transition-transform duration-300 hover:scale-105">
            <div className="value-image">
              <img src={value.img} alt={value.alt} className="value-img" />
            </div>
            <p className="value-text">{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeValues;

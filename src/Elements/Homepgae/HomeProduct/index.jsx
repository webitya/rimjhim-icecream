import React, { useState } from 'react';
import { Carousel } from 'antd'; // Ant Design Carousel
import { LeftOutlined, RightOutlined } from '@ant-design/icons'; // Ant Design Icons for navigation
import { Modal } from 'antd'; // Ant Design Modal for displaying images
import './HomeProduct.css'; // Custom CSS for styling

const HomeProductSection = () => {
  const [flavours] = useState([
    { name: 'Vanilla', img: '/img.jpg', description: 'Classic vanilla flavor.' },
    { name: 'Chocolate', img: '/img.jpg', description: 'Rich chocolate ice cream.' },
    { name: 'Strawberry', img: '/img.jpg', description: 'Fresh strawberry delight.' },
    { name: 'Mango', img: '/img.jpg', description: 'Sweet and juicy mango flavor.' },
    { name: 'Pistachio', img: '/img.jpg', description: 'Nutty pistachio goodness.' },
    { name: 'Blueberry', img: '/img.jpg', description: 'Tangy blueberry bliss.' },
    { name: 'Coffee', img: '/img.jpg', description: 'Bold coffee flavor.' },
    { name: 'Caramel', img: '/img.jpg', description: 'Creamy caramel delight.' },
    { name: 'Mint', img: '/img.jpg', description: 'Refreshing mint flavor.' },
    { name: 'Coconut', img: '/img.jpg', description: 'Tropical coconut goodness.' },
    { name: 'Lemon', img: '/img.jpg', description: 'Zesty lemon sorbet.' },
    { name: 'Raspberry', img: '/img.jpg', description: 'Sweet and tart raspberry.' },
    { name: 'Cookie Dough', img: '/img.jpg', description: 'Cookie dough chunks in ice cream.' },
    { name: 'Peanut Butter', img: '/img.jpg', description: 'Creamy peanut butter ice cream.' },
    { name: 'Blackberry', img: '/img.jpg', description: 'Juicy blackberry flavor.' },
    { name: 'Passion Fruit', img: '/img.jpg', description: 'Exotic passion fruit sorbet.' }
  ]);

  // Group the flavours into sets of 4
  const groupedFlavours = [];
  for (let i = 0; i < flavours.length; i += 4) {
    groupedFlavours.push(flavours.slice(i, i + 4));
  }

  // State for modal visibility and selected image
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFlavour, setSelectedFlavour] = useState(null);

  // Function to show modal
  const showModal = (flavour) => {
    setSelectedFlavour(flavour);
    setIsModalVisible(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedFlavour(null);
  };

  return (
    <div className="product-section-container py-10 lg:py-20">
      <h1 className="text-center text-4xl font-bold mb-10">Our Delicious Flavours</h1>
      
      <Carousel
        autoplay
        autoplaySpeed={2000} // Autoslide every 2 seconds
        dots={false} // Remove bottom navigation dots
        arrows // Enable left/right navigation arrows
        prevArrow={<LeftOutlined className="carousel-arrow-left" />} // Custom left arrow
        nextArrow={<RightOutlined className="carousel-arrow-right" />} // Custom right arrow
        className="flavours-carousel"
        effect="scrollx"
      >
        {groupedFlavours.map((group, index) => (
          <div key={index} className="flex justify-center">
            <div className="flavours-row flex justify-between w-full">
              {group.map((flavour, flavourIndex) => (
                <div key={flavourIndex} className="flavour-item mx-4 flex flex-col items-center">
                  <div 
                    className="flavour-circle w-40 h-40 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => showModal(flavour)} // Open modal on click
                  >
                    <img
                      src={flavour.img}
                      alt={flavour.name}
                      className="flavour-image w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center text-lg mt-4 font-medium">{flavour.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>

      {/* Modal for displaying selected image and description */}
      {selectedFlavour && (
        <Modal
          title={selectedFlavour.name}
          visible={isModalVisible}
          onCancel={handleCloseModal}
          footer={null}
          width={300}
        >
          <img
            src={selectedFlavour.img}
            alt={selectedFlavour.name}
            className="w-full h-auto"
          />
          <p className="mt-2">{selectedFlavour.description}</p>
        </Modal>
      )}
    </div>
  );
};

export default HomeProductSection;

import React, { useState } from 'react';
import { Carousel, Row, Col, Modal } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const NextArrow = ({ onClick }) => (
  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
    <div
      className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition duration-300"
      onClick={onClick}
    >
      <RightOutlined className="text-white" />
    </div>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
    <div
      className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition duration-300"
      onClick={onClick}
    >
      <LeftOutlined className="text-white" />
    </div>
  </div>
);

const HomeSticks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedFlavour, setSelectedFlavour] = useState(null);

  const flavours = [
    { name: 'Orange', img: '/stick31.png', description: '' },
    { name: 'Chocobar', img: '/stick32.png', description: '' },
    { name: 'Pine Apple', img: '/stick21.png', description: '' },
    { name: 'Litchi', img: '/stick22.png', description: '' },
    { name: 'Kaccha aam', img: '/stick23.png', description: '' },
    { name: 'Cola', img: '/stick24.png', description: '' },
    { name: 'StrawBerry', img: '/stick25.png', description: '' },
    { name: 'Pakka Aam', img: '/stick26.png', description: '' },
    { name: 'Rajwari Kulfi', img: '/stick27.png', description: '' },
    { name: 'Mango duet', img: '/stick28.png', description: '' },
    { name: 'Nutty Roll', img: '/stick29.png', description: '' },
    { name: 'Rajwari Kulfi', img: '/stick30.png', description: '' },

  ];

  const isSmallDevice = window.innerWidth < 576;
  const itemsPerSlide = isSmallDevice ? 2 : 5;

  const slides = [];
  for (let i = 0; i < flavours.length; i += itemsPerSlide) {
    slides.push(flavours.slice(i, i + itemsPerSlide));
  }

  const showModal = (flavour) => {
    setSelectedFlavour(flavour);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedFlavour(null);
  };

  return (
    <div className="container mx-auto px-2 py-3 relative">
      <div className="p-0 m-0 flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-semibold text-pink-600 tracking-wide">
          Sticks
        </h1>
      </div>

      <Carousel
        arrows
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        autoplay
        autoplaySpeed={2500} // Set autoplay speed to 1.5 seconds
        dots={false}
        beforeChange={(current, next) => setCurrentSlide(next)}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            <Row gutter={[16, 16]} justify="center" className='py-2'>
              {slide.map((flavour, flavourIndex) => (
                <Col xs={8} md={6} lg={4} key={flavourIndex}>
                  <div 
                    className="flex flex-col items-center justify-center p-5 w-36 h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 shadow-lg"
                    style={{ overflow: 'hidden',border:"2px solid white" }}
                    onClick={() => showModal(flavour)}
                  >
                    <img
                      alt={flavour.name}
                      src={flavour.img}
                      className="rounded-full w-32 h-32 border-4 border-pink-600 md:w-36 md:h-36 lg:w-44 lg:h-44 object-cover"
                    />
                    <p className="text-center mt-1 font-medium text-black sm:text-xs">{flavour.name}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Carousel>

      {selectedFlavour && (
        <Modal
          title={selectedFlavour.name}
          visible={isModalVisible}
          onCancel={handleCloseModal}
          footer={null}
        >
          <img 
            src={selectedFlavour.img} 
            alt={selectedFlavour.name} 
            className="w-full h-auto rounded-full border-4 border-pink-600" 
          />
          <p className="mt-2">{selectedFlavour.description}</p>
        </Modal>
      )}
    </div>
  );
};

export default HomeSticks;

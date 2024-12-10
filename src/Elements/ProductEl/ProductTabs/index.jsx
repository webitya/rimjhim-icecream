import React, { useState } from 'react';
import { Tabs, Card } from 'antd';

const { TabPane } = Tabs;

const TabbedGallery = () => {
  const [activeTab, setActiveTab] = useState('1');

  const data = {
    '1': [
      { title: 'ButterScotch', img: '/cone31.png' },
      { title: 'Vanilla', img: '/cone32.png' },
      { title: 'Coconut', img: '/cone33.png' },
      { title: 'Rajbhog Cone', img: '/cone34.png' },
      { title: 'StrawBerry', img: '/cone35.png' },
      { title: 'Chocolate', img: '/cone36.png' },
      { title: 'Twin cone', img: '/cone37.png' },
      { title: 'Oreo', img: '/cone38.png' },
      { title: 'Rabari Cone', img: '/cone39.png' },
      { title: 'Chocolate', img: '/cone40.png' },
    ],
    '2': [
      { title: 'Mango', img: '/cup10.png'  },
      { title: 'StrawBerry', img: '/cup11.png'  },
      { title: 'Vanilla', img: '/cup12.png'  },
      { title: 'StrawBerry', img: '/cup13.png'  },
      { title: 'Butter', img: '/cup14.png' },
      { title: 'Chocolate', img: '/cup15.png' },
      { title: 'Vanilla', img: '/cup16.png' },
     
    ],
    '3': [
      { title: 'Orange', img: '/stick31.png'},
      { title: 'Chocobar', img: '/stick32.png'},
      { title: 'Pine Apple', img: '/stick21.png' },
      { title: 'Litchi', img: '/stick22.png' },
      { title: 'Kaccha aam', img: '/stick23.png' },
      { title: 'Cola', img: '/stick24.png' },
      { title: 'StrawBerry', img: '/stick25.png' },
      { title: 'Pakka Aam', img: '/stick26.png' },
      { title: 'Rajwari Kulfi', img: '/stick27.png' },
      { title: 'Mango duet', img: '/stick28.png' },
      { title: 'Nutty Roll', img: '/stick29.png' },
      { title: 'Rajwari Kulfi', img: '/stick30.png' },
    ],
    '4': [
      { title: 'SANDWICH', img: '/novel31.png' },
      { title: 'KESHAR PISTA MATKA', img: '/novel32.png' },
      { title: 'BLACK FOREST', img: '/novel33.png' },
      { title: 'SUNDAE', img: '/novel34.png' },
    ],
    '5': [
      { title: 'Pine Apple', img: '/stick21.png' },
      { title: 'Litchi', img: '/stick22.png' },
      { title: 'Kaccha aam', img: '/stick23.png' },
      { title: 'Cola', img: '/stick24.png' },
      { title: 'StrawBerry', img: '/stick25.png' },
      { title: 'Pakka Aam', img: '/stick26.png' },
     
    ],
    '6': [
      { title: '', img: '/cake41.png' },
      { title: '', img: '/cake42.png' },
      { title: '', img: '/cake43.png' },
      { title: '', img: '/cake44.png' },
    ],
  };

  return (
    <div className="w-full bg-pink-100 p-6 rounded-xl">
      {/* Scrollable tabs for mobile responsiveness */}
      <div className="overflow-x-auto p-4">
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          tabPosition="top"
          className="custom-tabs font-semibold"
          tabBarStyle={{ borderBottom: 'none', overflowX: 'auto', whiteSpace: 'nowrap' }}
        >
          <TabPane tab={<span role="img" aria-label="vanilla">🍨 CONES</span>} key="1" />
          <TabPane tab={<span role="img" aria-label="strawberry">🍨 CUPS</span>} key="2" />
          <TabPane tab={<span role="img" aria-label="pistachio">🍨 STICKS</span>} key="3" />
          <TabPane tab={<span role="img" aria-label="coffee">🍨 Novelties</span>} key="4" />
          <TabPane tab={<span role="img" aria-label="coffee">🍨 WATER CANDIES</span>} key="5" />
          <TabPane tab={<span role="img" aria-label="mint">🍨 PARTY PACKS</span>} key="6" />
        </Tabs>
      </div>

      {/* Image Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {data[activeTab]?.map((item, index) => (
          <Card
            key={index}
            cover={
              <img
                alt={item.title}
                src={item.img}
                className="rounded-t-lg shadow-xl hover:rotate-3 transform transition duration-300 ease-in-out"
              />
            }
            className="rounded-lg overflow-hidden shadow-2xl bg-gradient-to-b from-yellow-300 via-pink-300 to-purple-300 border-2 border-pink-200 hover:border-yellow-300 transition duration-300"
            bodyStyle={{ padding: '10px', backgroundColor: '#fff' }}
          >
            <div className="text-center mt-2 font-extrabold text-pink-800 text-lg">{item.title}</div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TabbedGallery;

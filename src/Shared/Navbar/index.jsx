import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import { Drawer, Menu } from 'antd';
import "./Navbar.css";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false); // State for sticky navbar
  const location = useLocation(); // Get the current route

  // Toggle the drawer state
  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Function to determine if the menu item is active
  const isActive = (path) => location.pathname === path;

  const handleScroll = () => {
    // Check scroll position
    const scrollTop = window.scrollY;
    if (scrollTop > 80) { // Adjusted for simplicity; can change this threshold
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup the event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`menu-social okokok bg-white shadow-md px-3 py-3 flex justify-between items-center ${isSticky ? 'fixed top-0 left-0 w-full z-10 transition-all duration-300' : ''}`}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/logo1.svg" alt="Logo" width="150px" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex menu">
        <ul className="flex space-x-8 text-lg font-semibold">
          {['/', '/About-Company', '/Products', '/New-Launches', '/Factory', '/Contact'].map((path, index) => (
            <li key={index} className="relative">
              <Link
                to={path}
                className={`transition duration-300 ${isActive(path) ? 'text-pink-600' : 'hover:text-pink-500'}`}
              >
                {path === '/' ? 'Home' : path.split('/')[1].replace('-', ' ')}
              </Link>
              {isActive(path) && <img src="/active.svg" alt="Active" className="absolute -right-6 top-0 w-6 h-6" />}
            </li>
          ))}
        </ul>
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex social space-x-4">
        {[
          { href: "https://facebook.com", icon: <FacebookOutlined className="text-xl hover:text-blue-600 transition duration-300" /> },
          { href: "https://twitter.com", icon: <TwitterOutlined className="text-xl hover:text-blue-400 transition duration-300" /> },
          { href: "https://instagram.com", icon: <InstagramOutlined className="text-xl hover:text-pink-600 transition duration-300" /> },
        ].map((social, index) => (
          <a key={index} href={social.href} target="_blank" rel="noreferrer">
            {social.icon}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <MenuOutlined className="text-2xl cursor-pointer" onClick={handleDrawerToggle} />
      </div>

      {/* Drawer for Mobile Menu */}
      {/* <Drawer
  title="Menu"
  placement="right"
  onClose={handleDrawerToggle}
  visible={isDrawerOpen}
  className="md:hidden custom-drawer"
  bodyStyle={{
    padding: '1rem 0',
    maxHeight: 'calc(100vh - 120px)', // Limiting height to prevent overflow
    overflowY: 'auto', // Scroll for overflowing content
  }}
  headerStyle={{
    background: 'linear-gradient(90deg, #f5af19 0%, #f12711 100%)',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  }}
>
  <Menu mode="vertical" className="custom-menu text-lg">
    {['/', '/about-company', '/products', '/new-launches', '/factory', '/contact'].map((path, index) => (
      <Menu.Item key={index + 1} className="custom-menu-item">
        <Link to={path} onClick={handleDrawerToggle} className="drawer-link">
          {path === '/' ? 'Home' : path.split('/')[1].replace('-', ' ')}
        </Link>
      </Menu.Item>
    ))}
  </Menu>

  <div className="social-icons flex space-x-4 mt-6 justify-center">
    {[
      { href: "https://facebook.com", icon: <FacebookOutlined className="text-2xl hover:text-blue-600 transition duration-300" /> },
      { href: "https://twitter.com", icon: <TwitterOutlined className="text-2xl hover:text-blue-400 transition duration-300" /> },
      { href: "https://instagram.com", icon: <InstagramOutlined className="text-2xl hover:text-pink-600 transition duration-300" /> },
    ].map((social, index) => (
      <a key={index} href={social.href} target="_blank" rel="noreferrer" className="social-link">
        {social.icon}
      </a>
    ))}
  </div>
</Drawer> */}
<Drawer
  placement="right"
  onClose={handleDrawerToggle}
  visible={isDrawerOpen}
  className="md:hidden custom-drawer"
  bodyStyle={{
    padding: '1rem 0',
    maxHeight: 'calc(100vh - 120px)', // Limiting height to prevent overflow
    overflowY: 'auto', // Scroll for overflowing content
    backgroundColor: '#fafafa', // Soft background color
  }}
  headerStyle={{
    background: '#f5f5f5', // Solid background color
    color: '#333', // Darker text color for contrast
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.5rem',
  }}
>
  <div className="flex justify-center items-center mb-4">
    <img src="/logo1.svg" alt="Logo" className="h-10" /> {/* Logo image */}
  </div>
  
  <Menu mode="vertical" className="custom-menu text-lg">
    {['/', '/about-company', '/products', '/new-launches', '/factory', '/contact'].map((path, index) => (
      <Menu.Item key={index + 1} className="custom-menu-item">
        <Link
          to={path}
          onClick={handleDrawerToggle}
          className="block py-2 px-4 rounded"
        >
          {path === '/' ? 'Home' : path.split('/')[1].replace('-', ' ')}
        </Link>
      </Menu.Item>
    ))}
  </Menu>

  <div className="social-icons flex space-x-6 mt-8 justify-center">
    {[
      { href: "https://facebook.com", icon: <FacebookOutlined className="text-2xl text-pink-600" /> },
      { href: "https://twitter.com", icon: <TwitterOutlined className="text-2xl text-pink-600" /> },
      { href: "https://instagram.com", icon: <InstagramOutlined className="text-2xl text-pink-600" /> },
    ].map((social, index) => (
      <a
        key={index}
        href={social.href}
        target="_blank"
        rel="noreferrer"
        className="social-link"
      >
        {social.icon}
      </a>
    ))}
  </div>
</Drawer>







    </div>
  );
};

export default Navbar;

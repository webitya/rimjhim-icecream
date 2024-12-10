import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons'; // Importing Ant Design icons
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Social Media Links */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined className="social-icon" />
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined className="social-icon" />
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined className="social-icon" />
            </Link>
            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="social-icon" />
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p>© 2024 Rimjhim Ice Cream. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

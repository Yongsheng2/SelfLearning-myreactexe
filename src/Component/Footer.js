import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='des'>
        <div className="des-column">
          <h4>OUR POLICIES</h4>
          <ul>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="des-column">
          <h4>Contact Us</h4>
          <p>
            <i className="fas fa-phone"></i>
            <a href="tel:+60123456789"> +60123456789</a>
          </p>
          <p>Loft Furniture Store</p>
          <h4>Follow us</h4>
          <div className="des-social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <footer className="py-3">
        <Container className="text-center">
          <p>&copy; {year} Loft. All rights reserved.</p>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;

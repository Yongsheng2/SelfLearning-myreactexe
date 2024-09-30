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
    <footer className="py-3">
      <Container className="text-center">
        <p>&copy; {year} My Web. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;

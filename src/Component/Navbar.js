import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';

const NavigationBar = () => {
  const [navbarBackground, setNavbarBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBackground(true); 
    } else {
      setNavbarBackground(false); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`navbar ${navbarBackground ? 'navbar-scroll' : ''}`}>
      <Container>
        <Navbar.Brand href="#">Loft.</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse id="NavCollapse">
          <Nav className="Nav">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product">
              <Nav.Link>Product</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

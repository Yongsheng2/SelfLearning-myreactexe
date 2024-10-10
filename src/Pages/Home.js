import React, { useState, useEffect } from 'react';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

import office from '../assets/office-category.jpg';
import bedroom from '../assets/bedroom-category.jpg';
import living from '../assets/living-category.jpeg';
import dining from '../assets/dining-category.jpg';
import product1 from '../assets/topitem.jpg';
import product2 from '../assets/topitem2.jpg';
import product3 from '../assets/topitem3.jpeg';
import firstBrand from '../assets/first-brand.jpg';
import secBrand from '../assets/sec-brand.jpg';
import thirdBrand from '../assets/third-brand.jpeg'

const Home = (props) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  const brandImages = [firstBrand, secBrand, thirdBrand];
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentBrandIndex((prevIndex) => (prevIndex + 1) % brandImages.length);
    }, 3000);
    return () => clearInterval(autoSlide);
  }, [brandImages.length]);

  const selectBrand = (index) => {
    setCurrentBrandIndex(index);
  };

  return (
    <div>
      <div className="welcome-section">
        <h1>Welcome to the Loft, {props.username}.</h1>
      </div>

      <div className="category">
        <h2>Category</h2>
        <Container>
          <div className="category-container">
            <div
              className={`category-item ${selectedCategory === 'Office' ? 'selected' : ''}`}
              onClick={() => handleCategoryClick('Office')}
            >
              <img src={office} alt="Office" className="category-image" />
              <p>Office</p>
            </div>

            <div
              className={`category-item ${selectedCategory === 'Bedroom' ? 'selected' : ''}`}
              onClick={() => handleCategoryClick('Bedroom')}
            >
              <img src={bedroom} alt="Bedroom" className="category-image" />
              <p>Bedroom</p>
            </div>

            <div
              className={`category-item ${selectedCategory === 'Living' ? 'selected' : ''}`}
              onClick={() => handleCategoryClick('Living')}
            >
              <img src={living} alt="Living" className="category-image" />
              <p>Living</p>
            </div>

            <div
              className={`category-item ${selectedCategory === 'Dining' ? 'selected' : ''}`}
              onClick={() => handleCategoryClick('Dining')}
            >
              <img src={dining} alt="Dining" className="category-image" />
              <p>Dining</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="top-product">
        <h2>Top Products</h2>
        <p>Explore a wide range of quality furniture to beautify your home.</p>
        <Container>
          <Row>
            <Col md={4}>
              <Card ref={ref1} className={`product-card ${inView1 ? 'fly-in' : ''}`}>
                <Card.Img variant="top" src={product1} />
                <Card.Body>
                  <Card.Title>Modern Sofa</Card.Title>
                  <Card.Text>Comfortable and stylish sofa, perfect for any living room.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card ref={ref2} className={`product-card ${inView2 ? 'fly-in' : ''}`}>
                <Card.Img variant="top" src={product2} />
                <Card.Body>
                  <Card.Title>Wooden Dining Table</Card.Title>
                  <Card.Text>A solid wood dining table, perfect for family gatherings.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card ref={ref3} className={`product-card ${inView3 ? 'fly-in' : ''}`}>
                <Card.Img variant="top" src={product3} />
                <Card.Body>
                  <Card.Title>Luxury Bed</Card.Title>
                  <Card.Text>Experience ultimate comfort with our luxury bed designs.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="brand">
        <h2>Our Brands</h2>
        <div className="brand-carousel">
          <div className="brand-banner">
            <img src={brandImages[currentBrandIndex]} alt="Brand" className="brand-image" />
          </div>

          <div className="brand-buttons">
            {brandImages.map((_, index) => (
              <button
                key={index}
                className={index === currentBrandIndex ? 'active' : ''}
                onClick={() => selectBrand(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import './Home.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';

import product1 from '../assets/topitem.jpg';
import product2 from '../assets/topitem2.jpg';
import product3 from '../assets/topitem3.jpeg';
import office from '../assets/office-category.jpg';
import bedroom from '../assets/bedroom-category.jpg';
import living from '../assets/living-category.jpeg';
import dining from '../assets/dining-category.jpg';

const Home = (props) => {

  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <div>
      <div className="welcome-section">
        <h1>Welcome to the Loft, {props.username}.</h1>
      </div>

      <div className="category">
        <h2>Category</h2>
        <Container>
          <div className="category-container">
            {/* Category 1: Office */}
            <div className="category-item">
              <img src={office} alt="Office" className="category-image" />
              <p>Office</p>
            </div>

            {/* Category 2: Bedroom */}
            <div className="category-item">
              <img src={bedroom} alt="Bedroom" className="category-image" />
              <p>Bedroom</p>
            </div>

            {/* Category 3: Living */}
            <div className="category-item">
              <img src={living} alt="Living" className="category-image" />
              <p>Living</p>
            </div>

            {/* Category 4: Dining */}
            <div className="category-item">
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
        <h2>Our Services</h2>
        <p>We offer custom furniture design and delivery services.</p>
      </div>
    </div>
  );
};

export default Home;

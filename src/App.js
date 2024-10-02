import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  const username = 'Yong Sheng';

  return (
    <div className="App">
      <Router><NavigationBar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home  username={username} />} /> 
            <Route path="/about" element={<About />} /> 
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </div>
        <Footer /></Router>

    </div>
  );
}

export default App;

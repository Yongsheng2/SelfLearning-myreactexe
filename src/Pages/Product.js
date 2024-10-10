import React, { useState } from 'react'
import './Product.css'

import productone from '../assets/product1.png';
import productwo from '../assets/product2.png';
import productthree from '../assets/product3.png';
import productfour from '../assets/product4.png';
import productfive from '../assets/product5.png';
import productsix from '../assets/product6.png';

const Product = () => {
  const [viewStyle, setViewStyle] = useState('grid');
  const products = [
    { id: 1, name: "One", price: 325, image: productone, status: "SALE" },
    { id: 2, name: "Two", price: 325, image: productwo, status: "SALE" },
    { id: 3, name: "Three", price: 325, image: productthree, status: "SALE" },
    { id: 4, name: "Four", price: 325, image: productfour, status: "SALE" },
    { id: 5, name: "Five", price: 325, image: productfive, status: "SALE" },
    { id: 6, name: "Six", price: 325, image: productsix, status: "SALE" },
  ];

  return (
    <div>
      <div className="topheader">
        <h1>Products</h1>
      </div>

      <div className="product">
        <div className="view-options">
          <button
            className={`view-button ${viewStyle === 'grid' ? 'active' : ''}`}
            onClick={() => setViewStyle('grid')}
          >
            <i className="fas fa-th-large"></i>
          </button>
          <button
            className={`view-button ${viewStyle === 'list' ? 'active' : ''}`}
            onClick={() => setViewStyle('list')}
          >
            <i className="fas fa-list"></i>
          </button>
        </div>

        <div className={`products-container ${viewStyle}`}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.status && <div className="product-status">{product.status}</div>}
              </div>
              <div className="product-info">
                <h4>{product.name}</h4>
                <p className="price">RM{product.price}</p>
              </div>
            </div>
          ))}
        </div></div>


    </div>
  )
}

export default Product

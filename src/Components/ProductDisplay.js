import React from 'react';
import categories from './data/Category';
import ProductData from './data/ProductData';
import './ProductDisplay.css';

const ProductDisplay = () => {
  return (
    <div className="product-display-container">
      <div className="category-tabs">
        {categories.map((category, index) => (
          <div className="category-tab" key={index}>{category}</div>
        ))}
      </div>
      <div className="sorting-bar">
        <div className="sort-option">
          <label>Sort by Price</label>
          <div className="sort-select">
            <div>Low to High</div>
            <div>High to Low</div>
          </div>
        </div>
        <div className="sort-option">
          <label>Sort by Name</label>
          <div className="sort-select">
            <div>A to Z</div>
            <div>Z to A</div>
          </div>
        </div>
      </div>
      <div className="product-list">
        {ProductData.map(product => (
          <div className="product-item" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
              <h2>{product.name}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDisplay;

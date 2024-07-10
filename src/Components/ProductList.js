import React from 'react';
import ProductData from './data/ProductData';
import './ProductList.css';

const ProductList = () => {
  return (
    <div className="product-list-container">
      {ProductData.map(product => (
        <div className="product-item" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;


  
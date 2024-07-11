import React from 'react';
import './Products.css'; // Import your CSS file
import ProductDisplay from '../Components/ProductDisplay';


function Products() {
  return (
    <div className="products-container">
      <h1 className="products-heading">Sản Phẩm</h1>
        <ProductDisplay />
    </div>
  );
}

export default Products;

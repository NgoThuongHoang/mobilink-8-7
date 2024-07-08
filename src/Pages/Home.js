import React from 'react';
import FormContact from '../Components/FormContact';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Chào mừng đến với Công Ty ABC</h1>
          <p>Chúng tôi cung cấp các sản phẩm chất lượng cao với dịch vụ tuyệt vời.</p>
        </div>
      </section>
      <section className="about-company">
        <h2>Về chúng tôi</h2>
        <p>Công ty ABC được thành lập vào năm...</p>
      </section>
      <section className="featured-products">
        <h2>Sản phẩm nổi bật</h2>
        <div className="product-list">
          {/* Thêm các sản phẩm mẫu */}
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 1" />
            <h3>Sản phẩm 1</h3>
            <p>Mô tả sản phẩm 1</p>
            <span>Giá: $100</span>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 2" />
            <h3>Sản phẩm 2</h3>
            <p>Mô tả sản phẩm 2</p>
            <span>Giá: $200</span>
          </div>
          <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product 3" />
            <h3>Sản phẩm 3</h3>
            <p>Mô tả sản phẩm 3</p>
            <span>Giá: $300</span>
          </div>
        </div>
      </section>
      <FormContact />
    </div>
  );
}

export default Home;

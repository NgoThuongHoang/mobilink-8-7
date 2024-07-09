import React from 'react';
import FormContact from '../Components/FormContact';
import './Home.css';
import ProductList from '../Components/ProductList';

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
        <ProductList/>
        </div>
      </section>
      <FormContact />
    </div>
  );
}

export default Home;

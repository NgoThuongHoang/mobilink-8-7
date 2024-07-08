import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-column">
          <h3>Thông tin công ty</h3>
          <p>Công ty ABC là...</p>
        </div>
        <div className="footer-column">
          <h3>Liên kết</h3>
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/about">Giới thiệu</a></li>
            <li><a href="/products">Sản phẩm</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Chính sách bán hàng</h3>
          <ul>
            <li><a href="/">Chính sách 1</a></li>
            <li><a href="/">Chính sách 2</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Thông tin liên lạc</h3>
          <p>Email: contact@abc.com</p>
          <p>Phone: +84 123 456 789</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
    <div className="container">
      <h1 className="logo">Mobilink</h1>
      <nav>
          <ul className="nav-links">
            <li><Link to="/">Trang chủ</Link></li>
            <li><Link to="/about">Giới thiệu</Link></li>
            <li><Link to="/products">Sản phẩm</Link></li>
            <li><Link to="/news">Tin tức</Link></li>
            <li><Link to="/careers">Tuyển dụng</Link></li>
            <li><Link to="/contact">Liên hệ</Link></li>
          </ul>
          <input type="text" placeholder="Tìm kiếm..." className="search-bar" />
        </nav>
    </div>
    </header>
  );
}

export default Header;

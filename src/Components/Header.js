import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logoImg from '../Images/logo.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const cartItemCount = 5; // Thay số này bằng số lượng món hàng thực tế trong giỏ của bạn
  return (
    <header className="header">
      <Link to="/">
        <img src={logoImg} alt="Mobilink Logo" className="logo" />
      </Link>
      <nav className="navigation">
        <ul className="nav-links">
          <li><Link to="/">TRANG CHỦ</Link></li>
          <li><Link to="/about">GIỚI THIỆU</Link></li>
          <li><Link to="/products">SẢN PHẨM</Link></li>
          <li><Link to="/news">TIN TỨC</Link></li>
          <li><Link to="/careers">TUYỂN DỤNG</Link></li>
          <li><Link to="/contact">LIÊN HỆ</Link></li>
        </ul>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="Tìm kiếm..." className="search-input" />
        <button className="search-button">Tìm</button>
      </div>
      <div className="cart-container">
        <Link to="/cart">
          <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />    
          <span className="cart-count">{cartItemCount}</span>      
        </Link>
      </div>
    </header>
  );
}

export default Header;

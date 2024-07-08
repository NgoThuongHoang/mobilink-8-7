// File: FormContact.js

import React, { useState } from 'react';
import './FormContact.css';

const FormContact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend or show a success message)
    console.log(formData);
    // Reset form fields
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Đăng ký tư vấn</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName">Họ và tên <span className="required">*</span></label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email <span className="required">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại <span className="required">*</span></label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Nội dung <span className="required">*</span></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Gửi đi</button>
      </form>
    </div>
  );
};

export default FormContact;

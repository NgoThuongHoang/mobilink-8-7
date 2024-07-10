import React from 'react';
import './News.css';

const newsItems = [
  {
    id: 1,
    title: 'Giá bình ắc quy xe Wave, khi nào cần thay bình ắc quy xe?',
    imageUrl: '/img/ac_quy_xe_wave.jpg', // Đường dẫn từ thư mục public
    date: '05/07/2024',
  },
  {
    id: 2,
    title: 'Cách thay nhớt lap xe Vision tại nhà đơn giản',
    imageUrl: '/img/kiem_tra_dau_nhot.jpg', // Đường dẫn từ thư mục public
    date: '05/07/2024',
  },
  {
    id: 3,
    title: 'Làm sao để kiểm tra dầu nhớt nhập khẩu chính hãng, tránh hàng giả?',
    imageUrl: '/img/thay_nhot_vision.jpg', // Đường dẫn từ thư mục public
    date: '05/07/2024',
  },
];

const News = () => {
  return (
    <div className="news-page">
      <div className="news-content">
        <div className="news-container">
          {newsItems.map((post) => (
            <div key={post.id} className="news-item">
              <img src={`${process.env.PUBLIC_URL}${post.imageUrl}`} alt={post.title} className="news-image" />
              <div className="news-details">
                <h2>{post.title}</h2>
                <span className="post-date">{post.date}</span>
              </div>
            </div>
          ))}          
        </div>
      </div>
      <div id="sidebar-right" className="widget-area">    
        <div className="widget themetechmount_widget_recent_entries">
          <h3 className="widget-title">Bài viết mới nhất</h3>
          <ul className="tm-recent-post-list">
            <li className="tm-recent-post-list-li">
              <><img src={`${process.env.PUBLIC_URL}/img/ac_quy_xe_wave.jpg`} alt="Bài viết 1" /></>
              <div className="sidebar-title">
                <>Giá bình ắc quy xe Wave, khi nào cần thay bình ắc quy xe?</>
                <span className="post-date">05/07/2024</span>
              </div>
            </li>
            <li className="tm-recent-post-list-li">
              <><img src={`${process.env.PUBLIC_URL}/img/thay_nhot_vision.jpg`} alt="Bài viết 2" /></>
              <div className="sidebar-title">
                <>Cách thay nhớt lap xe Vision tại nhà đơn giản</>
                <span className="post-date">04/07/2024</span>
              </div>
            </li>
            <li className="tm-recent-post-list-li">
              <><img src={`${process.env.PUBLIC_URL}/img/kiem_tra_dau_nhot.jpg`} alt="Bài viết 3" /></>
              <div className="sidebar-title">
                <>Làm sao để kiểm tra dầu nhớt nhập khẩu chính hãng, tránh hàng giả?</>
                <span className="post-date">04/07/2024</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default News;

import React from 'react';
import FormContact from '../Components/FormContact';

function Contact() {
  return (
    <div>  
      <div className="content-wrapper">
        <div className="text-container">
          <h2>Liên hệ Công ty Dầu Nhờn DND</h2>
          <p>Nếu bạn có bất kì câu hỏi hoặc thắc mắc nào liên quan tới việc sản xuất, gia công, 
            chính sách nhập sỉ dầu nhớt, mỡ bôi trơn, hãy để lại thông tin bên dưới.
            Đội ngũ chuyên gia hóa dầu của IndoPetrol sẽ phản hồi bạn trong thời gian sớm nhất.</p>
         
             <div className="footer-column-content">
              <h3>Liên Hệ Chúng Tôi</h3>
              <p>Hỗ trợ và tư vấn mở Đại Lý Dầu Nhớt trên toàn quốc</p>
              <p>Hỗ trợ và tư vấn Gia công Dầu Nhớt thương hiệu riêng</p>
              <p>Giờ làm việc: T2-T6 (08:00-17), T7 (08:00-11:30)</p>
              <p>Hotline: 0913 936 929 / 0913 977 959</p>
              <p>Email: infor@indopetrol.vn</p>
            </div> 

            <div className="footer-column-content">
              <h3>Hỗ Trợ</h3>
              <p>Hỗ trợ và tư vấn mở Đại Lý Dầu Nhớt trên toàn quốc</p>
              <p>Hỗ trợ và tư vấn Gia công Dầu Nhớt thương hiệu riêng</p>
              <p>Giờ làm việc: T2-T6 (08:00-17), T7 (08:00-11:30)</p>
              <p>Hotline: 0913 936 929 / 0913 977 959</p>
              <p>Email: infor@indopetrol.vn</p>
            </div>

            <div className="footer-column-content">
              <h3>Số Điện Thoại</h3>
              <p>Liên hệ 0901353363 - 0363194777</p>
              <p>Email: congnghednd@gmail.com</p>
              <p>Zalo OA: ...</p>
            </div>

            <div className="footer-column-content">
              <h3>Địa chỉ</h3>
              <p>Số 55, Đường N3, KDC Phú Gia 1, Trảng Dài, Biên Hòa, Đồng Nai</p>       
            </div>
         </div>
      </div>
      <FormContact/>
    </div>
  );
}

export default Contact;

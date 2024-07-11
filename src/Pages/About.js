import React from "react";
import "./About.css"; // Import CSS

function About() {
  return (
    <div className="about-container">
      {/* Mẫu */}
      <div className="content-wrapper">
        <div className="text-container">
          <dl>
            Định hướng mà DND hướng đến là duy trì chất lượng sản phẩm cũng như
            dịch vụ tốt nhất để mang đến cho nhà bán lẻ, các cửa hàng sửa
            chữa,và khách hàng online. Ngoài ra, chúng tôi vẫn luôn tiếp tục tìm
            kiếm khách hàng mới, cũng như mở rộng danh mục sản phẩm nhằm tiếp
            tục mang đến những sản phẩm sang tạo nhất cho người tiêu dùng.
          </dl>
          <div className="inline-text"></div>
        </div>
        <div className="image-container">
          <img src="../anh1.jpg" alt="Hình ảnh làm việc tại công ty" />
          <p className="image-caption">Hình ảnh làm việc tại công ty</p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="image-container">
          <img
            src="../giới thiệu - 1.JPG"
            alt="Hình ảnh làm việc tại công ty"
          />
          <p className="image-caption">Hình ảnh Thư ngỏ</p>
        </div>
        <div className="image-container">
          <img
            src="../giới thiệu - 2.JPG"
            alt="Hình ảnh làm việc tại công ty"
          />
          <p className="image-caption">Hình ảnh GIẤY CHỨNG NHẬN</p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="text-container">
          <ul>
            <h3>DẦU ĐỘNG CƠ DÙNG CHO XE TẢI VÀ XE CƠ GIỚI NẶNG</h3>
            <dt>
              Là dầu nhớt đa cấp được pha chế với dầu gốc chất lượng cao và dầu
              gốc Etro công nghệ tiên tiến giúp động cơ sạch hơn, vận hành an
              toàn hơn. (Sử dụng phụ gia tăng chỉ số độ nhớt chống trượt cắt số
              1 thế giới tại USA)
            </dt>
            <dt>Ưu điểm</dt>
            <dt>- Giảm mài mòn động cơ giúp động cơ hoạt động bền hơn.</dt>
            <dt>
              - Ngăn ngừa đóng cặn pít tông, thích hợp cho dòng xe Turbo".
            </dt>
            <dt> Thành phần: Dầu gốc (Etro) và phụ gia tổng hợp.</dt>
            <dt>
              - Hướng dẫn sử dụng: Dùng cho các loại xe tải, ô tô, tàu đánh cá
              sử dụng động cơ diesel tăng áp và không tăng áp, cũng dùng được
              cho động cơ xăng.
            </dt>
            <dt>- Hướng dẫn bảo quản: Tồn trữ nơi khô ráo, thoáng mát.</dt>
            <dt>An toàn:</dt>
            <dt>
              - Không dùng bao bì của sản phẩm này để chứa nhiên liệu hoặc dung
              môi vì có thể gây cháy.
            </dt>
            <dt>
              - Bảo vệ môi trường: thải bỏ dầu đã qua sử dụng đúng quy định.
            </dt>
          </ul>
          <div className="inline-text"></div>
        </div>
        <div className="image-container">
          <img src="../Hinhanh 1.png" alt="Hình ảnh làm việc tại công ty" />
          <p className="image-caption">Hình ảnh GIẤY CHỨNG NHẬN</p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="text-container">
          <ul>
            <h3>DẦU ĐỘNG CƠ DÙNG CHO TÀU BIỂN</h3>
            <dt>
              Dầu động cơ dùng cho tàu biển là dầu nhớt đa cấp được pha chế với
              dầu gốc chất lượng cao và dầu gốc Etro công nghệ tiên tiến giúp
              động cơ sạch hơn, vận hành an toàn hơn. (Sử dụng phụ gia tăng chỉ
              số độ nhớt chống trượt cắt số 1 thế giới tại USA){" "}
            </dt>
            <dt>Ưu điểm:</dt>
            <dt>- Giảm mài mòn động cơ giúp động cơ hoạt động bền hơn.</dt>
            <dt>- Ngăn ngừa đóng cặn pít tông, thích hợp cho động cơ Turbo.</dt>
            <dt>- Thành phần: Dầu gốc (Etro") và phụ gia tổng hợp.</dt>
            <dt>
              - Hướng dẫn sử dụng: Dùng cho các loại tàu biển, tàu đánh cá sử
              dụng động cơ diesel tăng áp và không tăng áp, cũng dùng được cho
              động cơ xăng.
            </dt>
            <dt>- Hướng dẫn bảo quản: Tồn trữ nơi khô ráo, thoáng mát.</dt>
            <dt> An toàn:</dt>
            <dt>
              - Không dùng bao bì của sản phẩm này để chứa nhiên liệu hoặc dung
              môi vì có thể gây cháy.
            </dt>
            <dt>
              - Bảo vệ môi trường: thải bỏ dầu đã qua sử dụng đúng quy định.
            </dt>
          </ul>
          <div className="inline-text"></div>
        </div>
        <div className="image-container">
          <img src="../Hinhanh 2.png" alt="Hình ảnh làm việc tại công ty" />
          <p className="image-caption">Hình ảnh GIẤY CHỨNG NHẬN</p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="text-container">
          <ul>
            <h3>DẦU THỦY LỰC</h3>
            <dt>
              Dầu thủy lực được pha chế với dầu gốc chất lượng cao và công nghệ
              tiên tiến.
            </dt>
            <dt>Ưu điểm vượt trội của dầu thủy lực:</dt>
            <dt>
              - Ổn định nhiệt và chống oxy hóa tốt, giúp hệ thống hoạt động tin
              cậy, kéo dài tuổi thọ của dầu trong điều kiện hoạt động khắc
              nghiệt.
            </dt>
            <dt>
              - Ngăn ngừa tích tụ cặn, giữ sạch hệ thống và giảm tần suất lọc
              dầu.
            </dt>
            <dt>
              - Chống mài mòn tốt, bảo vệ bơm thủy lực, giảm thời gian dừng máy
              và giảm chi phí vận hành.
            </dt>
            <dt>
              - Lọc tuyệt hảo ngay cả khi nhiễm nước kéo dài thời gian sử dụng
              lọc.
            </dt>
            <dt>
              - Tách nước tuyệt hảo, kéo dài thời gian sử dụng dầu, giảm thời
              gian dừng máy.
            </dt>
            <dt> Thành phần: Dầu gốc và phụ gia đặc biệt.</dt>
            <dt>
              - Hướng dẫn sử dụng: Dùng cho các loại xe máy công trình, máy móc
              công nghiệp...
            </dt>
            <dt>- Hướng dẫn bảo quản: Tồn trữ nơi khô ráo, thoáng mát.</dt>
            <dt> An toàn:</dt>
            <dt>
              - Không dùng bao bì của sản phẩm này để chứa nhiên liệu hoặc dung
              môi vì có thể gây cháy.
            </dt>
            <dt>
              - Bảo vệ môi trường: thải bỏ dầu đã qua sử dụng đúng quy định.
            </dt>
          </ul>
          <div className="inline-text"></div>
        </div>
        <div className="image-container">
          <img src="../Hinhanh 3.png" alt="Hình ảnh làm việc tại công ty" />
          <p className="image-caption">Hình ảnh GIẤY CHỨNG NHẬN</p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="text-container">
          <ul>
            <h3>DẦU CẦU - DẦU HỘP SỐ</h3>
            <dt>
              Dầu Cầu - Dầu Hộp Số Là loại dầu nhờn sử dụng bôi trơn các loại
              bánh răng, hộp số, cầu sau của ô tô, bánh răng truyền động phù hợp
              với tiêu chuẩn API: GL-5
            </dt>
            <dt> Ưu điểm vượt trội:</dt>
            <dt>- Chống mài mòn.</dt>
            <dt>- Chất lượng dầu bền vững ở nhiệt độ cao.</dt>
            <dt>- Chống rỉ tốt và chống tạo bọt hoàn hảo.</dt>
            <dt> Thành phần: Dầu gốc khoáng và phụ gia đặc biệt</dt>
            <dt>
              - Hướng dẫn sử dụng: Dùng cho các loại hộp số, cầu sau của xe
              khách, xe tải yêu cầu chất lượng theo tiêu chuẩn API: GL - 5
            </dt>
            <dt>- Hướng dẫn bảo quản: Tồn trữ nơi khô ráo, thoáng mát.</dt>
            <dt> An toàn:</dt>
            <dt>
              - Không dùng bao bì của sản phẩm này để chứa nhiên liệu hoặc dung
              môi vì có thể gây cháy.
            </dt>
            <dt>
              - Bảo vệ môi trường: thải bỏ dầu đã qua sử dụng đúng quy định.
            </dt>
          </ul>
          <div className="inline-text"></div>
        </div>
        <div className="image-container">
          <img src="../Hinhanh 4.png" alt="Hình ảnh làm việc tại công ty" />
          <p className="image-caption">Hình ảnh GIẤY CHỨNG NHẬN</p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="text-container">
          <ul>
            <h3>DẦU ĐỘNG CƠ XE GẮN MÁY MOTORCYCLE LUBRICANTS</h3>
            <dt>Công dụng:</dt>
            <dt>
              - Làm sạch, làm mát, bảo vệ tốt động cơ, tiết kiệm nhiên liệu dù
              máy hoạt động trong các điều kiện khắc nghiệt.
            </dt>
            <dt>
              - Chống rỉ, chống tạo bọt, chống ăn mòn và chống mài mòn tăng tuổi
              thọ động cơ.
            </dt>
            <dt>
              - Nâng cao khả năng bảo vệ động cơ. Tiêu chuẩn kỹ thuật: - Thành
              phần: Dầu gốc bán tổng hợp và các phụ gia. - Hướng dẫn sử dụng:
              Dùng cho động cơ xe gắn máy 4 thì.
            </dt>
            <dt>
              - Hướng dẫn bảo quản: Tồn trữ dưới mái che, nơi khô ráo, thoáng
              mát và nhiệt độ dưới 60°C
            </dt>
            <dt>An toàn:</dt>
            <dt>- Tránh tiếp xúc thường xuyên với dầu nhờn.</dt>
            <dt>- Thải bỏ dầu nhờn đúng nơi quy định để bảo vệ môi trường.</dt>
          </ul>
          <div className="inline-text"></div>
        </div>
        <div className="image-container">
          <img src="../Hinhanh 5.png" alt="Hình ảnh làm việc tại công ty" />
          <p className="image-caption">Hình ảnh GIẤY CHỨNG NHẬN</p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="text-container">
          <ul>
            <h3>DẦU BYEMOBILENIK TURBIN</h3>
            <dt>
              Dầu BVPMOBILINK Turbin là dầu turbin cao cấp sản xuất từ dầu gốc
              nhóm II chỉ số bão hòa là 100% bởi quá trìnhHydrocraking xúc tác
              dưới tác động của nhiệt độ. Tăng độ bền Oxi hóa và khả năng tách
              nước và lắng cặn tuyệt vời, kết hợp với phụ gia kháng lại quá
              trình phân cực.
            </dt>
            <dt>
              - Dầu BVPMOBILINK Turbin dùng để bôi trơn và làm mát các ổ đỡ và
              hộp số trong các Turbin hơi nước, Turbin khí, Turbin nước và các
              thiết bị phụ trợ như hệ thống điều khiển Turbin, hệ thống dầu làm
              kín, các khớp nối.
            </dt>
            <dt>
              - Với các tính năng siêu việt như vậy Dầu BVPMOBILINK Turbin... sẽ
              làm cho bạn yên tâm ngay cả quá trình thay đổi công nghệ mới nó
              đáp ứng nhu cầu cho một tương lai dài hạn.
            </dt>
            <dt>
              - Nó tương thích với các kim loại màu và ngay cả khi có các chi
              tiết bằng kim loại quý.
            </dt>
            <dt> Dầu BVPMOBILINK Turbin với các tính năng mở rộng:</dt>
            <dt>
              - Turbin khí và Turbin hơi nước có thể sử dụng chung một bể dầu.
            </dt>
            <dt>
              - Có thể sử dụng như một loại dầu thủy lực với các hệ thống thủy
              lực turbin và máy nén khí trục vít bởi nó tách khí và tách nước
              kháng thủy phân cực kỳ hoàn hảo.
            </dt>
          </ul>
          <div className="inline-text"></div>
        </div>
        <div className="image-container">
          <img src="../Hinhanh 6.png" alt="Hình ảnh làm việc tại công ty" />
          <p className="image-caption">Hình ảnh GIẤY CHỨNG NHẬN</p>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="text-container">
          <ul>
            <h3>DẦU BÁNH RĂNG CÔNG NGHIỆP</h3>
            <dt>
              DẦU bánh răng công nghiệp là loại dầu nhờn sử dụng bôi trơn các
              loại bánh răng, các nhà máy xi măng, hộp số, bánh răng chuyển động
              phù hợp với tiêu chuẩn API: GL-5
            </dt>
            <dt> Ưu điểm vượt trội:</dt>
            <dt>- Chống mài mòn</dt>
            <dt>- Chất lượng dầu bền vững ở nhiệt độ cao</dt>
            <dt>- Chống rỉ tốt, chống tạo bọt hoàn hảo</dt>
            <dt> Thành phần: Dầu gốc bán tổng hợp và phụ gia</dt>
            <dt> Hướng dẫn sử dụng:</dt>
            <dt>
              - Dùng cho các hộp số, cầu sau của xe khách, xe tải, hệ thống bánh
              răng, yêu cầu chất lượng theo tiêu chuẩn API: GL - 5
            </dt>
            <dt> Hướng dẫn bảo quản: Tồn trữ nơi khô ráo, thoáng mát.</dt>
            <dt> An toàn:</dt>
            <dt>
              - Không dùng bao bì của sản phẩm này để chứa nhiên liệu hoặc dung
              môi vì có thể gây cháy.{" "}
            </dt>
            <dt>
              - Bảo vệ môi trường: thải bỏ dầu đã qua sử dụng đúng quy định.
            </dt>
          </ul>

          <div className="inline-text"></div>
        </div>
        <div className="image-container">
          <img src="../Hinhanh 7.png" alt="Hình ảnh làm việc tại công ty" />
          <p className="image-caption">Hình ảnh GIẤY CHỨNG NHẬN</p>
        </div>
      </div>

      <div className="centered-text">
        <p>................</p>
      </div>
    </div>
  );
}

export default About;

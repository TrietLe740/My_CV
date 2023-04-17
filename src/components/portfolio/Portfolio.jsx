import React from "react";
import "./portfolio.css";
import P from "../../assets/P.jpg";
import WEB1 from "../../assets/porfolio_web_proj1.png";
import WEB2 from "../../assets/porfolio_web_proj2.png";
import WEB3 from "../../assets/porfolio_web_proj3.png";
import ACT1 from "../../assets/Activity1.jpg";
import ACT2 from "../../assets/Activity2.jpg";
import ACT3 from "../../assets/Activity3.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* Item 1 */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WEB1} alt="" />
          </div>
          <h3 className="portfolio__item-title">Website Fast Food</h3>
          <p>
            Features: Show products, add cart, edit cart, remove cart, payment
            <br />
            Technologies: JavaScript, Bootstrap, JQuery
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TrietLe740/Fun-Food-website"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://trietle740.github.io/Fun-Food-website"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Item 2 */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WEB2} alt="" />
          </div>
          <h3 className="portfolio__item-title">Website VN Mart</h3>
          <p>
            Features: Show products, add cart, edit cart, remove cart, payment,
            search products, create new product, update product, login, register
            <br />
            Technologies: PHP, Google/apiclient, Composer, MySQL, Bootstrap...
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/vinh466/CT275-VNMart"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://github.com/vinh466/CT275-VNMart"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Item 3 */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={WEB3} alt="" />
          </div>
          <h3 className="portfolio__item-title">Website Apple Store</h3>
          <p>
            Features: Show products, add cart, edit cart, remove cart, payment,
            search products, create new product, update product, hide product
            <br />
            Technologies: MongoDB, ExpressJS, VueJS, NodeJS, Vite, Boostrap,...
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/TrietLe740/AppleStore"
              className="btn"
              target="blank"
            >
              Github
            </a>
            <a
              href="https://github.com/TrietLe740/AppleStore"
              className="btn btn-primary"
              target="blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        {/* Item 4 */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ACT1} alt="" />
          </div>
          <h3 className="portfolio__item-title">
            Activity: Họp mặt Tân Sinh viên
          </h3>
          <p>
            Vào ngày 13/10/2022 tại phòng 107/C1 Khu II, trường Đại học Cần Thơ
            chương trình Họp mặt Tân sinh viên Khóa 48 của LCHSV Đồng Tháp đã
            diễn ra thành công tốt đẹp với sự tham gia của hơn 500 bạn Hội viên
            - Sinh viên...
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://www.facebook.com/CTU.lchsv.dt/videos/805028860827561"
              className="btn"
              target="blank"
            >
              View Video
            </a>
            <a
              href="https://yu.ctu.edu.vn/hsv/xay-dung-hoi/1892-lchsvdt-tk-hop-mat-tsv-k48-2022.html"
              className="btn btn-primary"
              target="blank"
            >
              Activity Summary
            </a>
          </div>
        </article>
        {/* Item 5 */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ACT2} alt="" />
          </div>
          <h3 className="portfolio__item-title">
            Activity: Sứ mệnh Người giữ lửa
          </h3>
          <p>
            Từ ngày 27/6/2022 đến 02/7/2022 tại phòng 108/C1, khu II trường Đại
            học Cần Thơ, LCHSV Đồng Tháp đã tổ chức lớp tập huấn kỹ năng Sứ mệnh
            Người giữ lửa 7 với sự tham gia của hơn 80 Học viên - Sinh viên
            trong đơn vị...
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://www.facebook.com/CTU.lchsv.dt/videos/380181697511770"
              className="btn"
              target="blank"
            >
              View Trailer
            </a>
            <a
              href="https://yu.ctu.edu.vn/hsv/xay-dung-hoi/1838-lchsvdt-tk-lop-th-smngl-7.html"
              className="btn btn-primary"
              target="blank"
            >
              Activity Summary
            </a>
          </div>
        </article>
        {/* Item 5 */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ACT3} alt="" />
          </div>
          <h3 className="portfolio__item-title">Activity: Tết biên cương</h3>
          <p>
            Trước thềm Tết Nguyên Đán năm 2023, vào 2 ngày 14-15/01/2023 LCHSV
            Đồng Tháp tại trường ĐH Cần Thơ phối hợp với LCHSV Đồng Tháp tại các
            trường ĐH Nam Cần Thơ và trường ĐH Y dược Cần Thơ tổ chức chiến dịch
            Tết biên cương...
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://www.facebook.com/CTU.lchsv.dt/videos/3419145188364790"
              className="btn"
              target="blank"
            >
              View Trailer
            </a>
            <a
              href="https://yu.ctu.edu.vn/hsv/sv5t/tinh-nguyen-tot/1964-lchsvdt-tk-hd-xuan-tn-2023.html"
              className="btn btn-primary"
              target="blank"
            >
              Activity Summary
            </a>
          </div>
        </article>
        {/* Item 6 */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={P} alt="" />
          </div>
          <h3 className="portfolio__item-title">Video Media Production</h3>
          <p>I make by Adobe Premire Pro, Adobe After Effect, CapCut</p>
          <div className="portfolio__item-cta">
            <a
              href="https://drive.google.com/drive/folders/1vgU-zknAx9OAf2o9Yusg9QS_wq6LEAUx?usp=share_link"
              target="blank"
              className="btn"
            >
              View Some Product
            </a>
          </div>
        </article>
        {/* Item 7 */}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={P} alt="" />
          </div>
          <h3 className="portfolio__item-title">Poster Product Design</h3>
          <p>
            I make poster, background,... by Adobe Photoshop, Adobe Illustator,
            PicArt, PowerPoint
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://drive.google.com/drive/folders/1QhBCPNa2JoSjaxTAxMXeFXd9h0jJkH1s?usp=sharing"
              className="btn"
              target="blank"
            >
              View Some Product
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

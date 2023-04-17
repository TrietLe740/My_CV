import React from "react";
import "./testimonials.css";
import AVT1 from "../../assets/avt1.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVT1,
    name: "Zịt Zàng Zui Zẻ",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit ducimus at voluptas sed. Atque asperiores autem omnis, libero iste adipisci ducimus nesciunt beatae fugit. Magnam beatae rerum blanditiis nulla.",
  },
  {
    avatar: AVT1,
    name: "Zịt Zàng Zui Zẻ 2",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit ducimus at voluptas sed. Atque asperiores autem omnis, libero iste adipisci ducimus nesciunt beatae fugit. Magnam beatae rerum blanditiis nulla.",
  },
  {
    avatar: AVT1,
    name: "Zịt Zàng Zui Zẻ 3",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum impedit ducimus at voluptas sed. Atque asperiores autem omnis, libero iste adipisci ducimus nesciunt beatae fugit. Magnam beatae rerum blanditiis nulla.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

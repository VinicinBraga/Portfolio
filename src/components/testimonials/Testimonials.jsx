import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    name: "Mia Wong",
    image: AVTR1,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ipsam corporis amet, voluptate error voluptates saepe minima alias. Fugiat impedit esse perferendis reiciendis pariatur dolores veritatis est assumenda corporis dolorem.",
  },
  {
    id: 2,
    name: "John Stone",
    image: AVTR2,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ipsam corporis amet, voluptate error voluptates saepe minima alias. Fugiat impedit esse perferendis reiciendis pariatur dolores veritatis est assumenda corporis dolorem.",
  },
  {
    id: 3,
    name: "Peter Stanbridge",
    image: AVTR3,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ipsam corporis amet, voluptate error voluptates saepe minima alias. Fugiat impedit esse perferendis reiciendis pariatur dolores veritatis est assumenda corporis dolorem.",
  },
  {
    id: 4,
    name: "Ponnappa Priya",
    image: AVTR4,
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque ipsam corporis amet, voluptate error voluptates saepe minima alias. Fugiat impedit esse perferendis reiciendis pariatur dolores veritatis est assumenda corporis dolorem.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, name, image, review }) => {
          return (
            <SwiperSlide className="testimonial" key={id}>
              <div className="client_avatar">
                <img src={image} alt={name} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;

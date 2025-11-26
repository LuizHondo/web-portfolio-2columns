import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slider({ homeProjects }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="swipper"
    >
      {homeProjects.map((homeProject, index) => (
        <SwiperSlide key={index} className="swipper__item">
          <img src={homeProject.url} alt={`Project ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;

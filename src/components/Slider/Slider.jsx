import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Slider({ homeProjects }) {
  console.log("Recebi:", homeProjects);

  if (!homeProjects) {
    return <p>Nada foi passado para homeProjects 🚨</p>;
  }

  if (!Array.isArray(homeProjects)) {
    return (
      <p>homeProjects NÃO é um array. Tipo recebido: {typeof homeProjects}</p>
    );
  }

  return (
    <Swiper className="swipper">
      {homeProjects.map((project, index) => (
        <SwiperSlide key={index}>
          <img src={project.url} alt={project.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { BiCertification } from "react-icons/bi";

const testimonial = [
  {
    message: "Desarrollo Web Fullstack con Java",
    name: "— TECSUP",
  },
  {
    message: "Desarrollo Web Fullstack",
    name: "— TECSUP",
  },
  {
    message: "UX/UI Designer: Diseño de Experiencias de Usuario",
    name: "— Toulouse Lautrec",
  },
  {
    message: "UX/UI Designer",
    name: "— CalArts/Coursera",
  },
  {
    message: "HTML + CSS + JS",
    name: "— Área 51 Training Center",
  },
  {
    message: "Marketing Digital y Analítica Web",
    name: "— Fundación Telefónica",
  },
  {
    message: "Diseño Digital",
    name: "— IPAD",
  },
];

const Testimonial = () => {
  return (
    <>
      <h2 className="h2">Cursos</h2>

      <Swiper
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full max-w-[300px] md:max-w-[520px] bg-tertiary/30 rounded-lg"
      >
        {testimonial.map((person, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex px-8 py-6 gap-8">
                <BiCertification className=" xl:flex text-8xl text-accent/20" />
                <div className="flex flex-col gap-2">
                  <p>{person.message}</p>
                  <p className="self-end text-accent font-semibold">
                    {person.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testimonial;

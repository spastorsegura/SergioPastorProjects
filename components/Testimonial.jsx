"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { ImQuotesLeft } from "react-icons/im";

const testimonial = [
  {
    message:
      "Trabajar con Sergio fue totalmente fluido. Captó la esencia de la marca desde el primer boceto y logró un diseño web moderno, rápido y funcional. Lo que más nos impresionó fue su atención al detalle y cómo convirtió nuestras ideas en una experiencia digital realmente profesional.",
    name: "— Julio Rojas, Director de Marketing en Kintu Studio",
  },
  {
    message:
      "Sergio se encargó del frontend de nuestro proyecto y el resultado superó las expectativas. Implementó animaciones fluidas, componentes reutilizables y una interfaz limpia que elevó la calidad del producto. Su capacidad de resolver problemas y proponer mejoras marca la diferencia.",
    name: "— Diego Hernández, CTO de NovaTech",
  },
  {
    message:
      "Necesitábamos una ilustración con estilo propio y Sergio logró exactamente lo que buscábamos. Fue rápido, profesional y muy creativo. Su versatilidad entre diseño, ilustración y desarrollo web lo convierte en un colaborador realmente completo.",
    name: "— Ana Beltrán, Product Designer en PULSO",
  },
];

const Testimonial = () => {
  return (
    <Swiper
      //   modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full max-w-[300px] md:max-w-[520px] bg-secondary rounded-lg"
    >
      {testimonial.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex px-8 py-6 gap-8">
              <ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
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
  );
};

export default Testimonial;

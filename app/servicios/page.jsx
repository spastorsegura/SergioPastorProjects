"use client";
import { motion } from "framer-motion";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { MdAdd } from "react-icons/md";

import { useCart } from "@/context/CartContext";
import { RiShoppingCartFill } from "react-icons/ri";
import Link from "next/link";
import { toast } from "sonner";

const services = [
  {
    id: "design-ui",
    icon: "/assets/services/design.svg",
    title: "Diseño de interfaces web",
    price: 1200,
  },
  {
    id: "frontend",
    icon: "/assets/services/frontend.svg",
    title: "Desarrollo frontend",
    price: 1800,
  },
  {
    id: "backend",
    icon: "/assets/services/backend.svg",
    title: "Desarrollo backend",
    price: 2000,
  },
  {
    id: "editorial",
    icon: "/assets/services/design.svg",
    title: "Diseño Editorial",
    price: 2000,
  },
];

const Servicios = () => {
  const { addToCart } = useCart();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        {/* text */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          {/* headline */}
          <h2 className="h2 max-w-[480px] text-left xl:mb-0">
            Soluciones <span className="text-accent">web</span> para potenciar
            tu negocio
          </h2>
          {/* btn */}
          <Link
            href="/cart"
            className="btn btn-lg btn-accent flex gap-2 text-white cursor-pointer"
          >
            Ver carrito <RiShoppingCartFill className="text-2xl" />
          </Link>
        </div>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="h-80"
        >
          {services.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-bck border border-primary w-full h-[284px] rounded-[20px] px-[30px] py-10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-12">
                    <Image src={item.icon} width={48} height={48} alt="" />
                    <button
                      onClick={() => {
                        addToCart(item);

                        toast.success("Servicio añadido al carrito", {
                          description: item.title,
                        });
                      }}
                      className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center cursor-pointer text-2xl hover:scale-110 transition-all"
                    >
                      <MdAdd />
                    </button>
                  </div>
                  <h5 className="text-[22px] font-medium max-w-60">
                    {item.title}
                  </h5>
                  <p className="text-accent font-semibold">S/ {item.price}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Servicios;

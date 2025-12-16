"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloatingButton = () => {
  return (
    <a
      href="https://wa.me/51976317906"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-[56px] h-[56px]
        flex items-center justify-center
        rounded-full
        bg-[#25D366] text-white
        shadow-lg
        hover:scale-110 hover:shadow-xl
        transition-transform duration-300
      "
    >
      <FaWhatsapp className="text-[28px]" />
    </a>
  );
};

export default WhatsappFloatingButton;

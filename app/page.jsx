"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

// components
import Image from "next/image";
import Blob from "@/components/Blob";
import avatarImg from "@/public/assets/avatar.png";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";
import Link from "next/link";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      {/* pattern */}
      <Pattern />
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* text */}
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1">
            Hola! Soy Sergio Pastor <br />
            <TypeAnimation
              sequence={[
                "Desarrollador Web",
                2000,
                "Diseñador Web",
                2000,
                "Ilustrador",
                2000,
              ]}
              wrapper="span"
              speed={40}
              className="text-accent font-light"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[500px] mb-11">
            Experiencia en interfaces, diseño digital y desarrollo web.
            Especializado en UX/UI y diseño visual, con conocimientos en React,
            JavaScript, TailwindCSS, Bootstrap y WordPress.
          </p>
          <Link className="btn btn-lg btn-accent mb-16 " href="/contacto" >
            <div className="flex items-center gap-3">
              <span className="text-white">Hablemos</span>
              <MdArrowOutward className="text-xl" />
            </div>
          </Link>

          {/* contact info */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
            {/* phone */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone className="text-lg" />
              </span>
              <a className="" href="tel:+51976317906" target="_blank">
                +51 976 317 906
              </a>
            </div>

            {/* mail */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-lg" />
              </span>
              <a
                className=""
                href="mailto:sergioj.pastorsegura@gmail.com"
                target="_blank"
              >
                sergioj.pastorsegura@gmail.com
              </a>
            </div>
          </div>

          {/* socials */}
          <Socials
            containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full"
          />
        </div>

        {/* blob & image*/}
        <div className="hidden xl:block flex-1 relative z-20">
          {/* blob */}
          <Blob containerStyles="w-[560px] h-[560px]" />

          <Image
            src={avatarImg}
            alt=""
            width={440}
            height={600}
            quality={100}
            className="absolute -top-16 left-[120px]"
          />
          {/* overlay gradient */}
          <div
            className="w-full h-[164px] 
         absolute bottom-0 left-0 right-0 bg-linear-to-t from-bck via-bck to-bck/2"
          ></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;

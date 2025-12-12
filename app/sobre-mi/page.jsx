"use client";
import Blob from "@/components/Blob";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";

const SobreMi = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      <div className="container mx-aut px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          {/* img & social icons */}
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative ">
            <Image
              src={"/assets/avatar.png"}
              width={320}
              height={496}
              alt=""
              className="z-20 relative"
            />
            {/* overlay */}
            <div className="w-full h-[60px] absolute left-0 top-[420px] right-0 bg-linear-to-t from-primary via-primary/90 z-30"></div>

            {/* blob */}
            <div className="absolute top-20 -left-20 z-10">
              <Blob containerStyles={"w-[420px] h-[420px]"} />
            </div>

            <Socials
              containerStyles="flex gap-4 z-40 w-max transform translate-x-[30px]"
              iconStyles="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer"
            />
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div className="">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>Sobre mí</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Sergio </span>Pastor
              </h2>
              <p className="max-w-[540px] mb-12">
                Creo experiencias digitales modernas usando React, Astro,
                Bootstrap, animaciones fluidas y diseño estratégico. Desarrollo
                interfaces creativas, funcionales y con propósito.
              </p>
              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Testimonial />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default SobreMi;

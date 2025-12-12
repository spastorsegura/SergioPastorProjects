"use client";
import { motion } from "framer-motion";

// swiper
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { ImGithub } from "react-icons/im";

const projects = [
  {
    id: 1,
    category: "Desarrollo",
    title: "Oriunda",
    image: "/assets/work/thumb1.png",
    link: "https://oriunda.com.pe/",
    github: "",
    tech: ["WordPress", "WPBakery", "Google Analytics"],
  },
  {
    id: 2,
    category: "Desarrollo",
    title: "CodeCafé.",
    image: "/assets/work/thumb2.png",
    link: "https://codecafeperu.netlify.app/",
    github: "",
    tech: ["ReactJS", "TailwindCSS", "framer-motion"],
  },
  {
    id: 3,
    category: "Desarrollo",
    title: "La Ola Cevichera",
    image: "/assets/work/thumb3.png",
    link: "https://ola-cevichera.netlify.app/",
    github: "",
    tech: ["ReactJS", "TailwindCSS", "framer-motion"],
  },
  {
    id: 4,
    category: "Desarrollo",
    title: "Cocktail recetas",
    image: "/assets/work/thumb4.png",
    link: "https://bebidasreactsp.netlify.app/",
    github: "",
    tech: ["ReactJS", "TailwindCSS", "Zustand", "Zod", "REST API"],
  },
  {
    id: 5,
    category: "Desarrollo",
    title: "GuitarLA",
    image: "/assets/work/thumb5.png",
    link: "https://guitarlasp.netlify.app/",
    github: "",
    tech: ["ReactJS", "TailwindCSS", "HTML"],
  },
  {
    id: 6,
    category: "Desarrollo",
    title: "Shopi",
    image: "/assets/work/thumb6.png",
    link: "https://cart-react-ej.netlify.app/",
    github: "",
    tech: ["ReactJS", "TailwindCSS", "HTML"],
  },
  {
    id: 7,
    category: "UX/UI",
    title: "PEB Home",
    image: "/assets/work/thumb7.png",
    link: "https://xd.adobe.com/view/7b0e5841-22a1-4681-a1a7-a3c0f3e0ae41-2e5d/?fullscreen",
    github: "",
    tech: ["Adobe XD", "UX/UI"],
  },
  {
    id: 8,
    category: "UX/UI",
    title: "Fonoteca",
    image: "/assets/work/thumb8.png",
    link: "https://xd.adobe.com/view/7b0e5841https://xd.adobe.com/view/0dd41eb8-0ebd-4a14-8200-c250e43f6a7f-5887/?fullscreen",
    github: "",
    tech: ["Adobe XD", "UX/UI"],
  },
  {
    id: 9,
    category: "UX/UI",
    title: "Fotografiando al Perú",
    image: "/assets/work/thumb9.png",
    link: "https://xd.adobe.com/embed/a8def9d7-25b1-47ce-9b53-4faf0fee1e48-fd8d/https://xd.adobe.com/embed/a8def9d7-25b1-47ce-9b53-4faf0fee1e48-fd8d/",
    github: "",
    tech: ["Adobe XD", "UX/UI"],
  },
  {
    id: 10,
    category: "Ilustración",
    title: "Ilustraciones",
    image: "/assets/work/thumb10.png",
    link: "",
    github: "",
    tech: ["Adobe Fresco", "Photoshop"],
  },
  {
    id: 11,
    category: "Desarrollo",
    title: "Artesanía Alanya",
    image: "/assets/work/thumb11.png",
    link: "https://artetextilalanya.netlify.app/",
    github: "",
    tech: ["Wordpress", "templates", "plugins", "HTML", "CSS", "JS"],
  },
  {
    id: 12,
    category: "Diseño",
    title: "USIL Editorial",
    image: "/assets/work/thumb12.png",
    link: "https://xd.adobe.com/view/2a6aaa1e-92c8-4df4-94d4-aa4bc41c8efa-7f39/?fullscreen",
    github: "",
    tech: [
      "Adobe InDesign",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Ilustraciones",
    ],
  },
];

const categories = ["Desarrollo", "UX/UI", "Diseño", "Ilustración"];

const Trabajos = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          Mis últimos <span className="text-accent">trabajos</span>
        </h2>
        {/* tabs */}
        <Tabs
          defaultValue="desarrollo"
          className={"w-full flex flex-col gap-6 xl:gap-12"}
        >
          <TabsList
            className={
              "flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0"
            }
          >
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={
                    "capitalize border border-white/10 data-[state=active]:bg-accent h-12 px-6 rounded-full cursor-pointer"
                  }
                >
                  {category === "UX/UI" ? "UX/UI Design" : category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* tabs content */}
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max xl:h-[460px]"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-0">
                                {/* title */}
                                <h3 className="h3">{project.title}</h3>
                                {/* tech */}
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                  <p>Tecnologías usadas</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-7 px-3.5 rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* btns */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                  <Link href={project.link}>
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Live</span>
                                    </button>
                                  </Link>
                                  <Link href={project.github}>
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <ImGithub className="text-xl" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* project img */}
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-0 rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Trabajos;

"use client";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineMail,
  HiOutlineMap,
  HiOutlinePhone,
} from "react-icons/hi";

const handleSubmit = (e) => {
  e.preventDefault();

  const toastId = toast.loading("Enviando mensaje...");

  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
      e.target,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast.success("Mensaje enviado correctamente", {
        id: toastId,
        description: "Te responderé lo antes posible",
      });
      e.target.reset();
    })
    .catch((error) => {
      console.error(error);
      toast.error("Error al enviar el mensaje", {
        id: toastId,
        description: "Intenta nuevamente o escríbeme por WhatsApp",
      });
    });
};

const Contacto = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* info text */}
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              <div className="">
                <h2 className="h2 mb-6">
                  Ponerse en <span className="text-accent">contacto</span>
                </h2>
                <p className="max-w-[460px]">
                  Estoy disponible para nuevos proyectos, colaboraciones y
                  oportunidades. Cuéntame qué necesitas y te responderé lo antes
                  posible.
                </p>
              </div>
              {/* info */}
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                {/* phone */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone />
                  </span>
                  <a href="tel:+51976317906" target="_blank">
                    +51 976 317 906
                  </a>
                </div>
                {/* email */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail />
                  </span>
                  <a
                    href="mailto:sergioj.pastorsegura@gmail.com"
                    target="_blank"
                  >
                    sergioj.pastorsegura@gmail.com
                  </a>
                </div>
                {/* location */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMap />
                  </span>
                  <span>San Borja, Lima - Perú</span>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="flex-1">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-start"
              >
                {/* first and lastname */}
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full">
                    <Label htmlFor="name">
                      Nombres <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      placeholder="Ej. Sergio"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="name">
                      Apellidos <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      placeholder="Ej. Pastor"
                      required
                    />
                  </div>
                </div>
                {/* email */}
                <div className="w-full">
                  <Label htmlFor="name">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Ej. spastor@gmail.com"
                    required
                  />
                </div>
                {/* select */}
                <div className="w-full">
                  <Label htmlFor="name">
                    Estoy interesado en <span className="text-accent">*</span>
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger
                      id="service"
                      className={
                        "w-full h-12! bg-secondary/5 border-secondary/10 px-4"
                      }
                    >
                      <SelectValue placeholder="Seleccione aquí"></SelectValue>
                    </SelectTrigger>
                    <SelectContent className={"bg-bck border-secondary/10"}>
                      <SelectItem value="desarrollo">Desarrollo</SelectItem>
                      <SelectItem value="UX/UI">UX/UI</SelectItem>
                      <SelectItem value="diseño">Diseño</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* textarea */}
                <div className="w-full">
                  <Label htmlFor="name">
                    Mensaje <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Escribe tu mensaje..."
                    className={
                      "min-h-40 bg-secondary/5 border-secondary/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-secondary/50"
                    }
                  />
                </div>
                {/* btn */}
                <button className="btn btn-lg btn-accent text-white">
                  <div className="flex items-center gap-3">
                    <span className="font-medium ">Enviar mensaje</span>
                    <HiOutlineArrowRight className="text-xl" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacto;

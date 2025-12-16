import {
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

const Info = () => {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineClock className="text-2xl mt-1 text-accent" />
          <div className="">
            <p>Disponibilidad</p>
            <p>Lunes a Viernes, 9am - 6pm</p>
          </div>
        </div>
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineMail className="text-2xl mt-1 text-accent" />
          <div className="">
            <p>Email</p>
            <p>sergioj.pastorsegura@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlinePhone className="text-2xl mt-1 text-accent" />
          <div className="">
            <p>Teléfono</p>
            <p>+51 976 317 906</p>
          </div>
        </div>
        <div className="w-[280px] flex items-start gap-4">
          <HiOutlineLocationMarker className="text-2xl mt-1 text-accent" />
          <div className="">
            <p>Dirección</p>
            <p>San Borja, Lima - Perú</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/assets/logo.svg";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logoImg} alt="" className="w-[50%] xl:w-[80%]  mx-auto" />
    </Link>
  );
};

export default Logo;

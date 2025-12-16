"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "inicio",
    path: "/",
  },
  {
    name: "sobre mí",
    path: "/sobre-mi",
  },
  {
    name: "tienda",
    path: "/servicios",
  },
  {
    name: "trabajos",
    path: "/trabajos",
  },
  {
    name: "contacto",
    path: "/contacto",
  },
];

const NavLinks = ({ containerStyles }) => {
  const pathname = usePathname();

  const servicesRoutes = ["/servicios", "/cart", "/checkout"];

  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        const isActive =
          link.path === "/servicios"
            ? servicesRoutes.includes(pathname)
            : pathname === link.path;

        return (
          <Link
            href={link.path}
            key={index}
            className={`relative text-lg uppercase text-secondary transition-colors duration-300
              after:content-['']
              after:absolute
              after:left-0
              after:top-1/2
              after:h-1
              after:w-full
              after:bg-bck/60
              after:-translate-y-1/2
              after:origin-left
              after:scale-x-0
              after:transition-transform
              after:duration-300
              hover:after:scale-x-100
              ${isActive ? "after:scale-x-100 text-accent" : ""}
            `}
          >
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </ul>
  );
};

export default NavLinks;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SocialMedia } from "@/components";

function SideNav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const openMenu = (value) => {
    setOpen(value);
  };

  const nextPage = (path) => {
    router.push(path);
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (open) {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <div className="bg-black">
      <header className="fixed z-10 bg-black w-full">
        <div className="flex justify-between items-center px-16">
          <div className="transform hover:bg-gray-200 rounded-full p-1.5">
            <img
              src={
                open ? "/assets/icons/close.svg" : "/assets/icons/burguer.svg"
              }
              alt="burguer-icon"
              className="cursor-pointer"
              onClick={() => openMenu(!open)}
            />
          </div>
          <a href="/">
            <img
              src="/assets/images/logo.webp"
              alt="3AM Logo"
              className="w-20 lg:w-40"
            />
          </a>
        </div>
      </header>
      {open && (
        <div className="flex z-10 w-full sm:w-1/4 h-full fixed bg-black flex-col space-y-5 mt-[45px] lg:mt-[90px] slideInLeft">
          <ul className="space-y-5 h-1/4 pt-5">
            <li
              className="hover:bg-gray-200 hover:text-black font-medium pl-12 text-lg cursor-pointer px-5 py-3"
              onClick={() => nextPage("/")}
            >
              Inicio
            </li>
            <li
              className="hover:bg-gray-200 hover:text-black font-medium pl-12 text-lg cursor-pointer px-5 py-3"
              onClick={() => nextPage("/aboutUs")}
            >
              Sobre nosotros
            </li>
            <li
              className="hover:bg-gray-200 hover:text-black font-medium pl-12 text-lg cursor-pointer px-5 py-3"
              onClick={() => nextPage("/events")}
            >
              Eventos
            </li>
          </ul>
          <div className="h-2/4 flex">
            <img
              src="/assets/images/logo.webp"
              width="250px"
              height="140px"
              className="rounded-lg m-auto"
            />
          </div>
          <div className="mx-auto mt-auto h-1/4">
            <SocialMedia />
          </div>
        </div>
      )}
    </div>
  );
}
export default SideNav;

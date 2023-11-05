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
      <div>
        <header>
          <h1 className="text-center text-white border-b border-b-stone-600">
            3AM Official
          </h1>
          <div className="flex justify-between px-16">
            <img
              src={
                open ? "/assets/icons/close.svg" : "/assets/icons/burguer.svg"
              }
              alt="burguer-icon"
              className="cursor-pointer"
              onClick={() => openMenu(!open)}
            />
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
          <div className="flex z-10 w-1/4 h-screen fixed bg-black  flex-col space-y-5">
            <ul className="space-y-5 slideInDown p-5 ">
              <li
                className="hover:underline cursor-pointer"
                onClick={() => nextPage("/")}
              >
                Inicio
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => nextPage("/aboutUs")}
              >
                Sobre nosotros
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => nextPage("/contact")}
              >
                Contacto
              </li>
              <li
                className="hover:underline cursor-pointer"
                onClick={() => nextPage("/events")}
              >
                Eventos
              </li>
            </ul>
            <img
              src="/assets/images/logo.webp"
              width="250px"
              className="pl-5 rounded-lg"
            />
            <div className="pl-3">
              <SocialMedia />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default SideNav;

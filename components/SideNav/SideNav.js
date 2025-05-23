import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SocialMedia } from "@/components";
import { useAuth } from "@/utils/authContext";

function SideNav() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

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
    <div>
      <header className="fixed z-10 w-full">
        <div className="flex justify-between items-center px-16">
          <div className="transform hover:bg-gray-200 rounded-full p-1.5">
            {/* <img
              src={
                open ? "/assets/icons/close.svg" : "/assets/icons/burguer.svg"
              }
              alt="burguer-icon"
              className="cursor-pointer"
              onClick={() => openMenu(!open)}
            /> */}
          </div>
          <img
            src="/assets/images/logo.png"
            alt="3AM Logo"
            className="w-20 lg:w-40"
          />
        </div>
      </header>
      {open && (
        <div className="flex z-20 w-full sm:w-1/4 h-full fixed bg-black flex-col space-y-5 mt-[45px] lg:mt-[90px] slideInLeft">
          <ul className="pt-5 z-10">
            <li
              className="hover:bg-gray-200 hover:text-black font-medium pl-12 mb-4 text-lg cursor-pointer px-5 py-3"
              onClick={() => nextPage("/")}
            >
              Home
            </li>
            <li
              className="hover:bg-gray-200 hover:text-black font-medium pl-12 my-4 text-lg cursor-pointer px-5 py-3"
              onClick={() => nextPage("/merch")}
            >
              Merch
            </li>
            <li
              className="hover:bg-gray-200 hover:text-black font-medium pl-12 my-4 text-lg cursor-pointer px-5 py-3"
              onClick={() => nextPage("/aboutUs")}
            >
              About Us
            </li>
            <li
              className="hover:bg-gray-200 hover:text-black font-medium pl-12 my-4 text-lg cursor-pointer px-5 py-3"
              onClick={() => nextPage("/events")}
            >
              Tour
            </li>
            <li
              className="hover:bg-gray-200 hover:text-black font-medium pl-12 my-4 text-lg cursor-pointer px-5 py-3"
              onClick={() => nextPage("/contact")}
            >
              Contac Us
            </li>
          </ul>
          <div className="h-1/4 flex pointer-events-none">
            <img
              src="/assets/images/logo.png"
              width="200px"
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

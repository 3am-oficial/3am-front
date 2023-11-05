import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className="justify-center items-centet bottom-0">
      <div className="bg-black mt-auto w-full flex items-center justify-center py-5 absolute">
        <h1 className=" border-b  border-b-stone-600 mr-20">3AM Official</h1>
        <SocialMedia />
      </div>
    </footer>
  );
};

export default Footer;

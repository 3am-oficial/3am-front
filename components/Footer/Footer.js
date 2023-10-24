import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center h-screen mt-24">
      <div className="bg-black mt-auto w-full flex items-center justify-center py-5">
        <h1 className=" border-b  border-b-stone-600 mr-20">3AM Official</h1>
        <ul className="flex space-x-5  items-center ">
          {/* <li className="transform hover:scale-125 hover:bg-gray-200 rounded-full p-1.5">
            <a className="" href="/">
              <img
                src="/assets/icons/home.svg"
                width="25px"
                className="icon "
              />
            </a>
          </li> */}
          <li className="transform hover:scale-125 hover:bg-gray-200 rounded-full p-1.5">
            <a href="https://www.instagram.com/3am.oficial/" target="_blank">
              <img
                src="/assets/icons/instagram.svg"
                width="20px"
                className="icon"
              />
            </a>
          </li>
          <li className="transform hover:scale-125 hover:bg-gray-200 rounded-full p-1.5">
            <a
              href="https://www.youtube.com/channel/UC3myUwsL1oeYp216INrvtQw"
              target="_blank"
            >
              <img
                src="/assets/icons/youtube.svg"
                width="20px"
                className="icon"
              />
            </a>
          </li>
          <li className="transform hover:scale-125 hover:bg-gray-200 rounded-full p-1.5">
            <a href="https://www.tiktok.com/@3am.oficial" target="_blank">
              <img
                src="/assets/icons/tiktok.svg"
                width="20px"
                className="icon"
              />
            </a>
          </li>
          {/* <li>
            <a href="/cart">
                <img src="/assets/icons/cart.svg" width="20px" />
                </a>
        </li> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

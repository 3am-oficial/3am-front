import React from "react";

const SocialMedia = () => {
  return (
    <ul className="flex space-x-5  items-center">
      <li className="transform hover:scale-125 hover:bg-gray-200 rounded-full p-1.5">
        <a href="https://www.instagram.com/3am.oficial/" target="_blank">
          <img src="/assets/icons/instagram.svg" width="20px" />
        </a>
      </li>
      <li className="transform hover:scale-125 hover:bg-gray-200 rounded-full p-1.5">
        <a
          href="https://www.youtube.com/channel/UC3myUwsL1oeYp216INrvtQw"
          target="_blank"
        >
          <img src="/assets/icons/youtube.svg" width="20px" />
        </a>
      </li>
      <li className="transform hover:scale-125 hover:bg-gray-200 rounded-full p-1.5">
        <a href="https://www.tiktok.com/@3am.oficial" target="_blank">
          <img src="/assets/icons/tiktok.svg" width="20px" />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;

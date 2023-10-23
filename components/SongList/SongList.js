import React from "react";
import { handleShareClick } from "@/utils/sharedLink";

const SongList = ({ songs }) => {
  return (
    <div className="w-full lg:p-5">
      <ul className="space-y-5">
        {songs.map((songs, index) => (
          <li key={index} className="song-items">
            <div className="flex items-center lg:space-x-5 space-x-2">
              <img
                src={`/assets/images/imageUnknow.jpg`}
                alt=""
                className="w-10 h-10 rounded-lg"
              />
              <p>{songs.name}</p>
            </div>
            <div className="flex space-x-5 items-center">
              <audio src={songs.file} controls className="w-28" />
              <img
                src="/assets/icons/shared.svg"
                className="shared-icon w-8 h-8 cursor-pointer"
                onClick={() => handleShareClick(songs, "song")}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;

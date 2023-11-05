import React from "react";
import { handleShareClick } from "@/utils/sharedLink";

const SongList = ({ songs }) => {
  return (
    <div className="w-full lg:p-5">
      <ul className="space-y-5">
        {songs.map((song, index) => (
          <li key={index} className="song-items">
            <div className="flex items-center lg:space-x-5 space-x-2">
              <img
                src={song.image ? song.image : "/assets/images/imageUnknow.jpg"}
                alt=""
                className="w-10 h-10 rounded-lg"
              />
              <p style={{ whiteSpace: "nowrap" }}>{song.name}</p>{" "}
            </div>
            <div className="flex space-x-5 items-center sm:w-full">
              <audio
                src={song.file}
                controls
                className="ml-auto sm:w-[400px] w-28 h-8"
              />
              <img
                src="/assets/icons/shared.svg"
                className="shared-icon w-8 h-8 cursor-pointer"
                onClick={() => handleShareClick(song, "song")}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;

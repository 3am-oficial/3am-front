import React, { useState, useRef } from "react";
import { handleShareClick } from "@/utils/sharedLink";
import { Loader, ProgressBar } from "@/components";

const SongList = ({
  songs,
  currentSongIndex,
  handlePlayClick,
  audioRef,
  loading,
}) => {
  return (
    <div className="w-full lg:p-5">
      <ul className="space-y-5">
        {songs.map((song, index) => (
          <li key={index} className="song-items">
            <div className="flex items-center lg:space-x-5 space-x-2 w-full">
              <img
                src={song.image ? song.image : "/assets/images/imageUnknow.jpg"}
                alt=""
                className="w-10 h-10 rounded-lg"
              />
              <p>{song.name}</p>{" "}
            </div>
            <div className="flex space-x-5 items-center sm:w-full justify-end">
              <audio ref={audioRef} />

              {loading && index === currentSongIndex ? (
                <Loader />
              ) : (
                <div className="flex space-x-5">
                  <img
                    src={
                      index === currentSongIndex
                        ? "/assets/icons/fi_pause.svg"
                        : "/assets/icons/fi_play.svg"
                    }
                    className={`shared-icon w-20 lg:w-8 sm:w-8 cursor-pointer hover:bg-gray-200 ${
                      index === currentSongIndex && "bg-gray-200"
                    }`}
                    onClick={() => handlePlayClick(index)}
                  />
                </div>
              )}
              <img
                src="/assets/icons/shared.svg"
                className="shared-icon w-8 h-8 cursor-pointer hover:bg-gray-200"
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

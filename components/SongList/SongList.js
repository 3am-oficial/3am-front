import React, { useState, useRef } from "react";
import { handleShareClick } from "@/utils/sharedLink";
import { Loader, ProgressBar } from "@/components";

const SongList = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef();

  const playSong = (songIndex) => {
    setLoading(true);

    const song = songs[songIndex];

    if (audioRef.current) {
      audioRef.current.pause();
    }

    setCurrentSongIndex(songIndex);

    audioRef.current.src = song.file;

    audioRef.current.onloadeddata = () => {
      audioRef.current.play();
      setLoading(false);
    };
  };

  const handlePlayClick = (songIndex) => {
    if (songIndex === currentSongIndex) {
      audioRef.current.pause();
      setCurrentSongIndex(null);
    } else {
      playSong(songIndex);
    }
  };

  const handleNextClick = () => {
    const nextSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(nextSongIndex);
  };

  const handlePreviewClick = () => {
    let prevSongIndex = currentSongIndex - 1;
    if (prevSongIndex < 0) {
      prevSongIndex = songs.length - 1;
    }
    playSong(prevSongIndex);
  };

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
              <p style={{ whiteSpace: "nowrap" }}>{song.name}</p>{" "}
            </div>
            <div className="flex space-x-5 items-center sm:w-full justify-end">
              <audio ref={audioRef} />

              {loading && index === currentSongIndex ? (
                <Loader />
              ) : (
                <div className="flex space-x-5">
                  <img
                    src="/assets/icons/preview.svg"
                    onClick={handlePreviewClick}
                    className={
                      !loading && index === currentSongIndex
                        ? "inline cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                        : "hidden"
                    }
                  />
                  <img
                    src={
                      index === currentSongIndex
                        ? "/assets/icons/fi_pause.svg"
                        : "/assets/icons/fi_play.svg"
                    }
                    className={`shared-icon w-8 h-8 cursor-pointer hover:bg-gray-200 ${
                      index === currentSongIndex && "bg-gray-200"
                    }`}
                    onClick={() => handlePlayClick(index)}
                  />
                  <img
                    src="/assets/icons/next.svg"
                    onClick={handleNextClick}
                    className={
                      !loading && index === currentSongIndex
                        ? "inline cursor-pointer hover:bg-gray-200  p-1 rounded-full"
                        : "hidden"
                    }
                  />
                  {!loading && index === currentSongIndex && (
                    <ProgressBar audioRef={audioRef} />
                  )}
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

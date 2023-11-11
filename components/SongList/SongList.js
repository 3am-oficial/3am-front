import React, { useState, useRef } from "react";
import { handleShareClick } from "@/utils/sharedLink";

const SongList = ({ songs }) => {
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef();

  const playSong = (song) => {
    if (currentSong) {
      // Si hay una canción en reproducción, la pausamos antes de reproducir la nueva
      audioRef.current.pause();
    }

    // Establecer la nueva canción como la canción actual
    setCurrentSong(song);

    // Reproducir la nueva canción
    audioRef.current.src = song.file;
    audioRef.current.play();
  };

  const handlePlayClick = (song) => {
    if (song === currentSong) {
      // Si se hace clic en la misma canción, pausarla
      audioRef.current.pause();
      setCurrentSong(null);
    } else {
      playSong(song);
    }
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
              <img
                src="/assets/icons/shared.svg"
                className="shared-icon w-8 h-8 cursor-pointer hover:bg-gray-200"
                onClick={() => handleShareClick(song, "song")}
              />
              <img
                src={
                  song === currentSong
                    ? "/assets/icons/fi_pause.svg"
                    : "/assets/icons/fi_play.svg"
                }
                className="shared-icon w-8 h-8 cursor-pointer hover:bg-gray-200"
                onClick={() => handlePlayClick(song)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;

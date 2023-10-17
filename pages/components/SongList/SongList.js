import React from "react";

const SongList = ({ songs }) => {
  return (
    <div className="w-full p-5">
      <ul className="space-y-5">
        {songs.map((songs, index) => (
          <li key={index} className="song-items">
            <div className="flex items-center space-x-5">
              <img
                src={`/assets/images/imageUnknow.jpg`}
                alt=""
                className="w-10 h-10 rounded-lg"
              />
              <p>{songs.name}</p>
            </div>
            <audio src={songs.file} controls />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;

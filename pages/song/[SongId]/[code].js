import React, { useState, useRef } from "react";
import { AxiosServer } from "@/services";
import { handleShareClick } from "@/utils/sharedLink";
import { Player } from "@/components";

const SongList = ({ Song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const playSong = () => {
    setIsPlaying(true);

    console.log("entra");
  };

  const handlePlayClick = () => {
    if (isPlaying) {
      setIsPlaying(false);
      audioRef.current.audio.current.pause();
    } else {
      setIsPlaying(true);
      audioRef.current.audio.current.play();
    }
  };

  const onPlaying = (e) => {
    e.type === "pause" ? setIsPlaying(false) : setIsPlaying(true);
  };

  return (
    <div className="space-y-5 min-height-screen lg:pt-[90px] pt-10">
      <div className="container-album lg:p-10 p-5 space-y-5 h-screen lg:h-full">
        <div className="flex space-x-5 justify-between w-full items-center">
          <div className="flex space-x-5 ">
            <img
              src={Song.image ? Song.image : "/assets/images/imageUnknow.jpg"}
              alt={`${Song.name} - 3AM`}
              className="rounded-lg w-16 h-16 md:w-20 md:h-20 lg:w-48 lg:h-48"
            />
            <div className="flex flex-col justify-between">
              <h2 className="title-action">{Song.name}</h2>
              <div className="flex space-x-5">
                <strong>3AM</strong>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="w-full lg:p-5">
          <ul className="space-y-5">
            <li className="song-items">
              <div className="flex items-center lg:space-x-5 space-x-2">
                <img
                  src={
                    Song.image ? Song.image : "/assets/images/imageUnknow.jpg"
                  }
                  alt=""
                  className="w-10 h-10 rounded-lg"
                />
                <p style={{ whiteSpace: "nowrap" }}>{Song.name}</p>{" "}
              </div>
              <div className="flex space-x-5 items-center sm:w-full justify-end">
                {/* <audio
                  src={Song.file}
                  controls
                  className="ml-auto sm:w-[400px] w-28 h-8"
                /> */}
                <div className="flex space-x-5">
                  <img
                    src={
                      isPlaying
                        ? "/assets/icons/fi_pause.svg"
                        : "/assets/icons/fi_play.svg"
                    }
                    className={`shared-icon w-8  cursor-pointer hover:bg-gray-200 ${
                      isPlaying && "bg-gray-200"
                    }`}
                    onClick={handlePlayClick}
                  />
                  <img
                    src="/assets/icons/shared.svg"
                    className="shared-icon w-8 h-8 cursor-pointer hover:bg-gray-200 "
                    onClick={() => handleShareClick(Song, "song")}
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="fixed bottom-0 z-10 bg-black p-4 shadow-lg w-full h-28 flex space-x-10">
        <Player audio={Song.file} onPlaying={onPlaying} audioRef={audioRef} />
      </div>
    </div>
  );
};

export default SongList;

export async function getServerSideProps(context) {
  const { query, res } = context;
  const { SongId, code } = query;

  try {
    const response = await AxiosServer.get(
      `/getSongById?songId=${SongId}&code=${code}`
    );
    const Song = response.data.data;

    return {
      props: {
        Song,
        loadingServer: false,
      },
    };
  } catch (error) {
    if (error.response && error.response.data.code) {
      return {
        redirect: {
          destination: `/song/${SongId}?error=invalid`,
          permanent: false,
        },
      };
    } else {
      return {
        props: {
          Song: [],
          loadingServer: false,
        },
      };
    }
  }
}

import React, { useState, useRef } from "react";

import { AxiosServer } from "@/services";
import { SongList, ProgressBar, Player } from "@/components";
import Head from "next/head";
import { handleShareClick } from "@/utils/sharedLink";
import { useAuth } from "@/utils/authContext";

function SongsPage({ Album, loadingServer }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [songSelected, setSongSelected] = useState({});
  const audioRef = useRef();
  const { user } = useAuth();

  const playSong = (songIndex) => {
    setLoading(true);
    const song = Album.songs[songIndex];
    setSongSelected(song);
    setCurrentSongIndex(songIndex);
    setIsPlaying(true);
    setLoading(false);
  };

  const handlePlayClick = (songIndex) => {
    setIsPlaying(!isPlaying);
    if (songIndex === currentSongIndex) {
      !isPlaying
        ? audioRef.current.audio.current.play()
        : audioRef.current.audio.current.pause();
    } else {
      playSong(songIndex);
    }
  };

  const closePlayer = () => {
    setIsPlaying(false);
    setCurrentSongIndex(null);
    audioRef.current.audio.current.pause();
  };

  const onPlaying = (e) => {
    e.type === "pause" ? setIsPlaying(false) : setIsPlaying(true);
  };

  const handleNextClick = () => {
    const nextSongIndex = (currentSongIndex + 1) % Album.songs.length;
    playSong(nextSongIndex);
  };

  const handlePreviewClick = () => {
    let prevSongIndex = currentSongIndex - 1;
    if (prevSongIndex < 0) {
      prevSongIndex = Album.songs.length - 1;
    }
    playSong(prevSongIndex);
  };

  return (
    <div
      className={`${
        !user
          ? "space-y-5 min-height-screen"
          : "space-y-5 min-height-screen lg:pt-[90px] pt-10"
      }`}
    >
      <div className="container-album lg:p-10 p-5 h-full space-y-5">
        <Head>
          <title>
            {Album.name} - {Album.artist}
          </title>
          <meta
            name="description"
            content={`Escucha las canciones de ${Album.name} de ${Album.artist}.`}
          />
          <meta
            property="og:title"
            content={`${Album.name} - ${Album.artist}`}
          />
          <meta
            property="og:description"
            content={`Escucha las canciones de ${Album.name} de ${Album.artist}.`}
          />
          <meta property="og:image" content="/assets/images/imageUnknow.jpg" />
          <meta name="twitter:card" content="summary" />
        </Head>
        <a href="/admin" className={`${!user ? "hidden" : "inline go-back"}`}>
          <div className="flex space-x-2">
            <img src="/assets/icons/backarrow.svg" alt="imageArrow" />
            <p>Regresar</p>
          </div>
        </a>
        <div className="flex space-x-5 justify-between w-full items-center">
          <div className="flex space-x-5 ">
            <img
              src={Album.image ? Album.image : "/assets/images/imageUnknow.jpg"}
              alt={`${Album.name} - ${Album.artist}`}
              className="rounded-lg w-16 h-16 md:w-20 md:h-20 lg:w-48 lg:h-48"
            />
            <div className="flex flex-col justify-between">
              <h2 className="title-action">{Album.name}</h2>
              <div className="flex space-x-5">
                <strong>{Album.artist}</strong>
                <p>{Album.songs.length} • canciones</p>
              </div>
            </div>
          </div>
          <img
            src="/assets/icons/shared.svg"
            className={`${
              !user ? "hidden" : "shared-icon w-12 cursor-pointer"
            }`}
            onClick={() => handleShareClick(Album, "album")}
          />
        </div>
        <hr />
        {!loadingServer && (
          <SongList
            songs={Album.songs}
            isPlaying={isPlaying}
            currentSongIndex={currentSongIndex}
            handlePlayClick={handlePlayClick}
            audioRef={audioRef}
            loading={loading}
          />
        )}
      </div>

      {(currentSongIndex || currentSongIndex === 0) && (
        <div className="fixed bottom-0 z-10 bg-black p-4 shadow-lg w-full h-28 flex space-x-10">
          <div className="flex items-end flex-1 flex-col lg:flex-row">
            <img src={Album.image} width="80px" />
            <p className="text-song lg:ml-3 text-center">{songSelected.name}</p>
          </div>
          <div className="flex w-2/4">
            <Player
              audio={songSelected.file}
              autoPlay
              onPlaying={onPlaying}
              showSkipControls
              audioRef={audioRef}
              handlePreviewClick={handlePreviewClick}
              handleNextClick={handleNextClick}
            />
          </div>
          <div className="flex-1">
            <svg
              onClick={closePlayer}
              className="w-5 h-5 cursor-pointer lg:ml-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { albumId, code, fromPromoPage } = query;

  try {
    const response = await AxiosServer.get(
      `/getSongsByAlbumId?albumId=${albumId}&code=${code}`
    );
    const Album = response.data.data;

    return {
      props: {
        Album,
        loadingServer: false,
        fromPromoPage: fromPromoPage === "true",
      },
    };
  } catch (error) {
    if (error.response && error.response.data.code) {
      return {
        redirect: {
          destination: `/album/${albumId}?error=invalid`,
          permanent: false,
        },
      };
    } else {
      return {
        props: {
          Album: [],
          loadingServer: false,
          fromPromoPage: fromPromoPage === "true",
        },
      };
    }
  }
}

export default SongsPage;

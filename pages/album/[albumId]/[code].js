import React, { useState, useRef } from "react";

import { AxiosServer } from "@/services";
import { SongList, ProgressBar } from "@/components";
import Head from "next/head";
import { handleShareClick } from "@/utils/sharedLink";

function SongsPage({ Album, loadingServer }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  const [songSelected, setSongSelected] = useState({});
  const audioRef = useRef();

  const playSong = (songIndex) => {
    setLoading(true);

    const song = Album.songs[songIndex];
    setSongSelected(song);
    console.log(Album, "Album");

    console.log(songSelected, "songSelectedsongSelected");

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
    <div className="space-y-5 min-height-screen pt-[90px]">
      <div className="container-album p-10 h-full space-y-5">
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
        <a href="/admin" className="go-back">
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
            className="shared-icon w-12 cursor-pointer"
            onClick={() => handleShareClick(Album, "album")}
          />
        </div>
        <hr />
        {!loadingServer && (
          <SongList
            songs={Album.songs}
            currentSongIndex={currentSongIndex}
            handlePlayClick={handlePlayClick}
            handleNextClick={handleNextClick}
            handlePreviewClick={handlePreviewClick}
            audioRef={audioRef}
            loading={loading}
          />
        )}
      </div>

      {!loading && (currentSongIndex || currentSongIndex === 0) && (
        <div className="fixed bottom-0 z-10 bg-black p-4 shadow-lg w-full h-24 flex space-x-10">
          <div className="flex items-end space-x-5 just">
            <img src={Album.image} width={"60px"} />
            <p className="text-song">{songSelected.name}</p>
          </div>
          <div className="w-full flex">
            {!loading && (currentSongIndex || currentSongIndex === 0) && (
              <div className="w-1/2 flex flex-col m-auto">
                <div className="flex space-x-5 w-full justify-center">
                  <img
                    src="/assets/icons/preview.svg"
                    onClick={handlePreviewClick}
                    className={
                      !loading && (currentSongIndex || currentSongIndex === 0)
                        ? "inline cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                        : "hidden"
                    }
                  />
                  <img
                    src={
                      currentSongIndex || currentSongIndex === 0
                        ? "/assets/icons/fi_pause.svg"
                        : "/assets/icons/fi_play.svg"
                    }
                    className={`shared-icon w-8 h-8 cursor-pointer hover:bg-gray-200 ${
                      (currentSongIndex || currentSongIndex === 0) &&
                      "bg-gray-200"
                    }`}
                    onClick={() => handlePlayClick(currentSongIndex)}
                  />
                  <img
                    src="/assets/icons/next.svg"
                    onClick={handleNextClick}
                    className={
                      !loading && (currentSongIndex || currentSongIndex === 0)
                        ? "inline cursor-pointer hover:bg-gray-200  p-1 rounded-full"
                        : "hidden"
                    }
                  />
                </div>
                <ProgressBar audioRef={audioRef} />
              </div>
            )}
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

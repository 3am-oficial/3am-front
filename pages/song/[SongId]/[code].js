import React from "react";
import { AxiosServer } from "@/services";
import { handleShareClick } from "@/utils/sharedLink";

const SongList = ({ Song }) => {
  return (
    <div className="space-y-5 min-height-screen p-5 pt-[90px]">
      <div className="container-album p-10 space-y-5 h-full">
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
              <div className="flex space-x-5 items-center sm:w-full">
                <audio
                  src={Song.file}
                  controls
                  className="ml-auto sm:w-[400px] w-28 h-8"
                />
                <img
                  src="/assets/icons/shared.svg"
                  className="shared-icon w-8 h-8 cursor-pointer"
                  onClick={() => handleShareClick(Song, "song")}
                />
              </div>
            </li>
          </ul>
        </div>
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

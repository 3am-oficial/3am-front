import React from "react";

const AlbumList = ({ albumList, selectAlbum }) => {
  return (
    <ul className="flex space-x-10">
      {albumList.map((element, index) => {
        return (
          <li
            key={index}
            className="item-album"
            onClick={() => selectAlbum(element)}
          >
            <div className="flex flex-col justify-center items-center">
              <img
                src={
                  element.image
                    ? element.image
                    : "/assets/images/imageUnknow.jpg"
                }
                className=" w-20 h-20 lg:w-40 lg:h-40 rounded-lg"
              />
              <p className="mt-2 ml-1">
                {element.name} • {element.artist}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AlbumList;

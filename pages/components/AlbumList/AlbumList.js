import React from "react";

const AlbumList = ({ albumList, selectAlbum }) => {
  return (
    <ul>
      {albumList.map((element, index) => {
        return (
          <li
            key={index}
            className="item-album"
            onClick={() => selectAlbum(element)}
          >
            <img
              src={
                element.image ? element.image : "/assets/images/imageUnknow.jpg"
              }
              className="w-40 rounded-lg"
            />
            <p className="mt-2 ml-1">
              {element.name} • {element.artist}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default AlbumList;

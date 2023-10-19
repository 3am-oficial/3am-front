import React from "react";

const AlbumList = ({ albumList, selectAlbum }) => {
  const handleShareClick = (element, event) => {
    event.stopPropagation(); // Detiene la propagación del evento
    const shareURL = `http://localhost:3001/album/${element.id}/ y tu codigo VIP es ${element.code}`;
    navigator.clipboard.writeText(shareURL);
    alert("Enlace copiado al portapapeles: " + shareURL);
  };

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
            <div onClick={(event) => handleShareClick(element, event)}>
              compartir
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AlbumList;

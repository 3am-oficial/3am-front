import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Button,
  SideNavAdmin,
  Inputs,
  AlbumList,
  InputFileAudio,
} from "../../components";
import { AxiosServer, AxiosClient } from "@/services";

const Admin = ({ Albums, loadingServer }) => {
  const [tab, setTab] = useState(0);
  const router = useRouter();

  const [state, setState] = useState({
    albumName: "",
    artistName: "3AM",
    imageFile: null,
    songCode: "",
    audioSong: null,
    nameSong: "",
    urlSong: "",
    urlImage: "",
    albumId: "NO3inUYdSkezEJN96FAp",
  });

  const handleAlbumSelect = (value) => {
    router.push(`/album/${value.id}/${value.code}`);
  };
  const handlerInputchange = (e) => {
    const { name, value } = e.target;

    console.log(e.target, "aksdkjabndslkbnaslkdba");

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const createSong = () => {
    const { nameSong, albumId, urlSong } = state;

    const body = {
      name: nameSong,
      albumId: albumId,
      file: urlSong,
    };

    AxiosClient.post("/createSong", body)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createAlbum = () => {
    const body = {
      name: albumName,
      artist: artistName,
      image: imageFile,
      code: songCode,
    };

    AxiosClient.post("/createSong", body)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="space-y-5">
      <SideNavAdmin
        onTabSelect={(selectedTab) => setTab(selectedTab)}
        tab={tab}
      />
      <div className="space-y-10 container-album  p-10">
        {tab === 0 && !loadingServer && (
          <div>
            <h2 className="mb-5 title-action text-center">Lista de Albunes</h2>
            <AlbumList albumList={Albums} selectAlbum={handleAlbumSelect} />
          </div>
        )}
        {tab === 1 && (
          <div className="flex flex-col items-center justify-center">
            <div className="title-action w-full text-center">Crear Album</div>
            <div className="lg:w-1/2 w-full space-y-10">
              <Inputs
                placeholder="Coloque el nombre del album"
                label="Nombre del album"
                name="albumName"
                value={state.albumName}
                onChange={handlerInputchange}
              />
              <Inputs
                placeholder="3AM Official"
                label="Nombre del artista"
                name="artistName"
                value={state.artistName}
                onChange={handlerInputchange}
              />

              <Inputs
                placeholder="Ingrese la URL de la imagen"
                label="URL de la imagen"
                name="urlImage"
                value={state.urlImage}
                onChange={handlerInputchange}
              />
              <Inputs
                placeholder="Ingrese código de la canción"
                label="Código"
                name="songCode"
                value={state.songCode}
                onChange={handlerInputchange}
              />
            </div>

            <div className="lg:w-1/4 w-full mt-5">
              <Button onClick={createAlbum} label="Crear Album" />
            </div>
          </div>
        )}
        {tab === 2 && (
          <div className="space-y-20">
            <Inputs
              placeholder="Coloque el nombre de la cancion"
              label="Nombre de la cancion"
              name="nameSong"
              value={state.nameSong}
              onChange={handlerInputchange}
            />

            <Inputs
              placeholder="URL de la cancion"
              label="Introduzca la url de la cancion"
              name="urlSong"
              value={state.urlSong}
              onChange={handlerInputchange}
            />

            <InputFileAudio
              name="audioFile"
              labelText="Cancion"
              placeholder="Seleccione una cancion"
              value={state.audioSong}
              onChange={handlerInputchange}
            />
            <Button onClick={createSong} label="Cargar cancion" />
          </div>
        )}
      </div>
    </div>
  );
};

// ...

export async function getServerSideProps(context) {
  const token = context.req.headers.token;

  try {
    const response = await AxiosServer.get(`/getAlbums`);
    const Albums = response.data.data;
    let loadingServer = true;

    return {
      props: {
        Albums,
        loadingServer: !loadingServer,
      },
    };
  } catch (error) {
    return {
      props: {
        Albums: [],
        loadingServer: !loadingServer,
      },
    };
  }
}

export default Admin;

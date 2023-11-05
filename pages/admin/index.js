import React, { useState } from "react";
import {
  Button,
  SideNavAdmin,
  Inputs,
  AlbumList,
  Select,
  InputsFile,
  InputFileAudio,
} from "../../components";
import { AxiosServer, AxiosClient } from "@/services";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useAuth } from "@/utils/authContext";

const Admin = ({ Albums, loadingServer }) => {
  const router = useRouter();
  const { user } = useAuth();
  const [tab, setTab] = useState(0);

  const [state, setState] = useState({
    albumName: "",
    artistName: "3AM",
    songCodeAlbum: "",
    songCodeSong: "",
    audioSong: null,
    nameSong: "",
    urlSong: "",
    urlImage: "",
    albumId: "",
  });

  const handleAlbumSelect = (value) => {
    router.push(`/album/${value.id}/${value.code}`);
  };
  const handlerInputchange = (e) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const captUrlImage = (file) => {
    setState((prevState) => ({
      ...prevState,
      urlImage: file,
    }));
  };
  const createSong = () => {
    const { nameSong, albumId, urlSong, songCodeSong } = state;

    if (!nameSong || !albumId || !urlSong || !songCodeSong) {
      toast.warn("Existen campos vacios");
      return;
    }

    const body = {
      name: nameSong,
      albumId: albumId,
      file: urlSong,
      songCode: songCodeSong,
    };

    AxiosClient.post("/createSong", body)
      .then(() => {
        toast.success("Cancion cargada con exito");
      })
      .catch(() => {
        toast.success("Error inesperado");
      });
  };

  const createAlbum = () => {
    const { albumName, artistName, urlImage, songCodeAlbum } = state;

    if (!albumName || !artistName || !urlImage || !songCodeAlbum) {
      toast.warn("Existen campos vacios");
      return;
    }
    const body = {
      name: albumName,
      artist: artistName,
      image: urlImage,
      code: songCodeAlbum,
    };

    AxiosClient.post("/createAlbum", body)
      .then(() => {
        toast.success("Album Creado con Exito");
      })
      .catch(() => {
        toast.success("Error inesperado");
      });
  };

  return (
    user && (
      <div className="space-y-5 h-screen mt-[120px]">
        <SideNavAdmin
          onTabSelect={(selectedTab) => setTab(selectedTab)}
          tab={tab}
        />
        <div className="space-y-10 container-album p-10">
          {tab === 0 && !loadingServer && (
            <div>
              <h2 className="mb-5 title-action ">Lista de Albunes</h2>
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
                  placeholder="Ingrese código promocional"
                  label="Código"
                  name="songCodeAlbum"
                  value={state.songCodeAlbum}
                  onChange={handlerInputchange}
                />
                <InputsFile
                  label="Seleccione un archivo"
                  value={state.urlImage}
                  name="urlImage"
                  onChange={captUrlImage}
                />
              </div>

              <div className="lg:w-1/4 w-full mt-5">
                <Button onClick={createAlbum} label="Crear Album" />
              </div>
            </div>
          )}
          {tab === 2 && (
            <div className="space-y-20 flex flex-col items-center">
              <div className="title-action w-full text-center">
                Crear Cancion
              </div>
              <div className="lg:w-1/2 w-full space-y-10">
                <Inputs
                  placeholder="Coloque el nombre de la cancion"
                  label="Nombre de la cancion"
                  name="nameSong"
                  value={state.nameSong}
                  onChange={handlerInputchange}
                />

                <Inputs
                  placeholder="URL de la cancion proporcionado por firebase"
                  label="Introduzca la url de la cancion"
                  name="urlSong"
                  value={state.urlSong}
                  onChange={handlerInputchange}
                />

                <Select
                  options={Albums}
                  onChange={handlerInputchange}
                  value={state.albumId}
                  name="albumId"
                />

                <Inputs
                  placeholder="Ingrese código promocional"
                  label="Código"
                  name="songCodeSong"
                  value={state.songCodeSong}
                  onChange={handlerInputchange}
                />
              </div>
              {/* <InputFileAudio
                // name="audioFile"
                labelText="Cancion"
                // value={state.urlSong}
                // onChange={handlerInputchange}
              /> */}
              <div className="lg:w-1/4 w-full mt-5">
                <Button onClick={createSong} label="Cargar cancion" />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export async function getServerSideProps() {
  try {
    const response = await AxiosServer.get(`/getAlbums`);
    const Albums = response.data.data;

    return {
      props: {
        Albums,
        loadingServer: false,
      },
    };
  } catch (error) {
    console.error(error); // Agrega esta línea para depurar errores
    return {
      props: {
        Albums: [],
        loadingServer: false,
      },
    };
  }
}
export default Admin;

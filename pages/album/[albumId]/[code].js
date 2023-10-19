import { AxiosServer } from "@/services";
import { AlbumList, SongList } from "@/components";
import Head from "next/head";


function SongsPage({ Album, loadingServer, fromPromoPage }) {
  console.log(fromPromoPage, "fromPromoPage");
  return (
    <div className="container-album p-5 space-y-5">
      <Head>
        <title>
          {Album.name} - {Album.artist}
        </title>
        <meta
          name="description"
          content={`Escucha las canciones de ${Album.name} de ${Album.artist}.`}
        />
        <meta property="og:title" content={`${Album.name} - ${Album.artist}`} />
        <meta
          property="og:description"
          content={`Escucha las canciones de ${Album.name} de ${Album.artist}.`}
        />
        <meta property="og:image" content="/assets/images/imageUnknow.jpg" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <a href="/admin" className={`${fromPromoPage ? "hidden" : "go-back"}`}>
        <div className="flex space-x-2">
          <img src="/assets/icons/backarrow.svg" alt="" />
          <p>Regresar</p>
        </div>
      </a>
      <div className="flex space-x-5">
        <img
          src={"/assets/images/imageUnknow.jpg"}
          alt={`${Album.name} - ${Album.artist}`}
          width="150px"
          className="rounded-lg"
        />
        <div className="flex flex-col justify-between">
          <h2 className="title-action">{Album.name}</h2>
          <div className="flex space-x-5">
            <strong>{Album.artist}</strong>
            <p>{Album.songs.length} • canciones</p>
          </div>
        </div>
      </div>
      <hr />
      {!loadingServer && <SongList songs={Album.songs} />}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { albumId, code, fromPromoPage } = query;

  console.log(query, "jkasbdlkjabsdlkjbal");

  try {
    const response = await AxiosServer.get(
      `/getSongsByAlbumId?albumId=${albumId}&code=${code}`
    );
    const Album = response.data.data;

    return {
      props: {
        Album,
        loadingServer: false, // Cambiar a false cuando los datos estén listos
        fromPromoPage: fromPromoPage === "true",
      },
    };
  } catch (error) {
    return {
      props: {
        Album: [],
        loadingServer: false, // Cambiar a false en caso de error
        fromPromoPage: fromPromoPage === "true",
      },
    };
  }
}

export default SongsPage;

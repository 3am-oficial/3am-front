import { AxiosServer } from "@/services";
import { AlbumList, SongList } from "@/components";
import Head from "next/head";

function SongsPage({ Album, loadingServer }) {
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
      <a href="/admin" className="go-back">
        <div className="flex space-x-2">
          <img src="/assets/icons/backarrow.svg" alt="imageArrow" />
          <p>Regresar</p>
        </div>
      </a>
      <div className="flex space-x-5">
        <img
          src={"/assets/images/imageUnknow.jpg"}
          alt={`${Album.name} - ${Album.artist}`}
          className="rounded-lg w-10 h-10 md:w-20 md:h-20 lg:w-48 lg:h-48"
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
  const { query, res } = context;
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
    if (error.response && error.response.data.code === 401) {
      return {
        redirect: {
          destination: `/album/${albumId}?error=invalid`,
          permanent: false,
        },
      };
    } else {
      console.log(error.response.data.code, "kasndansdnajsdnajsadna");
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

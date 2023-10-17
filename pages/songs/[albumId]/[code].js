import { AxiosServer } from "@/services";
import { SongList } from "@/pages/components";

function SongsPage({ Songs, loadingServer }) {
  return (
    <div className="container-album p-5 space-y-5">
      <a href="/admin" className="go-back">
        <div className="flex space-x-2">
          <img src="/assets/icons/backarrow.svg" alt="" />
          <p>Regresar</p>
        </div>
      </a>
      <h2 className="title-action">Canciones</h2>
      {!loadingServer && <SongList songs={Songs} />}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { albumId, code } = query;
  let loadingServer = true;

  try {
    const response = await AxiosServer.get(
      `/getSongsByAlbumId?albumId=${albumId}&code=${code}`
    );
    const Songs = response.data.data;

    return {
      props: {
        Songs,
        loadingServer: !loadingServer,
      },
    };
  } catch (error) {
    return {
      props: {
        Songs: [],
        loadingServer: !loadingServer,
      },
    };
  }
  //   return {
  //     props: {
  //       albumId,
  //       code,
  //     },
  //   };
}

export default SongsPage;

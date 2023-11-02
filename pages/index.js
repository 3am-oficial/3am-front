export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center h-full">
      <video
        src="/assets/video/gift.mp4"
        autoPlay
        muted
        loop
        className="w-screen"
      ></video>

      <div className="h-screen flex items-center">
        <iframe
          height={"60%"}
          width={600}
          src="https://www.youtube.com/embed/-EcojxFLIPk?si=5y-S65cdQuRE3OdW"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="m-10 rounded-xl"
        ></iframe>
      </div>

      <img
        src="/assets/images/photo1.jpg"
        alt=""
        className="w-screen h-full m-5"
      />
      {/* <img
        src="/assets/images/photo2.jpg"
        alt=""
        className="w-full h-full m-5"
      /> */}
    </main>
  );
}

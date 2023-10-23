export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center h-full">
      <video
        src="/assets/video/gift1.mp4"
        autoPlay
        muted
        loop
        className="w-full"
      ></video>
      <iframe
        height="450px"
        src="https://www.youtube.com/embed/-EcojxFLIPk?si=5y-S65cdQuRE3OdW"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="m-10 rounded-xl w-full lg:w-1/2"
      ></iframe>

      <img
        src="/assets/images/photo1.jpg"
        alt=""
        className="w-full h-full m-5"
      />
      <img
        src="/assets/images/photo2.jpg"
        alt=""
        className="w-full h-full m-5"
      />
    </main>
  );
}

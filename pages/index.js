export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center h-full">
      <video
        src="/assets/video/gift.mp4"
        autoPlay
        muted
        loop
        className="w-full"
      ></video>

      <div className='py-12'></div>
      <iframe
        height="450px"
        src="https://www.youtube.com/embed/-EcojxFLIPk?si=5y-S65cdQuRE3OdW"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="m-10 rounded-xl w-full lg:w-1/2"
      ></iframe>
      <div className='py-12'></div>
      <video
        src="/assets/video/tour.mp4"
        autoPlay
        muted
        loop
        className="w-full"
      ></video>
    </main>
  );
}

import { Sections } from "@/components";

const Events = () => {
  const viewEvent = (url) => {
    window.open(url, "_blank");
  };

  const images = [
    {
      url: "https://www.passline.com/eventos/3am-tour-buenos-aires",
      img: "/assets/images/CARTEL SHOW BSAS 2025.png",
      data: [
        {
          title: "Buenos Aires",
          text: "C Complejo Art Media",
          date: "22 Marzo",
        },
      ],
    },
    {
      url: "https://www.seetickets.com/es/tour/3-am",
      img: "/assets/images/CARTEL SHOW ESPAÑA 2024.PNG",
      data: [
        {
          title: "Barcelona ",
          text: "Sala Wolf",
          date: "23 Mayo",
        },
        {
          title: "Madrid",
          text: "Sala But",
          date: "29 Mayo",
        },
      ],
    },
    {
      url: "https://www.ticketmaster.com.mx/event/3D005F8CE31D2B04",
      img: "/assets/images/CARTEL SHOW MEXICO 2024.jpg",
      data: [
        {
          title: "Ciudad de México",
          text: "Foro puebla",
          date: "11 Mayo",
        },
      ],
    },
  ];

  return (
    <div className="bg-black ">
      <div className="lg:w-9/12 mx-auto">
        <video
          src="/assets/video/tour.mp4"
          autoPlay
          muted
          loop
          className="w-full"
        ></video>
      </div>
      {images.map((image, index) => (
        <Sections
          img={image.img}
          event
          imgRight={index % 2 === 0}
          label="Ver evento"
          onClick={viewEvent}
          url={image.url}
          data={image.data}
        />
      ))}
    </div>
  );
};

export default Events;

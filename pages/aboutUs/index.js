import { Sections } from "@/components";

const AboutUs = () => {
  const info = [
    {
      img: "/assets/images/FOTO 3AM 2021.JPG",
      data: [
        {
          title: "3AM",
          text: `Richard y Christian Bermúdez sacuden la escena musical con buenas dosis de trap, hip hop y algo de pop, letras propias y un par de voces melodiosas.
  
Dos hermanos venezolanos se han convertido en el centro de atención con sus canciones y un nombre que se ha viralizado y forma parte de las listas de reproducciones de las principales plataformas digitales. 3AM es el proyecto de Richard y Christian Bermúdez, jóvenes cantautores que superan las 300 millones de reproducciones en Spotify.
      
`,
        },
      ],
    },
    {
      img: "/assets/images/photo.jpeg",
      data: [
        {
          title: "3AM",
          text: `En 2017, con apenas 17 años, los hermanos Bermúdez dejaron su país natal Venezuela para empezar de cero en Estados Unidos. En un pueblo a las afueras de Boston fueron recibidos por familiares y empezaron a ganarse la vida trabajando como meseros, repartidores, pintando casas o ejerciendo cualquier oficio que les permitiera cubrir sus necesidades básicas.`,
        },
      ],
    },
    {
      img: "/assets/images/coverart distancia byw-5.jpg",
      data: [
        {
          title: "3AM",
          text: `Como equipo, se alternaban los papeles: un día uno salía a trabajar mientras el otro se quedaba haciendo música y aunque nunca habían hecho canciones ni sabían cómo grabarse fueron aprendiendo viendo tutoriales en YouTube, siendo las 3:00 am la hora en la que más se inspiraban a crear, por lo que ese fue el nombre que decidieron ponerse como dúo: 3AM.
                
          “Por ti”, “Una Rosa”, “Vuela”, “No la encuentro”, “Emeycé” y “Siempre”, forman parte de sus éxitos. En paralelo, 3AM sigue creciendo en sus redes sociales, cuentan con casi 800K suscriptores en YouTube, más de 400K seguidores en Instagram y más de 2 millón de oyentes mensuales en Spotify.`,
        },
      ],
    },
  ];

  return (
    <div className="bg-black pt-[20px] ">
      {info.map((image, index) => (
        <Sections
          img={image.img}
          event
          imgRight={index % 2 === 0}
          data={image.data}
        />
      ))}
    </div>
  );
};

export default AboutUs;

import React, { useState } from "react";
import { useRouter } from "next/router";
import errorAnimation from "@/public/404.json";
import lock from "@/public/lock.json";
import Lottie from "lottie-react";
import { Inputs, Button } from "@/components";
import { toast } from "react-toastify";

const OnlySong = ({ SongId }) => {
  const [code, setCode] = useState("");
  const router = useRouter();
  const errorParam = router.query.error;

  const handlerInputChange = (e) => {
    const { value } = e.target;
    setCode(value);
  };
  const goToPage = () => {
    if (!code) {
      toast.error("Campos Vacio");
      return;
    }
    router.push(`/song/${SongId}/${code}`);
  };

  return (
    <div className="lg:h-auto h-full flex mt-[40px] justify-center items-center">
      <div className="container-album p-5 md:py-20 max-w-[900px] sm:h-auto h-screen mx-auto">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 py-3">
            Ingrese su Código Exclusivo
          </h2>
          <p className="mb-8">
            Ingrese el código exclusivo que se le ha proporcionado para acceder
            a contenido especial.
          </p>
          <div className="md:flex mt-12">
            <div className="md:w-1/2 p-4 flex justify-center items-center">
              <Lottie
                animationData={errorParam ? errorAnimation : lock}
                className="w-3/4"
                loop={true}
              />
            </div>

            <div className="md:w-1/2 p-4 flex flex-col justify-center items-center">
              <div className="w-full md:w-3/4">
                <Inputs
                  label="Codigo"
                  placeholder="Ingrese el código"
                  value={code}
                  onChange={handlerInputChange}
                />
                {errorParam && (
                  <span className="text-red-600 pt-1 flex">
                    Código Inválido
                  </span>
                )}
              </div>
              <div className="mt-4 w-full md:w-3/4">
                <Button label="Ingresar" onClick={goToPage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlySong;

export async function getServerSideProps(context) {
  const { query } = context;
  const { SongId } = query;

  return {
    props: {
      SongId,
    },
  };
}

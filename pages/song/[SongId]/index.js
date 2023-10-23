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
    <div className="lg:h-auto h-screen flex justify-center items-center">
      <div class="container-album p-5 md:py-20 max-w-[900px] mx-auto">
        <div class="max-w-screen-xl mx-auto text-center">
          <h2 class="text-3xl font-semibold mb-4">
            Ingrese su Código Exclusivo
          </h2>
          <p class="mb-8">
            Ingrese el código exclusivo que se le ha proporcionado para acceder
            a contenido especial.
          </p>
          <div class="md:flex mt-12">
            <div class="md:w-1/2 p-4 flex justify-center items-center">
              <Lottie
                animationData={errorParam ? errorAnimation : lock}
                className="w-3/4"
                loop={true}
              />
            </div>

            <div class="md:w-1/2 p-4 flex flex-col justify-center items-center">
              <div class="w-full md:w-3/4">
                <Inputs
                  label="Codigo VIP"
                  placeholder="Ingrese el código"
                  value={code}
                  onChange={handlerInputChange}
                />
                {errorParam && (
                  <span className="text-red-600 pt-1 flex">
                    Código VIP Inválido
                  </span>
                )}
              </div>
              <div class="mt-4 w-full md:w-3/4">
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

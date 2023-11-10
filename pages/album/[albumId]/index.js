import React, { useState } from "react";
import Lottie from "lottie-react";
import lock from "@/public/lock.json";
import errorAnimation from "@/public/404.json";
import { Inputs, Button } from "@/components";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const albumCode = ({ albumId }) => {
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
    router.push(`/album/${albumId}/${code}`);
  };

  return (
    <div className="lg:h-auto min-height-screen pt-[15px] justify-center items-center flex">
      <div className="container-album p-5 md:py-20 max-w-[900px] mx-auto sm:h-auto h-screen">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">
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

export default albumCode;

export async function getServerSideProps(context) {
  const { query } = context;
  const { albumId } = query;

  return {
    props: {
      albumId,
    },
  };
}

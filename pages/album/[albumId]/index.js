import React, { useState } from "react";
import Lottie from "lottie-react";
import lock from "@/public/lock.json";
import { Inputs, Button } from "@/components";
import { useRouter } from "next/router";

const albumCode = ({ albumId }) => {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handlerInputchange = (e) => {
    const { value } = e.target;
    setCode(value);
  };

  const goToPage = () => {
    if (!code) return;
    router.push(`/album/${albumId}/${code}?fromPromoPage=true`);
  };

  return (
    <div class="container-album lg:h-auto md:py-20 h-screen p-5 max-w-[900px] mx-auto flex justify-center items-center">
      <div class="max-w-screen-xl mx-auto text-center">
        <h2 class="text-3xl font-semibold mb-4">Ingrese su Código Exclusivo</h2>
        <p class="mb-8">
          Ingrese el código exclusivo que se le ha proporcionado para acceder a
          contenido especial.
        </p>
        <div class="md:flex mt-12">
          <div class="md:w-1/2 p-4 flex justify-center items-center">
            <Lottie animationData={lock} className="w-3/4" loop={true} />
          </div>

          <div class="md:w-1/2 p-4 flex flex-col justify-center items-center">
            <div class="w-full md:w-3/4">
              <Inputs
                label="Codigo VIP"
                placeholder="Ingrese el código"
                value={code}
                onChange={handlerInputchange}
              />
            </div>
            <div class="mt-4 w-full md:w-3/4">
              <Button label="Ingresar" onClick={goToPage} />
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

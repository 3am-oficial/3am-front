import React, { useState } from "react";
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
    <div className="container-album p-5 flex flex-col justify-center items-center space-y-10">
      <h3>Ingrese su Código Exclusivo</h3>
      <p>
        Ingrese el código exclusivo que se le ha proporcionado para acceder a
        contenido especial.
      </p>

      <div className="w-1/4">
        <Inputs
          label="Codigo VIP"
          placeholder="Ingrese el codigo"
          value={code}
          onChange={handlerInputchange}
        />
      </div>
      <div className="w-1/4">
        <Button label="Ingresar" onClick={goToPage} />
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

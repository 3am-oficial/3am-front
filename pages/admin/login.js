import React from "react";
import { Inputs, Button } from "../../components";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { auth } from "../../firebase/index";

const login = () => {
  const [state, setState] = useState({
    user: "",
    password: "",
    notification: false,
  });
  const router = useRouter();

  const handlerInputchange = (e) => {
    const { name, value: targetValue } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: targetValue,
    }));
  };
  const login = async () => {
    const { user, password } = state;

    if (!user || !password) {
      toast.warn("Existen Campos Vacios");
      return;
    }
    signInWithEmailAndPassword(auth, user, password)
      .then(() => {
        toast.success("Bienvenido");
        router.push(`/admin`);
      })
      .catch((err) => {
        if (err.message.includes("auth/invalid-email")) {
          toast.error("Email invalido");
        }

        if (err.message.includes("auth/invalid-login-credentials")) {
          toast.error("Credenciales invalidas");
        }

        if (err.message.includes("auth/user-disabled")) {
          toast.error("Usuario inhabilitado");
        }
      });
  };

  return (
    <div className="space-y-10 flex flex-col justify-center items-center not-complete-h-screen">
      <div className="container-album w-full max-w-[550px] p-20 sm:h-auto h-screen">
        <div className="w-full max-w-[400px] mx-auto sm:px-0 px-4  space-y-10 ">
          <Inputs
            name="user"
            label="Usuario"
            placeholder="Ingrese un usuario"
            onChange={handlerInputchange}
            value={state.user}
          />
          <Inputs
            name="password"
            label="Contraseña"
            placeholder="Ingrese una contraseña"
            onChange={handlerInputchange}
            type="password"
            value={state.password}
          />
        </div>

        <div className="w-full max-w-[400px] mx-auto sm:px-0 px-4  mt-12">
          <Button label="Iniciar Sesion" onClick={login} />
        </div>
      </div>
    </div>
  );
};

export default login;

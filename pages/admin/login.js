import React from "react";
import { Inputs, Button, Notification } from "../../components";
import { useState } from "react";

const login = ({ infoInputUser }) => {
  const [state, setState] = useState({
    user: "",
    password: "",
    notification: false,
  });

  const handlerInputchange = (e) => {
    const { name, value: targetValue } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: targetValue,
    }));
  };

  const login = () => {
    const body = {
      user: state.user,
      password: state.password,
    };
    console.log(body, "jkanskjnaslkdjn");
  };

  return (
    <div className="space-y-10 flex flex-col justify-center items-center">
      <div className="w-1/6 space-y-10">
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

        {state.notification && <Notification />}
      </div>

      <div className="w-1/6">
        <Button label="Iniciar Sesion" onClick={login} />
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default login;

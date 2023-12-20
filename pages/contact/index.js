import React, { useState } from "react";
import { toast } from "react-toastify";
import { AxiosClient } from "@/services";
import { Input, Textarea, Button } from "@/components";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleFilterChange = (value, name) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleMessage = () => {
    const { name, email, message } = form;
    if (!name || !email || !message) {
      toast.warn("Existen campos vacios");
      return;
    }

    AxiosClient.post("/sendMessage", body)
      .then(() => {
        toast.success("Mensaje enviado con exito");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        toast.success("Error inesperado");
      });
  };

  return (
    <div className="min-height-screen flex items-center md:pt-[75px]">
      <div className="lg:w-6/12 w-full md:p-16 p-8 md:pt-16 pt-[70px] mx-auto flex flex-col  items-center bg-dark md:rounded-lg">
        <h1 className="text-2xl mb-5">Ponte en contacto con nosotros</h1>

        <div className="flex md:flex-row flex-col items-center justify-center  h-full w-full mt-5 md:px-5">
          <div className="md:mr-8 flex flex-col w-full items-center md:items-start">
            <Input
              className="mb-8"
              label={"Nombre"}
              placeholder="Ingresa tu nombre"
              value={form.name}
              onChange={(e) => handleFilterChange(e.target.value, "name")}
            />

            <Input
              label={"Email"}
              placeholder="Ingresa tu email"
              value={form.email}
              onChange={(e) => handleFilterChange(e.target.value, "email")}
            />
          </div>

          <Textarea
            label={"Mensaje"}
            placeholder="Ingresa tu mensaje"
            value={form.message}
            onChange={(e) => handleFilterChange(e.target.value, "message")}
          />
        </div>
        <div className="flex items-center justify-center w-full md:max-w-full max-w-[300px] mt-8 md:px-5">
          <Button
            className="button-dark w-full"
            label="Enviar"
            onClick={handleMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

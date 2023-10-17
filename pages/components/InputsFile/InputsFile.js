import React from "react";
import { AxiosClient } from "@/services";

function InputFile({ label, name, onChange, value }) {
  // Manejar el cambio de archivo
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Realizar la lógica para enviar el archivo al servidor
      uploadFile(selectedFile);
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await AxiosClient.post("/uploadImage", formData);

      const imageUrl = response.data.imageUrl;

      if (onChange) {
        onChange(imageUrl);
      }
    } catch (error) {
      console.error("Error al cargar el archivo:", error);
    }
  };

  return (
    <div className="flex flex-col space-y-1">
      <div className="w-full">
        <label className="custom-file-input mb-5">
          {label}
          <input
            type="file"
            name={name}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </label>
        <p className="mt-5">
          {value ? value.name : "Ningún archivo seleccionado"}
        </p>
      </div>
    </div>
  );
}

export default InputFile;

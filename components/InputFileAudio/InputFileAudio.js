import React from "react";
import { AxiosClient } from "@/services";
import axios from "axios";

function InputFileAudio({ labelText, name, onChange, value }) {
  // Manejar el cambio de archivo
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Realizar la lógica para enviar el archivo al servidor
      uploadFile(selectedFile);
    }
  };

  const uploadFile = async (file) => {
    const audioFile = document.getElementById("file-input").files[0]; // Obtén el archivo de entrada de audio
    const formData = new FormData();
    formData.append("audio", audioFile, file); // Cambiar "image" a "audio" si es para archivos de audio.
    const config = {
      headers: {
        "Content-Type": "audio/mpeg", // Establece el tipo de contenido deseado
      },
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:5001/am-oficial/us-central1/uploadAudio",
        formData,
        config
      );

      const audioUrl = response.data.audioUrl;

      if (onChange) {
        onChange(audioUrl);
      }
    } catch (error) {
      console.error("Error al cargar el archivo:", error);
    }
  };

  return (
    <div className="flex flex-col space-y-1">
      <div className="w-full">
        <label className="custom-file-input mb-5">
          {labelText}
          <input
            id="file-input"
            accept="audio/mpeg audio/mp3"
            type="file"
            name={name}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </label>
        <p className="mt-5">
          {value ? value.name : "Ningún archivo de audio seleccionado"}
        </p>
      </div>
    </div>
  );
}

export default InputFileAudio;

import React from "react";

function InputFileAudio({ labelText, name, onChange, value }) {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile, "jndsaljndkjasnbdkja");
    if (selectedFile) {
      uploadAudio(selectedFile);
    }
  };

  const uploadAudio = async (file) => {
    try {
      let formData = new FormData();
      formData.append("audio", file);

      const response = await fetch(
        "http://127.0.0.1:5001/am-oficial/us-central1/uploadAudio",
        {
          method: "POST",
          body: formData,
          headers: {
            "content-type": "audio/mpeg",
          },
        }
      );

      // Resto del código
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

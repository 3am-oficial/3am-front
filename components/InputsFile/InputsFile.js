import React, { useState } from "react";
import { toast } from "react-toastify";

function InputFile({ label, name, onChange }) {
  const [file, setFile] = useState(null);
  const [load, setLoad] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const fileName = selectedFile.name;
      const fileExtension = fileName.split(".").pop();
      setFile(fileName);

      const reader = new FileReader();
      reader.onload = function () {
        const base64Data = reader.result.split(",")[1];
        uploadBase64Data(base64Data, fileExtension);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const uploadBase64Data = async (base64Data, extension) => {
    try {
      setLoad(true);
      const response = await fetch(
        "http://127.0.0.1:5001/am-oficial/us-central1/uploadImage",
        {
          method: "POST",
          body: JSON.stringify({ image: base64Data, extension }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const imageUrl = await response.json();
        setLoad(false);

        if (onChange) {
          onChange(imageUrl.url);
        }
      } else {
        setLoad(false);
        toast.error("Error al cargar el archivo");
      }
    } catch (error) {
      setLoad(false);
      toast.error("Error al cargar el archivo");
    }
  };

  return (
    <div className="flex flex-col space-y-1">
      <div className="w-full">
        {load && <div>Cargando Imagen</div>}
        {!load && (
          <>
            <label className="custom-file-input mb-5">
              {label}
              <input
                type="file"
                name={name}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </label>
            <p className="mt-5 text-white">
              {file || "Ningún archivo seleccionado"}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default InputFile;

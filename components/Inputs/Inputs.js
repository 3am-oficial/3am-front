import React from "react";

function Inputs({
  label,
  placeholder,
  onChange,
  value,
  name,
  type = "text",
  labelFile = "Seleccione un archivo",
}) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-left">{label}</label>
      <input
        type={type}
        name={name}
        className="input-component"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Inputs;

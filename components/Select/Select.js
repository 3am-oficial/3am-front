import React from "react";

const SelectGeneral = ({ options, name, value, onChange }) => {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="select-component"
    >
      <option disabled value={''}>
        <span>Seleccione un album</span>
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          <span>{option.name}</span>
        </option>
      ))}
    </select>
  );
};

export default SelectGeneral;

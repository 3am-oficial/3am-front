const Input = ({
  label,
  placeholder = "Buscar...",
  value,
  onChange,
  className,
}) => {
  return (
    <label className={`w-full max-w-[300px] ${className}`}>
      {label}
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent mt-2 max-w-[300px] w-full border border-white  h-10 px-4 rounded-md focus:outline-none transition duration-250"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Input;

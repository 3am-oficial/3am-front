const Input = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar..."
      className="bg-transparent max-w-[300px] border border-white w-full h-10 px-4 rounded-md focus:outline-none transition duration-250"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;

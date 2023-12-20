const Textarea = ({ label, placeholder = "Buscar...", value, onChange }) => {
  return (
    <label className="flex flex-col w-full lg:max-w-[500px] max-w-[300px] my-3">
      {label}
      <textarea
        rows="6"
        type="text"
        placeholder={placeholder}
        className="pt-2 bg-transparent mt-2 lg:max-w-[500px] max-w-[300px] border border-white px-4 rounded-md focus:outline-none resize-none"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Textarea;

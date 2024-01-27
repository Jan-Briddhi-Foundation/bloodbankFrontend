const input = ({ placeHolder, type, required, handleChange, name }) => {
  return (
    <input
      name={name}
      placeholder={placeHolder}
      type={type}
      onChange={handleChange}
      required={required}
    />
  );
};

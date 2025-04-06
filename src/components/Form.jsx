import { useState } from "react";

export const Form = () => {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Exprésate</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          style={{
            marginLeft: "10px",
          }}
        />
      </form>
      <br />
      <h3>Mostrando lo que el usuario escribe...</h3>
      <p>{inputValue}</p>
    </>
  );
};

import { useState } from "react";

export const FormHandler = () => {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Hola, ${name}`);
    setName("");
  };

  return (
    <>
      <h1>FormHandler</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label style={{ marginRight: "10px" }}>Nombre</label>
        <input type="text" value={name} onChange={handleInputChange} />
        <br />
        <button style={{ marginTop: "10px" }} type="submit">
          Enviar
        </button>
      </form>
    </>
  );
};

import { useState } from "react";

export const ButtonTextToggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h1>ButtonTextToggle</h1>
      <hr />
      {toggle ? <h2>Hola, es verdadero</h2> : <h2>Hola, es falso</h2>}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  );
};

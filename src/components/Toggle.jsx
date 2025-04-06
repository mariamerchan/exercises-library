import { useState } from "react";

export const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h1>Toggle</h1>
      {toggle ? <h3>Encendido</h3> : <h3>Apagado</h3>}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  );
};

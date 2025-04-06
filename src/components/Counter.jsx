import { useState } from "react";

export const Counter = ({ initialNum }) => {
  const [count, setCount] = useState(initialNum);

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  );
};

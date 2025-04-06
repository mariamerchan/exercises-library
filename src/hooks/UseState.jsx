import { useState } from "react";

export const UseState = () => {
  const [clicks, setClicks] = useState(0);

  const handleClicks = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <h1>UseState</h1>
      <h2># Clicks {clicks}</h2>
      <br />
      <button onClick={handleClicks}>Clic</button>
    </>
  );
};

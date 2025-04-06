import { useState, useEffect } from "react";

export const ColorChanger = () => {
  const [bgColor, setBgColor] = useState("#30075f");

  const handleColorChange = () => {
    setBgColor(bgColor === "#165c66" ? "#30075f" : "#165c66");
  };

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh" }}>
      <h1>ColorChanger</h1>
      <hr />
      <button style={{ margin: "10px 0" }} onClick={handleColorChange}>
        Cambiar color
      </button>
    </div>
  );
};

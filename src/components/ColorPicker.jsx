import { useState } from "react";

export const ColorPicker = () => {
  const [inputColor, setInputColor] = useState("#ea419b");

  const handleColorChange = (e) => {
    setInputColor(e.target.value);
  };

  return (
    <>
      <h1 style={{ color: inputColor }}>ColorPicker</h1>
      <label>Selecciona un color</label>
      <br />
      <input
        type="color"
        value={inputColor}
        onChange={handleColorChange}
        style={{ margin: "20px 0", height: "40px", width: "100px" }}
      />
    </>
  );
};

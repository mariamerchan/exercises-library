import { useState } from "react";

export const ShoppingList = ({ props }) => {
  const [items, setItems] = useState(props);
  const [newItem, setNewItem] = useState("");

  const addNewItem = () => {
    setItems([...items, newItem]);
    setNewItem(""); //limpiar input
  };

  return (
    <>
      <h1>ShoppingList</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Añade un nuevo artículo"
        style={{ margin: "20px 0", height: "30px" }}
      />
      <br />
      <button onClick={addNewItem}>Añadir</button>
    </>
  );
};

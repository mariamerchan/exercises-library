import { useReducer } from "react";

const initialState = { count: 100 };

const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "restart":
      return initialState; // Reinicia el contador al valor inicial
    default:
      state; // Retorna el estado actual por defecto
  }
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h1>UseReducer</h1>
      <h2>Count: {state.count}</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => dispatch({ type: "increment" })}>
          Incrementar
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrementar
        </button>
        <button onClick={() => dispatch({ type: "restart" })}>Reiniciar</button>
      </div>
    </>
  );
};

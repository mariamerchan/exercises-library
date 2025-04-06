import "./App.css";
import { Counter } from "./components/Counter";
import { Greeting } from "./components/Greeting";
import { List } from "./components/List";
import { Toggle } from "./components/Toggle";
import { Form } from "./components/Form";
import { ShoppingList } from "./components/ShoppingList";
import { ColorPicker } from "./components/ColorPicker";
import { UseState } from "./hooks/UseState";
import { UseEffect } from "./hooks/UseEffect";
import { UseRef } from "./hooks/UseRef";
import { UseReducer } from "./hooks/UseReducer";
import { AlertButton } from "./events/AlertButton";
import { FormHandler } from "./events/FormHandler";
import { ColorChanger } from "./events/ColorChanger";
import { ButtonTextToggle } from "./events/ButtonTextToggle";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Provider } from "react-redux";
import store from "../store";
import AppRoutes from "./Routes";
import { TodoList } from "./state/TodoList";
import { CssConcepts } from "./css/CssConcepts";

function App() {
  const stringsArr = ["manzana", "banana", "naranja", "fresa", "uva"];
  const shoppingItems = ["Laptop", "Smartphone", "Headphones", "Shoes"];
  const { isDarkMode, toggleTheme } = useTheme();

  document.body.className = isDarkMode ? "dark-theme" : "light-theme";

  return (
    <div>
      {/* <header>
        <h1>Practica JS y React</h1>
        <button style={{ height: "45px" }} onClick={toggleTheme}>
          Cambiar a modo {isDarkMode ? "claro" : "oscuro"}
        </button>
      </header> */}
      <div className="main-content">
        {/* .............Inicio componentes y Props............ */}
        {/* <Greeting name={"Fulano"} /> */}
        {/* <Counter initialNum={30} /> */}
        {/* <List stringsArr={stringsArr} /> */}
        {/* <Toggle /> */}
        {/* <Form /> */}
        {/* <ShoppingList props={shoppingItems} /> */}
        {/* <ColorPicker /> */}
        {/* .............Fin componentes y Props............ */}

        {/* .............Inicio hooks............ */}
        {/* <UseState /> */}
        {/* <UseEffect /> */}
        {/* <UseRef /> */}
        {/* <UseReducer /> */}
        {/* .............Fin hooks............ */}

        {/* .............Inicio Eventos............ */}
        {/* <AlertButton /> */}
        {/* <FormHandler /> */}
        {/* <ColorChanger /> */}
        {/* <ButtonTextToggle /> */}
        {/* .............Fin Eventos............ */}

        {/* .............Inicio Estado............ */}
        {/* <TodoList /> */}
        {/* .............Fin Estado............ */}

        {/* .............Inicio CSS............ */}
        {/* <CssConcepts /> */}
        {/* .............Fin CSS............ */}
      </div>
    </div>
  );
}

export default () => (
  <Provider store={store}>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </Provider>
);

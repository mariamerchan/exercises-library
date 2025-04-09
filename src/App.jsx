import "./App.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Provider } from "react-redux";
import store from "../store";
import AppRoutes from "./Routes";

const App = () => (
  <Provider store={store}>
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  </Provider>
);

export default App;

import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./src/redux/reducer/tasksReducer";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, removeTask } from "../redux/reducer/tasksReducer";

export const TodoList = () => {
  const [taskName, setTaskName] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName) {
      dispatch(addTask({ id: Date.now(), name: taskName }));
      setTaskName("");
    }
  };

  return (
    <>
      <h1>TodoList</h1>
      <form onSubmit={handleSubmit}>
        <input
          style={{ marginRight: "20px" }}
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nueva tarea"
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ margin: "20px " }}>
            {task.name}
            <button
              style={{ marginLeft: "20px" }}
              onClick={() => dispatch(removeTask({ id: task.id }))}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

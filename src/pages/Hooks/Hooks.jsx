import "./Hooks.css";
import exercisesData from "./exercises.json";

import { useState } from "react";
// import useStateHook from "../../hooks/UseStateHook";

const Hooks = () => {
  const [contentSelected, setContentSelected] = useState("Concept");

  const hookTitles = [
    "Concept",
    ...exercisesData.exercises.map((exercise) => exercise.title),
  ];

  const selectedExercise = exercisesData.exercises.find(
    (exercise) => exercise.title === contentSelected
  );
  return (
    <>
      <div className="hooks__container">
        <aside>
          {hookTitles.map((item, index) => (
            <button key={index} onClick={() => setContentSelected(item)}>
              {item}
            </button>
          ))}
        </aside>
        <div className="hooks__content">
          <h1>Hooks</h1>
          <article className="dynamic__content">
            {selectedExercise ? (
              <>
                <h2>{selectedExercise.title}</h2>
                <p>{selectedExercise.description}</p>
              </>
            ) : (
              <h2>No exercise selected</h2>
            )}
            <h2></h2>
          </article>
        </div>
      </div>
    </>
  );
};

export default Hooks;

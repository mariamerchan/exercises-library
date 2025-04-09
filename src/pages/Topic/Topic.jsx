import { useParams } from "react-router";
import data from "../../data/exercises.js";
import { useState } from "react";
import "./Topic.css";

const TopicPage = () => {
  const { categoryId, categoryName } = useParams();
  const category = data.categories.find(
    (cat) => cat.id.toString() === categoryId && cat.name === categoryName
  );

  const [selectedSubtopic, setSelectedSubtopic] = useState(
    category?.subtopics?.[0] || null
  );

  const [contentSelected, setContentSelected] = useState("Concept");

  if (!category) return <div>No se encontró la categoría</div>;

  const contentTabs = selectedSubtopic
    ? ["Concept", ...(selectedSubtopic.exercises?.map((e) => e.title) || [])]
    : [];

  const selectedExercise = selectedSubtopic?.exercises?.find(
    (ex) => ex.title === contentSelected
  );

  return (
    <div className="topic__container">
      <aside className="topic__sidebar">
        <h2>{category.name}</h2>
        {category.subtopics.map((sub) => (
          <button
            key={sub.id}
            onClick={() => {
              setSelectedSubtopic(sub);
              setContentSelected("Concept");
            }}
            className={selectedSubtopic?.id === sub.id ? "active" : ""}
          >
            {sub.title}
          </button>
        ))}
      </aside>

      <main className="topic__main">
        <h1>{selectedSubtopic?.title}</h1>

        <nav className="topic__tabs">
          {contentTabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setContentSelected(tab)}
              className={tab === contentSelected ? "active" : ""}
            >
              {tab}
            </button>
          ))}
        </nav>

        <section className="topic__content">
          {contentSelected === "Concept" ? (
            <>
              {selectedSubtopic?.concept && (
                <p>
                  <strong>Concepto:</strong> {selectedSubtopic.concept}
                </p>
              )}
              {selectedSubtopic?.analogy && (
                <p>
                  <strong>Analogía:</strong> {selectedSubtopic.analogy}
                </p>
              )}
              {selectedSubtopic?.description && (
                <p>{selectedSubtopic.description}</p>
              )}
            </>
          ) : selectedExercise ? (
            <>
              <h3>{selectedExercise.title}</h3>
              <p>{selectedExercise.description}</p>
            </>
          ) : (
            <p>No se encontró contenido.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default TopicPage;

import "./Home.css";
import { Link, redirect } from "react-router";
import data from "../../data/exercises.js";

const Home = () => {
  const books = [
    { title: "Hooks", route: "/Hooks" },
    { title: "Events", route: "/Events" },
    { title: "Context", route: "/Context" },
    { title: "CSS", route: "/Css" },
    { title: "State", route: "/State" },
    { title: "Redux", route: "/Redux" },
  ];
  return (
    <>
      <h1>
        A fun way to <span>study</span>, <br /> while I truly walk the talk
      </h1>
      <h2>Ale Exercises Library</h2>
      <div className="home-books-container">
        {data.categories.map((category) => (
          <Link
            to={`/topic/${category.name}/${category.id}`}
            key={category.id}
            className="home-book-card-link"
          >
            <div className="home-book-card">
              <h3>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;

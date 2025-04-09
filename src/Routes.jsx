import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Home from "./pages/Home/Home.jsx";
import Topic from "./pages/Topic/Topic.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="topic/:categoryName/:categoryId" element={<Topic />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Home from "./pages/Home/Home.jsx";
import Hooks from "./pages/Hooks/Hooks.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hooks" element={<Hooks />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

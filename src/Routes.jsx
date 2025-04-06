import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import Home from "./pages/Home/Home.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

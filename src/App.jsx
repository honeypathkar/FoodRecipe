import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Recipe from "./components/Recipe.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/recipe" element={<Recipe />} />
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

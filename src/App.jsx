import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Recipe from "./components/Recipe.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./components/Favourite.jsx";
import Alert from "./components/Alert.jsx";
import BottomBar from "./components/BottomBar.jsx";

function App() {
  //Initializing mode state for changing mode
  const [mode, setmode] = useState("light");

  // Toggle Mode Function
  const toggleMode = () => {
    let newMode;
    if (mode === "light") {
      newMode = "dark";
      document.body.style.backgroundColor = "#161925";
    } else {
      newMode = "light";
      document.body.style.backgroundColor = "#D3C5E5";
    }
    setmode(newMode);
    localStorage.setItem("mode", newMode); // Save mode to local storage
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode) {
      setmode(storedMode);
      if (storedMode === "dark") {
        document.body.style.backgroundColor = "#161925";
      } else {
        document.body.style.backgroundColor = "#D3C5E5";
      }
    }
  }, []);

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert mode={mode} />
        <Routes>
          <Route exact path="/" element={<Home mode={mode} />} />
          <Route exact path="/home" element={<Home mode={mode} />} />
          <Route exact path="/recipe" element={<Recipe mode={mode} />} />
          <Route exact path="/favourite" element={<Favorites mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
        <BottomBar mode={mode} />
      </Router>
    </>
  );
}

export default App;

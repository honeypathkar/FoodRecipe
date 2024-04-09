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

function App() {
  //Initializing Fav. state for  adding recipe into fav.
  const [favorites, setFavorites] = useState([]);
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

  useEffect(() => {
    showData();
  }, []);

  //Add To fav. Function for adding racipe into fav. section
  const addToFavorites = (recipe) => {
    const newFavorites = [...favorites, recipe];
    setFavorites(newFavorites);
    saveData([...newFavorites]);
  };
  //Remove from fav. Function for removing racipe into fav. section
  const removeFromFavorites = (recipeUrl) => {
    const updatedFavorites = favorites.filter(
      (fav) => fav.recipeUrl !== recipeUrl
    );
    setFavorites(updatedFavorites);
    saveData([...updatedFavorites]);
  };

  //Funciton for check if recipe is in the fav. or not

  const isFavorite = (recipeUrl) => {
    return favorites.some((fav) => fav.recipeUrl === recipeUrl);
  };

  //Save data function for storing fav. item after the reload
  const saveData = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  //Getting  data function for getting fav. item after the reload
  const showData = () => {
    const storedData = localStorage.getItem("favorites");
    if (storedData) {
      setFavorites(JSON.parse(storedData));
    }
  };

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert mode={mode} />
        <Routes>
          <Route exact path="/" element={<Home mode={mode} />} />
          <Route exact path="/home" element={<Home mode={mode} />} />
          <Route
            exact
            path="/recipe"
            element={
              <Recipe
                favorites={favorites}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                isFavorite={isFavorite}
                mode={mode}
              />
            }
          />
          <Route
            exact
            path="/favourite"
            element={
              <Favorites
                favorites={favorites}
                removeFromFavorites={removeFromFavorites}
                mode={mode}
              />
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

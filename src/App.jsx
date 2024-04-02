import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Recipe from "./components/Recipe.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Favorites from "./components/Favourite.jsx";

function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    showData();
  }, []); 

  const addToFavorites = (recipe) => {
    // setFavorites((prevFavorites) => [...prevFavorites, recipe]);
    const newFavorites = [...favorites, recipe];
    setFavorites(newFavorites);
    saveData([...newFavorites]);
  };

  const removeFromFavorites = (recipeUrl) => {
    const updatedFavorites = favorites.filter(
      (fav) => fav.recipeUrl !== recipeUrl
    );
    setFavorites(updatedFavorites);
    saveData([...updatedFavorites]);
  };

  const isFavorite = (recipeUrl) => {
    return favorites.some((fav) => fav.recipeUrl === recipeUrl);
  };

  const saveData = (favorites) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  const showData = () => {
    const storedData = localStorage.getItem("favorites");
    if (storedData) {
      setFavorites(JSON.parse(storedData));
    }
  };

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route
            exact
            path="/recipe"
            element={
              <Recipe
                favorites={favorites}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                isFavorite={isFavorite}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/favourite"
            element={
              <Favorites
                favorites={favorites}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                isFavorite={isFavorite}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

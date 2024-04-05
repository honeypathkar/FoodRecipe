import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";

export default function Recipe(props) {
  const {
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    mode
  } = props;
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const app_id = "22aae2a3";
  const api_key = import.meta.env.VITE_REACT_APP_RECIPE_API;

  const fetchRecipe = async () => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=indian%20food&app_id=${app_id}&app_key=${api_key}`;
    setLoading(true);
    const response = await fetch(url);
    const result = await response.json();
    if (result.hits.length === 0) {
      setError(true);
    } else {
      const recipes = result.hits.map((hit) => hit.recipe);
      setRecipe(recipes);
      setLoading(false);
      setError(false);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  const fetchRecipeBySearch = async () => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${search}&app_id=${app_id}&app_key=${api_key}`;
    setLoading(true);
    const response = await fetch(url);
    const result = await response.json();
    const recipes = result.hits.map((hit) => hit.recipe);
    setRecipe(recipes);
    setLoading(false);
    setError(recipes.length === 0);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipeBySearch();
  };

  return (
    <div className="container my-28">
      <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input
          className={`form-control me-2 ${
            mode === "dark" ? "placeholder-light" : "placeholder-dark"
          }`}
          type="search"
          placeholder="Enter Food Name for recipe..."
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
          style={{backgroundColor: mode==="light"?"#d3c2ea":"#13162d"}}
        />
        <button className={`btn btn-outline-${mode==="light"?"dark":"light"}`} type="submit">
          Search
        </button>
      </form>

      {loading && <Spinner />}
      {error && (
        <div
          className="error text-danger"
          style={{
            fontSize: "xxx-large",
            textAlign: "center",
            marginTop: "150px",
          }}
        >
          Recipe for search result "{search}" not Found. Try again!
        </div>
      )}

      {/* Render Favorites component with favorites state */}

      <div className="row my-4">
        {!loading &&
          recipe.map((element, index) => (
            <div key={index} className="col-md-3">
              <RecipeCard
                title={element.label}
                imageUrl={element.image}
                ingredients={element.ingredientLines}
                recipeUrl={element.url}
                source={element.source}
                isFav={isFavorite}
                addToFavorite={addToFavorites} // Correct prop name
                removeFromFavorite={removeFromFavorites}
                mode={mode}
              />
            </div>
          ))}
      </div>
      <style jsx = "true">{`
      .placeholder-light::placeholder {
        color: #ccc; /* Light color for placeholder text */
      }
      
      .placeholder-dark::placeholder {
        color: #666; /* Dark color for placeholder text */
      }
      `}</style>
    </div>
  );
}

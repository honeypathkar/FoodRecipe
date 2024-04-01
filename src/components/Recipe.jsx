import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";

export default function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const app_id = "22aae2a3";
  const api_key = import.meta.env.VITE_REACT_APP_RECIPE_API;

  const fetchRecipe = async () => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=indian%20food&app_id=${app_id}&app_key=${api_key}`;
    setLoading(true);
    const response = await fetch(url);
    const result = await response.json();
    const recipes = result.hits.map((hit) => hit.recipe);
    setRecipe(recipes);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipe();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const fetchRecipeBySearch = async () => {
    const url = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${search}&app_id=${app_id}&app_key=${api_key}`;
    setLoading(true);
    const response = await fetch(url);
    const result = await response.json();
    const recipes = result.hits.map((hit) => hit.recipe);
    setRecipe(recipes);
    setLoading(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipeBySearch();
  };

  return (
    <div className="container my-28">
      <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Enter Food Name for recipe..."
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-dark" type="submit">
          Search
        </button>
      </form>

      {loading && <Spinner />}
      <div className="row my-20">
        {!loading &&
          recipe.map((element, index) => (
            <div key={index} className="col-md-3">
              <RecipeCard
                title={element.label}
                imageUrl={element.image}
                ingredients={element.ingredientLines} // Pass the ingredient details
                recipeUrl={element.url}
                source={element.source}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

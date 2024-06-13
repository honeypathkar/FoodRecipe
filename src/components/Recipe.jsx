import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { useAuth0 } from "@auth0/auth0-react";

export default function Recipe(props) {
  const { mode } = props;
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const { isAuthenticated } = useAuth0();

  //Hiding api key and app id
  const app_id = import.meta.env.VITE_REACT_APP_REACIPE_APP_ID;
  const api_key = import.meta.env.VITE_REACT_APP_RECIPE_API;

  //Intializing fetchREcipe function it runs by default on first opening of app
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

  //Intializing fetchRecipeBySearch function it runs when user click on search button
  const fetchRecipeBySearch = async () => {
    if (search === "") {
      toast.info("Please enter the recipe name");
    }
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
    <>
      {!isAuthenticated && (
        <div
          class={`alert alert-${mode === "light" ? "light" : "dark"}`}
          role="alert"
        >
          You have to Login in for adding Recipes to Favorite
        </div>
      )}

      <div className="container my-12">
        <form className="d-flex" role="search" onSubmit={handleSearch}>
          <input
            className={`form-control me-2 ${
              mode === "dark" ? "placeholder-light" : "placeholder-dark"
            }`}
            type="search"
            placeholder="Enter Food Name for recipe..."
            aria-label="Search"
            onChange={(e) => setSearch(e.target.value)}
            style={{
              backgroundColor: mode === "light" ? "#d3c2ea" : "#13162d",
              color: mode === "dark" ? "white" : "black",
            }}
          />
          <button
            className={`btn btn-outline-${mode === "light" ? "dark" : "light"}`}
            type="submit"
          >
            Search
          </button>
        </form>

        {loading && <Spinner mode={mode} />}
        {error && (
          <div
            className={`error text-${mode === "light" ? "dark" : "light"}`}
            style={{
              fontSize: "xxx-large",
              textAlign: "center",
              marginTop: "150px",
            }}
          >
            Recipe not Found. Try again!
          </div>
        )}

        <div className="row my-4">
          {!loading &&
            recipe.map((element, index) => (
              <div key={index} className="col-md-3">
                {/* Sending data into recipeCard */}
                <RecipeCard
                  title={element.label}
                  imageUrl={element.image}
                  ingredients={element.ingredientLines}
                  recipeUrl={element.url}
                  source={element.source}
                  // isFav={isFavorite}
                  // addToFavorite={addToFavorites} // Correct prop name
                  // removeFromFavorite={removeFromFavorites}
                  mode={mode}
                />
              </div>
            ))}
        </div>
        <style jsx="true">{`
          .placeholder-light::placeholder {
            color: #ccc; /* Light color for placeholder text */
          }

          .placeholder-dark::placeholder {
            color: #666; /* Dark color for placeholder text */
          }
        `}</style>
      </div>
    </>
  );
}

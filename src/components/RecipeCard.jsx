import React from "react";
import { toast } from "react-toastify"; // Import toast function
import "react-toastify/dist/ReactToastify.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { addToFav } from "../store/slices/favSlice";
import { useAuth0 } from "@auth0/auth0-react";

export default function RecipeCard(props) {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const fav = useSelector((state) => state.fav.fav);
  const {
    title,
    imageUrl,
    ingredients,
    recipeUrl,
    source,
    // addToFavorite,
    // isFavorite,
    mode,
  } = props;

  const isFavorite = (recipeUrl) => {
    return fav.some((fav) => fav.recipeUrl === recipeUrl);
  };

  //Add to Fav. function for adding item itno fav. list
  const handleFavoriteClick = () => {
    dispatch(
      addToFav({
        title,
        imageUrl,
        ingredients,
        recipeUrl,
        source,
      })
    );
    //Using react toast for ashowing alert if item add to fav.
    toast.success("Added to Favorites");
  };

  return (
    <div>
      <div
        className="card my-3"
        style={{
          backgroundColor: mode === "light" ? "#bda6da" : "#13162d",
          color: mode === "light" ? "black" : "white",
        }}
      >
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-xl">
            <b>{title}</b>
          </h5>
          <br />
          <footer className="blockquote-footer">
            Recipe Provided By <cite title="Source Title">{source}</cite>
          </footer>
        </div>
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item text-xl"
            style={{
              backgroundColor: mode === "light" ? "#bda6da" : "#13162d",
              color: mode === "light" ? "black" : "white",
            }}
          >
            <b>
              {ingredients.length} Ingredients <span aria-hidden="true">→</span>{" "}
            </b>
          </li>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index} className="pl-5 py-1">
                {ingredient}
              </li>
            ))}
          </ul>
        </ul>
        <div className="card-body">
          <a
            href={recipeUrl}
            className={`card-link btn btn-outline-${
              mode === "light" ? "dark" : "light"
            } mr-14 mb-2`}
          >
            View Full Recipe <span aria-hidden="true">→</span>
          </a>
          {isAuthenticated && (
            <button
              className={`btn btn-outline-${
                mode === "light" ? "dark" : "light"
              }`}
              onClick={handleFavoriteClick}
              disabled={isFavorite(recipeUrl)}
            >
              {isFavorite(recipeUrl)
                ? "Added to Favorites"
                : "Add to Favorites"}{" "}
              <FavoriteIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFav } from "../store/slices/favSlice";
import { useAuth0 } from "@auth0/auth0-react";

// Fav. component here the fav. item show

const Favorites = (props) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();
  const fav = useSelector((state) => state.fav.fav);
  const { mode } = props;

  // Item remove Function
  const handleRemove = (recipeUrl) => {
    dispatch(removeFromFav(recipeUrl));
    // using toast for alert if item removed from fav.
    toast.success("Removed from Favorites");
  };

  if (!isAuthenticated) {
    return (
      <div className="container my-60 text-center" style={{ color: mode === "light" ? "dark" : "white" }}>
        <p className="text-4xl">You need to log in to view your favorite items</p>
        <button
          className={`text-2xl btn btn-outline-${mode === "light" ? "dark" : "light"} mt-5`}
          onClick={loginWithRedirect}
        >
          Log In
        </button>
      </div>
    );
  }

  return (
    <div className="container my-12">
      {fav.length === 0 ? (
        <div
          className="text-center my-60"
          style={{ color: mode === "light" ? "dark" : "white" }}
        >
          <p className="text-4xl">No favorite items yet</p>
          <Link
            to="/recipe"
            className={`text-2xl btn btn-outline-${
              mode === "light" ? "dark" : "light"
            } mt-5`}
          >
            Add Items <AddIcon />
          </Link>
        </div>
      ) : (
        <div className="row">
          {fav.map((recipe, index) => (
            <div key={index} className="col-md-3">
              <div
                className="card my-3"
                style={{
                  backgroundColor: mode === "light" ? "#bda6da" : "#13162d",
                  color: mode === "light" ? "dark" : "white",
                }}
              >
                <img
                  src={recipe.imageUrl}
                  className="card-img-top"
                  alt={recipe.title}
                />
                <div className="card-body">
                  <h5 className="card-title text-xl">
                    <b>{recipe.title}</b>
                  </h5>
                  <br />
                  <footer className="blockquote-footer">
                    Recipe Provided By{" "}
                    <cite title="Source Title">{recipe.source}</cite>
                  </footer>
                </div>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item text-xl"
                    style={{
                      backgroundColor: mode === "light" ? "#bda6da" : "#13162d",
                      color: mode === "light" ? "dark" : "white",
                    }}
                  >
                    <b>
                      {recipe.ingredients.length} Ingredients{" "}
                      <span aria-hidden="true">→</span>{" "}
                    </b>
                  </li>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="pl-5 py-1">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </ul>
                <div className="card-body">
                  <a
                    href={recipe.recipeUrl}
                    className={`card-link btn btn-outline-${
                      mode === "light" ? "dark" : "light"
                    } mb-2`}
                  >
                    View Full Recipe <span aria-hidden="true">→</span>
                  </a>
                  <button
                    className={`btn btn-outline-${
                      mode === "light" ? "dark" : "light"
                    }`}
                    onClick={() => handleRemove(recipe.recipeUrl)}
                  >
                    Remove from Favorites <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

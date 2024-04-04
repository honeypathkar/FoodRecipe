import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast function
import "react-toastify/dist/ReactToastify.css";


const Favorites = (props) => {
  const { favorites, removeFromFavorites, showAlert} = props;

  const handleRemove = (recipeUrl) => {
    removeFromFavorites(recipeUrl);
    toast.success("Removed from Favorites");
  };

  return (
    <div className="container my-28">
      {favorites.length === 0 ? (
        <div className="text-center my-60">
          <p className="text-4xl">No favorite items yet</p>
          <Link
            to="/recipe"
            className="text-2xl btn bg-[#D3C5E5] border border-black hover:border-white hover:bg-[#735DA5] hover:text-white mt-5"
          >
            Add Items <span aria-hidden="true">→</span>
          </Link>
        </div>
      ) : (
        <div className="row">
          {favorites.map((recipe, index) => (
            <div key={index} className="col-md-3">
              <div className="card my-3 bg-[#bda6da]">
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
                  <li className="list-group-item text-xl bg-[#bda6da]">
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
                    className="card-link btn btn bg-[#baa7d2] border border-black hover:border-white hover:bg-[#735DA5] hover:text-white mb-2"
                  >
                    View Full Recipe <span aria-hidden="true">→</span>
                  </a>
                  <button
                    className="btn btn bg-[#baa7d2] border border-black hover:border-white hover:bg-[#735DA5] hover:text-white"
                    onClick={() => handleRemove(recipe.recipeUrl)}
                  >
                    Remove from Favorites
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

import React from "react";

export default function RecipeCard(props) {
  const {
    title,
    imageUrl,
    ingredients,
    recipeUrl,
    source,
    isFav,
    addToFavorite,
    removeFromFavorite,
  } = props;

  const handleFavoriteClick = () => {
    if (isFav(recipeUrl)) {
      removeFromFavorite(recipeUrl);
    } else {
      addToFavorite({
        title,
        imageUrl,
        ingredients,
        recipeUrl,
        source,
      });
    }
  };

  return (
    <div>
      <div className="card my-3 bg-[#e0f0df]">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-xl">
            <b>{title}</b>
          </h5>
          {/* <p className="card-text">
                        Source {source}
                    </p> */}
          <br />
          <footer className="blockquote-footer">
            Recipe Provided By <cite title="Source Title">{source}</cite>
          </footer>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-xl bg-[#e0f0df]">
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
          <a href={recipeUrl} className="card-link btn btn-outline-dark">
            View Full Recipe <span aria-hidden="true">→</span>
          </a>
          <button
            className="btn btn-outline-dark"
            onClick={handleFavoriteClick}
          >
            {isFav(recipeUrl) ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}

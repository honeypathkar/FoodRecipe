import React from "react";

export default function RecipeCard(props) {
  const {
    title,
    imageUrl,
    ingredients,
    recipeUrl,
    source,
    addToFavorite,
    isFav,
  } = props;

  const handleFavoriteClick = () => {
    addToFavorite({
      title,
      imageUrl,
      ingredients,
      recipeUrl,
      source,
    });
  };

  return (
    <div>
      <div className="card my-3 bg-[#bda6da]">
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
          <li className="list-group-item text-xl bg-[#bda6da]">
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
          <a href={recipeUrl} className="card-link btn bg-[#baa7d2] border border-black hover:border-white hover:bg-[#735DA5] hover:text-white mr-1">
            View Full Recipe <span aria-hidden="true">→</span>
          </a>
          <button
            className="btn bg-[#baa7d2] border border-black hover:border-white hover:bg-[#735DA5] hover:text-white"
            onClick={handleFavoriteClick}
            disabled={isFav(recipeUrl)}
          >
            {isFav(recipeUrl) ? "Added to Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}

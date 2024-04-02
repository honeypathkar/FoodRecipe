import React from "react";

const Favorites = (props) => {
  const {favorites} = props;

  return (
    <div className="container my-28">
      <h1 className="text-6xl text-center">Favorites</h1>
      {favorites.length === 0 ? (
        <p className="text-4xl text-center pt-2">No favorite items yet</p>
      ) : (
        <div className="row my-20">
          {favorites.map((recipe, index) => (
            <div key={index} className="col-md-3">
              <div className="card my-3 bg-[#e0f0df]">
                <img src={recipe.imageUrl} className="card-img-top" alt={recipe.title} />
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
                  <li className="list-group-item text-xl bg-[#e0f0df]">
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
                    className="card-link btn btn-outline-dark"
                  >
                    View Full Recipe <span aria-hidden="true">→</span>
                  </a>
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

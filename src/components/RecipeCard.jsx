import React from "react";

export default function RecipeCard(props) {
  const { title, imageUrl, ingredients, recipeUrl, source } = props;

  return (
    <div>
      {/* <div className="card my-3">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-primary"
          style={{ left: "93%", zIndex: "1" }}
        >
          {source}
        </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            <b>{title}</b>
          </h5>
          <h6 className="card-text text-xl">
            {ingredients.length} Ingredients:
          </h6>
          <hr />
          <ol>
            {ingredients.map((ingredient, index) => (
              <li key={index} className="pl-3 py-1">
                {ingredient}
              </li>
            ))}
          </ol>
          <a
            href={recipeUrl}
            className="btn btn-outline-dark mx-3 mt-2 justify-center items-center"
            target="_blank"
          >
            View Full Recipe
          </a>
        </div>
      </div> */}
      <div class="card my-3">
        <img src={imageUrl} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          {/* <p class="card-text">
            Source {source}
          </p> */}
          <br/>
          <footer class="blockquote-footer">
            Recipe Provided By <cite title="Source Title">{source}</cite>
          </footer>
        </div>
        <ul class="list-group list-group-flush">
          <li className="list-group-item text-xl">
            {ingredients.length} Ingredients:
          </li>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index} className="pl-5 py-1">
                {ingredient}
              </li>
            ))}
          </ul>
        </ul>
        <div class="card-body">
          <a href={recipeUrl} class="card-link btn btn-outline-dark">
            View Full Recipe <span aria-hidden="true">→</span>
          </a>
          {/* <a href="#" class="card-link btn btn-outline-dark">
            Another link <span aria-hidden="true">→</span>
          </a> */}
        </div>
      </div>
    </div>
  );
}

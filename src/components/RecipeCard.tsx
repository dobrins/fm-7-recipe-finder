import { Link } from "react-router-dom";
import RecipeStats from "./RecipeStats";
import type { Recipe } from "../data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <li className="recipe-card">
      <article>
        <img
          src={recipe.image.small}
          alt={recipe.overview}
          className="recipe-card__img"
          loading="lazy"
        />
        <div>
          <h2
            className="recipe-card__title"
            title={recipe.title}>
            {recipe.title}
          </h2>
          <p className="recipe-card__overview">{recipe.overview}</p>
        </div>
        <RecipeStats recipe={recipe} />
        <Link
          className="recipe-card__link"
          to={`/recipes/${recipe.slug}`}
          onClick={() => {
            window.scroll(0, 0);
          }}
        />
        <button className="button button--round">View Recipe</button>
      </article>
    </li>
  );
};

export default RecipeCard;

import { Link } from "react-router-dom";
import { recipes } from "../data/recipes";
// import { asset } from "../utils/asset";

export default function RecipeList() {
  return (
    <ul className="recipes">
      {recipes.map((r) => (
        <li key={r.id}>
          <article>
            <Link
              to={`/recipes/${r.slug}`}
              className="recipe">
              <img
                src={r.image.small}
                alt={r.title}
                className="recipe__img"
                loading="lazy"
              />
              <h2
                className="recipe__name"
                title={r.title}>
                {r.title}
              </h2>
              <p className="recipe__overview">{r.overview}</p>
            </Link>
          </article>
        </li>
      ))}
    </ul>
  );
}

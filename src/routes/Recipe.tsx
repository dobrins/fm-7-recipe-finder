import { useParams, Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { recipes } from "../data/recipes";
import RecipeStats from "../components/RecipeStats";
import { useTitle } from "../hooks/useTitle";
import NotFoundRecipe from "../components/NotFoundRecipe";

type MoreRecipesProps = {
  recipe: number;
};

const RecipeDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find((r) => r.slug === slug);

  useTitle(recipe?.title ?? "");

  if (!recipe) {
    return <NotFoundRecipe />;
  }

  return (
    <>
      <article className="recipe">
        <p className="breadcrumb">
          <Link
            to="/recipes"
            className="underline">
            Recipes
          </Link>{" "}
          <span>/</span>
          <span>{recipe.title}</span>
        </p>

        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={recipe.image.large}
            type="image/webp"
          />
          <img
            src={recipe.image.small}
            alt={recipe.overview}
            loading="lazy"
            decoding="async"
          />
        </picture>

        <div className="recipe__content">
          <h1>{recipe.title}</h1>
          <p>{recipe.overview}</p>
          <RecipeStats
            recipe={recipe}
            biggerFont
          />
          <section>
            <h2 className="recipe__list-title">Ingredients:</h2>
            <ul className="recipe__list-items">
              {recipe.ingredients.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="recipe__list-title">Instructions:</h2>
            <ol className="recipe__list-items">
              {recipe.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </section>
        </div>
      </article>
      <hr className="divider" />
      <MoreRecipes recipe={recipe.id} />
    </>
  );
};

// LOCAL COMPONENT

const MoreRecipes = ({ recipe }: MoreRecipesProps) => {
  return (
    <div className="more-recipes">
      <h2>More recipes</h2>
      <ul className="recipes-list">
        {recipes
          .filter((r) => r.id !== recipe)
          .slice(0, 3)
          .map((r) => (
            <RecipeCard
              recipe={r}
              key={r.id}
            />
          ))}
      </ul>
    </div>
  );
};

export default RecipeDetail;

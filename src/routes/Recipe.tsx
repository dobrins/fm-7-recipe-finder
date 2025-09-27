import { useParams, Link } from "react-router-dom";
import { recipes } from "../data/recipes";
// import { asset } from "../utils/asset";

export default function RecipeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link
          to="/recipes"
          className="underline">
          Back to list
        </Link>
      </div>
    );
  }

  document.title = `${recipe.title} · Recipes`;

  return (
    <article>
      <Link
        to="/recipes"
        className="underline">
        ← All recipes
      </Link>
      <h1 className="">{recipe.title}</h1>

      <img
        src={recipe.image.large}
        alt={recipe.title}
        className=""
      />

      <p>{recipe.overview}</p>

      <div className="flex gap-4 text-sm">
        <span>Servings: {recipe.servings}</span>
        <span>Prep: {recipe.prepMinutes} min</span>
        <span>Cook: {recipe.cookMinutes} min</span>
      </div>

      <section>
        <h2 className="text-xl font-semibold">Ingredients</h2>
        <ul className="list-disc pl-6">
          {recipe.ingredients.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Instructions</h2>
        <ol className="list-decimal pl-6">
          {recipe.instructions.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>
    </article>
  );
}

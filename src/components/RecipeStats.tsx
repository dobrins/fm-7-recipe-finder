import { type Recipe } from "../data/recipes";

type RecipeStatsProps = {
  recipe: Recipe;
  biggerFont?: boolean;
};

const RecipeStats = ({ recipe, biggerFont }: RecipeStatsProps) => {
  const style = biggerFont
    ? "recipe__stats recipe__stats--bigger-font"
    : "recipe__stats";

  return (
    <ul className={style}>
      <li>Servings: {recipe.servings}</li>
      <li>Prep: {recipe.prepMinutes} mins</li>
      <li>Cook: {recipe.cookMinutes} mins</li>
    </ul>
  );
};

export default RecipeStats;

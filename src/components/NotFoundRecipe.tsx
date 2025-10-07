import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const NotFoundRecipe = () => {
  useTitle("Recipe not found");

  return (
    <div className="container">
      <div className="not-found-recipe">
        <h2>Recipe not found</h2>
        <Link
          to="/recipes"
          className="button button--sm">
          Browse recipes
        </Link>
      </div>
    </div>
  );
};

export default NotFoundRecipe;

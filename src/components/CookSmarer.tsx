import { Link } from "react-router-dom";

const CookSmarer = () => {
  return (
    <div className="container">
      <div className="cook-smarter">
        <h2 className="cook-smarter__title">Ready to cook smarter?</h2>
        <p className="cook-smarter__desctiption">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
        <Link
          to="/recipes"
          className="button button--sm">
          Browse recipes
        </Link>
      </div>
    </div>
  );
};

export default CookSmarer;

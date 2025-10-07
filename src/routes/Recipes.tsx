import { recipes } from "../data/recipes";
import { useState, useMemo } from "react";

import { useTitle } from "../hooks/useTitle";
import RecipeCard from "../components/RecipeCard";
import Dropdown from "../components/Dropdown";

const Recipes = () => {
  useTitle("Recipes");

  const [search, setSearch] = useState("");
  const [prepMinutes, setPrepMinutes] = useState<number | null>(null);
  const [cookMinutes, setCookMinutes] = useState<number | null>(null);

  // Search
  const filtered = useMemo(() => {
    let list = recipes;
    const term = search.trim().toLowerCase();

    if (term) {
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(term) ||
          r.ingredients.some((i) => i.toLowerCase().includes(term)) ||
          r.overview.toLowerCase().includes(term)
      );
    }

    if (prepMinutes !== null) {
      list = list.filter((r) => r.prepMinutes <= prepMinutes);
    }
    if (cookMinutes !== null) {
      list = list.filter((r) => r.cookMinutes <= cookMinutes);
    }

    return list;
  }, [search, prepMinutes, cookMinutes]);

  return (
    <div className="recipes">
      <h1 className="recipes__title">Explore our simple, healthy recipes</h1>
      <p className="recipes__description">
        Discover eight quick, whole-food dishes that fit real-life schedules and
        taste amazing. Use the search bar to find a recipe by name or
        ingredient, or simply scroll the list and let something delicious catch
        your eye.
      </p>

      <div className="recipes__filters">
        <Dropdown
          label="Max Prep Time"
          labelShort="Prep"
          options={[0, 5, 10]}
          active={prepMinutes ?? null}
          onSelect={(v) => setPrepMinutes(v)}
        />

        <Dropdown
          label="Max Cook Time"
          labelShort="Cook"
          options={[0, 5, 10, 15, 20]}
          active={cookMinutes ?? null}
          onSelect={(v) => setCookMinutes(v)}
        />
        <label
          className="input-container"
          htmlFor="search">
          <svg
            className="input-container__icon"
            aria-hidden="true">
            <use href="/images/icon-search.svg"></use>
          </svg>
          <input
            className="input"
            type="text"
            id="search"
            placeholder="Search by name or ingredient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <ul className="recipes-list">
        {filtered.map((r) => (
          <RecipeCard
            recipe={r}
            key={r.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Recipes;

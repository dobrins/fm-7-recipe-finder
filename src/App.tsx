import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="">
      <header className="mb-6">
        <Link
          to="/recipes"
          className="">
          Recipes
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

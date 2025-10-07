import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import RecipeList from "./routes/Recipes";
import Recipe from "./routes/Recipe";
import NotFound from "./components/NotFound";
import About from "./routes/About";
import Home from "./routes/Home";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "recipes", element: <RecipeList /> },
      { path: "recipes/:slug", element: <Recipe /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

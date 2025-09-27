import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import RecipeList from "./routes/RecipeList";
import Recipe from "./routes/Recipe";
import NotFound from "./components/NotFound";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <p>HOM</p> },
      { path: "recipes", element: <RecipeList /> },
      { path: "recipes/:slug", element: <Recipe /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

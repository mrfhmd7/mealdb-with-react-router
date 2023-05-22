import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import ErrorHandle from "./components/ErrorHandle/ErrorHandle.jsx";
import Meals from "./components/Meals/Meals.jsx";
import MealDetails from "./components/MealDetails/MealDetails.jsx";
import DefaultPage from "./components/DefaultPage/DefaultPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorHandle></ErrorHandle>,
    children: [
      {
        path: "/",
        element: <DefaultPage></DefaultPage>,
      },
      {
        path: "/meals",
        element: <Meals></Meals>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
      },
      {
        path: "/meal/:mealName",
        element: <MealDetails></MealDetails>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${params.mealName}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

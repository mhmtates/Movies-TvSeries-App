import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme.js";
import HomePage from "./pages/HomePage.jsx";
import TVSeriesPage from "./pages/tvseries/TVSeriesPage.jsx";
import MoviesPage from "./pages/movies/MoviesPage.jsx";
import SearchPage from "./pages/search/SearchPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/diziler",
          element: <TVSeriesPage />
        },
        {
          path: "/filmler",
          element: <MoviesPage />
        },
        {
          path: "/ara",
          element: <SearchPage />
        }
      ]
    },
  ],
);





createRoot(document.getElementById("root")).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </>
)

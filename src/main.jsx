import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme.js";
import HomePage from "./pages/HomePage.jsx";
import TvSeriesPage from "./pages/tvseries/TvSeriesPage.jsx";
import MoviesPage from "./pages/movies/MoviesPage.jsx";
import SearchPage from "./pages/search/SearchPage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/authProvider.jsx";
import Watchlist from "./pages/Watchlist.jsx";
import Protected from "./components/routes/Protected.jsx";


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
          element: <TvSeriesPage />
        },
        {
          path: "/filmler",
          element: <MoviesPage />
        },
        {
          path: "/ara",
          element: <SearchPage />
        },
        {
          path: "/:type/:id",
          element: <DetailsPage />
        },
        {
          path: "/listem",
          element:
            <Protected>
              <Watchlist />
            </Protected>
        }
      ]
    },
  ],
);





createRoot(document.getElementById("root")).render(
  <>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ChakraProvider>
  </>
)

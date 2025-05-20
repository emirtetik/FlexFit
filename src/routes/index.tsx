import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Loading } from "../components/Loading";

const MainLayout = React.lazy(() => import("../components/Layout/main"));
const NotFound = React.lazy(() => import("../pages/notFound"));
const FavoritesPage = React.lazy(() => import("../pages/favorites"));
const Home = React.lazy(() => import("../pages/home"));
const ExercisesDetail = React.lazy(
  () => import("../pages/detail/exercisesDetail")
);

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<Loading />}>
        <MainLayout />
      </React.Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<Loading />}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "exercises/:name",
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <ExercisesDetail />
          </React.Suspense>
        ),
      },
      {
        path: "favorites",
        element: (
          <React.Suspense fallback={<Loading />}>
            <FavoritesPage />
          </React.Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <React.Suspense fallback={<Loading />}>
            <NotFound />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default routes;

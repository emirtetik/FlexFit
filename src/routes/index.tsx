import React from "react";
import { createBrowserRouter } from "react-router-dom";
const NotFound = React.lazy(()=> import("../pages/notFound")) ;
const MainLayout = React.lazy(()=> import("../components/Layout/main")) ;
const Home = React.lazy(()=> import("../pages/home")) ;

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<div>Loading...</div>}>
        <MainLayout />
      </React.Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <React.Suspense fallback={<div>Loading...</div>}>
            <Home />
          </React.Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <React.Suspense fallback={<div>Loading...</div>} >
            <NotFound />
          </React.Suspense>
        ),
      },
    ],
  },
]);

export default routes;
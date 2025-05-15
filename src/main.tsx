import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import ReactDOM from "react-dom/client";
import QueryProvider from "./provider/queryProvider";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <RouterProvider router={routes} />
  </QueryProvider>
);

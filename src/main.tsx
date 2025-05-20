import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import ReactDOM from "react-dom/client";
import QueryProvider from "./provider/queryProvider";
import { ToastContainer } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <RouterProvider router={routes} />
     <ToastContainer />
  </QueryProvider>
);

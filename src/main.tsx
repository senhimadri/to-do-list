import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from "react-router-dom";
import "./index.css";
import NewComponent from "./Components/NewComponent";
import App from "./App";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/NewComponent",
    element: <NewComponent />,
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <h2>New Update</h2>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

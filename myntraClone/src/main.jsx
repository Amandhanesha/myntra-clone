import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App.jsx";
import Home from "./Routes/Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./Routes/Bag.jsx";
import { Provider } from "react-redux";
import myntraStore from "../Store/index.js"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Bag",
        element: <Bag />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

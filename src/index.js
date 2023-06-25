import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Home from "./Pages/Home/Home";
import Iphone from "./Pages/IphonePage/Iphone";
import Ipad from "./Pages/IpadPage/Ipad";
import Mac from "./Pages/MacbookPage/Macbook";
import Details from "./DeviceDetails/details";
import DetailPage from "./DeviceDetails/DetailPage/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/iphone",
    element: <Iphone />,
  },
  {
    path: "/ipad",
    element: <Ipad />,
  },
  {
    path: "/macbook",
    element: <Mac />,
  },
  { path: "/iphone/:ID", element: <Details /> },
  { path: "/ipad/:ID", element: <Details /> },
  { path: "/macbook/:ID", element: <Details /> },
  { path: "/:ID_Pr", element: <DetailPage /> },
]);
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <div className="p-3">
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </div>
);

reportWebVitals();

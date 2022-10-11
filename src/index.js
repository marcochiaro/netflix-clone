import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as StateProvider } from "react-redux";
import { store } from "./app/store";
import { router } from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { RouterProvider } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <StateProvider store={store}>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();

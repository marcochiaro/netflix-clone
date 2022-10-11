import React, { useEffect } from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/index";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login/Login";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const user = null;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
      } else {
        // User is signed out
        // ...
      }
    });
    return unsubscribe;
  }, []);

  return <div className="app">{!user ? <Login /> : <HomeScreen />}</div>;
}

export default App;

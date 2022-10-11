import React, { useEffect } from "react";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/index";
import ErrorPage from "./components/ErrorPage";
import Login from "./components/Login/Login";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import UserProfile from "./components/UserProfile/UserProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <UserProfile />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(login({ uid: user.uid, email: user.email }));
      } else {
        // User is signed out
        // ...
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, []);

  return <div className="app">{!user ? <Login /> : <HomeScreen />}</div>;
}

export default App;

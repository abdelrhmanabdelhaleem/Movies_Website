import React, { useContext } from "react";
import { Offline, Online } from "react-detect-offline";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AuthContext } from "./Components/Context/AuthContext";
import Home from "./Components/Home/Home";
import InverseProtectedRoute from "./Components/InverseProtectedRouter/InverseProtectedRoute.jsx";
import Layout from "./Components/Layout/Layout";
import Login from "./Components/Login/Login";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import Movies from "./Components/Movies/Movies";
import Notfound from "./Components/Notfound/Notfound.jsx";
import OfflineReact from "./Components/offline/OfflineReact.jsx";
import People from "./Components/People/People";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Regester from "./Components/Regester/Regester";
import Tv from "./Components/Tv/Tv";

function App() {
  let { userData, saveUserData, logOut } = useContext(AuthContext);
  const routes = createHashRouter([
    {
      path: "/",
      element: <Layout logOut={logOut} userData={userData} />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoute userData={userData}>
              {" "}
              <Home />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "movies",
          element: (
            <ProtectedRoute userData={userData}>
              {" "}
              <Movies />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "people",
          element: (
            <ProtectedRoute userData={userData}>
              {" "}
              <People />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "tv",
          element: (
            <ProtectedRoute userData={userData}>
              {" "}
              <Tv />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "moviedetails/:id/:type",
          element: (
            <ProtectedRoute userData={userData}>
              {" "}
              <MovieDetails />{" "}
            </ProtectedRoute>
          ),
        },
        {
          path: "login",
          element: (
            <InverseProtectedRoute>
              <Login saveUserData={saveUserData} />{" "}
            </InverseProtectedRoute>
          ),
        },
        {
          path: "regester",
          element: (
            <InverseProtectedRoute>
              <Regester />
            </InverseProtectedRoute>
          ),
        },
        {
          path: "*",
          element: (
            <ProtectedRoute>
              <Notfound />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <Online>
          <RouterProvider router={routes} />
        </Online>
        <Offline>
          <OfflineReact />
        </Offline>
      </div>
    </>
  );
}

export default App;
